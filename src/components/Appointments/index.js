import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

let initialList = localStorage.getItem('initialList')

if (initialList === null) {
  initialList = []
} else {
  initialList = JSON.parse(initialList)
}

class Appointments extends Component {
  state = {
    titleInput: '',
    dateInput: null,
    staredButton: false,
    appoinmentList: initialList,
  }

  onClickStarButton = () => {
    this.setState(prevstate => ({staredButton: !prevstate.staredButton}))
  }

  startButton = ids => {
    const {appoinmentList} = this.state
    const startedAppoinmentList = appoinmentList.map(eachItem => {
      const {id, title, date, star} = eachItem
      const changeStar = {
        id,
        title,
        date,
        star: !star,
      }
      if (eachItem.id === ids) {
        return changeStar
      }
      return eachItem
    })
    this.setState({appoinmentList: startedAppoinmentList})
    localStorage.setItem('initialList', JSON.stringify(startedAppoinmentList))
  }

  onChangeText = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeDate = event => {
    this.setState({dateInput: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()
    const {titleInput, dateInput, appoinmentList} = this.state
    const singleAppointment = {
      id: uuidv4(),
      title: titleInput,
      date: dateInput,
      star: false,
    }
    this.setState({appoinmentList: [...appoinmentList, singleAppointment]})
    this.setState({titleInput: ''})
    this.setState({dateInput: null})
  }

  render() {
    const {appoinmentList, titleInput, dateInput, staredButton} = this.state
    let filterStarArray
    if (staredButton) {
      filterStarArray = appoinmentList.filter(
        eachItem => eachItem.star === true,
      )
    } else {
      filterStarArray = appoinmentList
    }
    return (
      <div className="container">
        <div className="card">
          <div className="top-section">
            <div className="top-left-section">
              <h1 className="heading">Add Appointment</h1>
              <form className="form-element" onSubmit={this.onSubmit}>
                <label className="label" htmlFor="textInput">
                  Title
                </label>
                <br />
                <input
                  type="text"
                  className="input"
                  placeholder="title"
                  id="textInput"
                  onChange={this.onChangeText}
                  value={titleInput}
                />
                <br />
                <label className="label" htmlFor="dateInput">
                  Date
                </label>
                <br />
                <input
                  type="date"
                  className="input"
                  placeholder="dd/mm/yyyy"
                  id="dateInput"
                  onChange={this.onChangeDate}
                  value={dateInput}
                />
                <br />
                <button type="submit" className="add-button">
                  Add
                </button>
              </form>
            </div>

            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
              alt="appointments"
              className="top-right-section"
            />
          </div>
          <hr />
          <div className="bottom-section">
            <div className="bottom-top">
              <h2 className="sub-heading">Appointments</h2>
              <button
                className="star-button"
                type="button"
                onClick={this.onClickStarButton}
              >
                Starred
              </button>
            </div>
            <ul className="bottom-bottom">
              {filterStarArray.map(eachItem => (
                <AppointmentItem
                  eachItem={eachItem}
                  startButton={this.startButton}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments

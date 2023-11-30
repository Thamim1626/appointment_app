import {Component} from 'react'
import './index.css'

class Appointments extends Component {
  state = {titleInpu: '', dateInput: '', appoinmentList: []}

  render() {
    const {appoinmentList} = this.state
    return (
      <div className="container">
        <div className="card">
          <div className="top-section">
            <div className="top-left-section">
              <h1 className="heading">Apointment</h1>
              <from className="form-element">
                <label className="label" htmlFor="textInput">
                  Title
                </label>
                <br />
                <input
                  type="text"
                  className="input"
                  placeholder="title"
                  id="textInput"
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
                />
                <br />
                <button type="submit" data-testid="add" className="add-button">
                  Add
                </button>
              </from>
            </div>

            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
              alt="apoinment"
              className="top-right-section"
            />
          </div>
          <hr />
          <div className="bottom-section">
            <div className="bottom-top">
              <h2 className="sub-heading">Appoinments</h2>
              <button className="star-button"> stared</button>
            </div>
            <ul className="bottom-bottom">
              <li className="item-card">
                <div className="top-item">
                  <p className="title">tille</p>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
                    alt="favorite"
                    className="star-img"
                  />
                </div>
                <p className="bottom-item">date monday 12/23/2023</p>
              </li>

              <li className="item-card">
                <div className="top-item">
                  <p className="title">tille</p>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
                    alt="favorite"
                    className="star-img"
                  />
                </div>
                <p className="bottom-item">date monday 12/23/2023</p>
              </li>

              <li className="item-card">
                <div className="top-item">
                  <p className="title">tille</p>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
                    alt="favorite"
                    className="star-img"
                  />
                </div>
                <p className="bottom-item">date monday 12/23/2023</p>
              </li>

              <li className="item-card">
                <div className="top-item">
                  <p className="title">tille</p>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
                    alt="favorite"
                    className="star-img"
                  />
                </div>
                <p className="bottom-item">date monday 12/23/2023</p>
              </li>

              <li className="item-card">
                <div className="top-item">
                  <p className="title">tille</p>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
                    alt="favorite"
                    className="star-img"
                  />
                </div>
                <p className="bottom-item">date monday 12/23/2023</p>
              </li>

              <li className="item-card">
                <div className="top-item">
                  <p className="title">tille</p>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
                    alt="favorite"
                    className="star-img"
                  />
                </div>
                <p className="bottom-item">date monday 12/23/2023</p>
              </li>

              <li className="item-card">
                <div className="top-item">
                  <p className="title">tille</p>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
                    alt="favorite"
                    className="star-img"
                  />
                </div>
                <p className="bottom-item">date monday 12/23/2023</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments

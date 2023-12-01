import './index.css'

const AppointmentItem = props => {
  const {eachItem, startButton} = props
  const {title, date, star, id} = eachItem
  const formatedDate = new Date(date)
  const dayArray = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wenessday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const startClick = () => {
    startButton(id)
  }
  const year = formatedDate.getFullYear()
  const month = monthNames[formatedDate.getMonth()]
  const dates = formatedDate.getDate()
  const day = dayArray[formatedDate.getDay()]

  const imgUrl = star
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="item-card">
      <div className="top-item">
        <p className="title">{title}</p>
        <button data-testid="star" className="star-btn">
          <img
            src={imgUrl}
            alt="star"
            className="star-img"
            onClick={startClick}
          />
        </button>
      </div>
      <p className="bottom-item">{`Date : ${dates} ${month} ${year}, ${day}`}</p>
    </li>
  )
}

export default AppointmentItem

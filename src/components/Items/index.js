import './index.css'

const Items = props => {
  const {AllDetails, deleteButton} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = AllDetails
  const onDelete = () => {
    deleteButton(id)
  }

  return (
    <li className="li-container">
      <div className="li-list">
        <p className="timeAccessed">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="icons" />
        <p className="title">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>
      <button
        className="btn-button"
        type="button"
        data-testid="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default Items

import './index.css'

const PasswordItem = props => {
  const {passwordDetails, showPassword, deletePassword} = props
  const {id, website, username, password} = passwordDetails

  const onDeletePassword = () => {
    deletePassword(id)
  }

  return (
    <li className="password-container">
      <div className="container">
        <div className="initial-container">
          <p className="initial-text">{username[0].toUpperCase()}</p>
        </div>
        <div className="details-container">
          <p className="text">{website}</p>
          <p className="text">{username}</p>
          {showPassword ? (
            <p className="text">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              className="stars"
              alt="stars"
            />
          )}
        </div>
      </div>
      <button
        className="button"
        type="button"
        testid="delete"
        onClick={onDeletePassword}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="delete-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem

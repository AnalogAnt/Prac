// Write your code here
import './index.css'

const Message = props => {
  const {state} = props
  if (state === true) {
    return <p className="para">Welcome User</p>
  }
  return <p className="para">Please Login</p>
}

export default Message

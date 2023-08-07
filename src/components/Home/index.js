/* eslint-disable import/extensions */
/* eslint-disable no-undef */
// Write your code here
import {Component} from 'react'
import './index.css'
import Login from '../Login/index.js'
import Message from '../Message/index.js'
import Logout from '../Logout/index.js'

class Home extends Component {
  state = {logged: false}

  check = () => {
    const {logged} = this.state
    if (!logged) {
      return <Login />
    }
    return <Logout />
  }

  check1 = () => {
    const {logged} = this.state
    if (!logged) return <Message state={false} />

    return <Message state />
  }

  render() {
    return (
      <div className="bg-con">
        <div className="card-con">
          {this.check1()}
          {this.check()}
        </div>
      </div>
    )
  }
}

export default Home

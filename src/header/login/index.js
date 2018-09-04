import { Component } from 'preact'
import './style.scss'
import firebase from '../../firebase'

export class Login extends Component {
  constructor () {
    super()

    this.state = {
      user: null
    }

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login () {
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(result => {
        const user = result.user
        this.setState({
          user
        })
      })
  }

  logout () {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({
          user: null
        })
      })
  }

  user () {
    if (this.state.user) {
      return (
        <button class='image-button' onClick={this.logout}>
          <img src={this.state.user.photoURL} alt='User profile' />
        </button>
      )
    }
    return <button onClick={this.login}>Login</button>
  }

  render () {
    return <div class='login'>{this.user()}</div>
  }
}

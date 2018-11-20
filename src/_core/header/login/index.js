import { Component } from 'preact'
import './style.scss'
import firebase from '../../../firebase'

export class Login extends Component {

  componentDidMount() {
    firebase.auth().onAuthStateChanged(function (user) {
      this.setState({ user: user });
      this.props.setUser(this.state.user)
    }.bind(this));
    firebase
      .auth()
      .getRedirectResult()
      .then(result => {
        if (result.user) {
          const user = result.user
          this.setState({
            user
          })
        }
      })
  }

  login = () => {
    firebase
      .auth()
      .signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }

  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({
          user: null
        })
      })
  }

  user() {
    if (this.state.user) {
      return (
        <button class='image-button' onClick={this.logout}>
          <img src={this.state.user.photoURL} alt='User profile' />
        </button>
      )
    }
    return <button onClick={this.login}>Login</button>
  }

  render() {
    return <div class='login'>{this.user()}</div>
  }
}

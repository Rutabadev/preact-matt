import { Component } from 'preact'
import './style.scss'
import firebase from '../../../firebase'

export class Login extends Component {  

  componentDidMount() {
    firebase.auth().onAuthStateChanged(function (user) {
      localStorage.removeItem('userLoading')
      this.setState({ user: user });
      this.props.setUser(this.state.user)
    }.bind(this));
  }

  login = () => {
    localStorage.setItem('userLoading', 1)
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
    if (localStorage.getItem('userLoading')) {
      return (
        <button class='image-button' onClick={this.logout}>
          <div class="spinner"></div>
        </button>
      )
    }
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

import { Component } from 'preact'
import './style.scss'
import firebase from '../../../firebase'

export class Login extends Component {

  constructor(props){
    super(props);
    firebase.auth().onAuthStateChanged(function(user) {
      this.setState({ user: user });
    });
  }

  login = () => {
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

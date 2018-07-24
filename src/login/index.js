import { Component } from "preact";
import { auth, provider } from "../firebase";
import "./style.scss";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  login() {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      this.setState({
        user
      });
    });
  }

  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  }

  user() {
    if (this.state.user) {
      return (
        <button onClick={this.logout}>
          <img src={this.state.user.photoURL} alt="User profile" />
        </button>
      );
    } else {
      return <button onClick={this.login}>Login</button>;
    }
  }

  render() {
    return <div class="login">{this.user()}</div>;
  }
}

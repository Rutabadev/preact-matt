import "./style.scss";
import { Component, render } from "preact";
import { CssShowcase } from "./css-showcase";
import { Footer } from "./footer";
import { Fotos } from "./fotos";
import { Header } from "./header";
import { Home } from "./home";
import { NotFound } from "./not-found";
import Router from "preact-router";

const features = [
  {
    name: "Matthieu",
    path: "/",
    main: true
  },
  {
    name: "CSS Showcase",
    path: "/css"
  },
  {
    name: "Fotos",
    path: "/fotos"
  }
];

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      theme: 'light'
    }
  }

  changeTheme() {
    if (this.state.theme === 'light') {
      this.setState({theme: 'dark'})
    } else {
      this.setState({theme: 'light'})
    }
  }

  render() {
    return (
      <div class={"app " + this.state.theme + "-theme"}>
        <Header features={features} changeTheme={this.changeTheme.bind(this)} />
        <div class="content">
          <Router>
            <CssShowcase path="/css" />
            <Fotos path="/fotos" />
            <Home path="/" />
            <NotFound type="404" default />
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}

// Store reference of topmost parent component
// if (typeof window !== "undefined") {
//   const AppComponent = render(<App />, document.getElementById("root"));
//   window.updateApp = () => {
//     console.log(AppComponent.classList.contains("light-theme"));
//     // Update state of topmost parent when this method is called
//     if (AppComponent.classList.contains("light-theme")) {
//       AppComponent.classList.replace("light-theme", "dark-theme");
//       console.log(AppComponent.classList);
//     } else {
//       AppComponent.classList.replace("dark-theme", "light-theme");
//       console.log(AppComponent.classList);
//     }
//   };
// }

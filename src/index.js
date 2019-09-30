import "./style.scss";
import { Component } from "preact";
import Helmet from "preact-helmet";
import { Header, Footer } from "./_core";
import {
  Home,
  CssShowcase,
  Fotos,
  Animals,
  DesTrucs,
  Clicks,
  NotFound,
  ParallaxMatt,
  Highscores
} from "./features";
import Router from "preact-router";
import { isMobile } from "react-device-detect";

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
  },
  {
    name: "Animals",
    path: "/animals"
  },
  {
    name: "Des trucs",
    path: "/trucs"
  },
  {
    name: "Clicks",
    path: "/clicks"
  }
];

export default class App extends Component {
  changeTheme() {

    var theme = localStorage.getItem("theme");

    switch (theme) {
      case "light":
        localStorage.setItem("theme", "dark");
        break;

      case "dark":
        localStorage.setItem("theme", "neon");
        break;

      case "neon":
        localStorage.setItem("theme", "light");
        break;

      default:
        localStorage.setItem("theme", "dark");
        break;
    }

    this.updateStateTheme();
  }

  updateStateTheme() {
    if (localStorage.getItem("theme") !== null) {
      this.setState({ theme: localStorage.getItem("theme") });
    } else {
      this.setState({ theme: "light" });
    }
  }

  changeDevice() {
    if (localStorage.getItem("device") === "mobile") {
      localStorage.setItem("device", "desktop");
    } else {
      localStorage.setItem("device", "mobile");
    }
    this.updateStateDevice();
  }

  updateStateDevice() {
    if (localStorage.getItem("device") !== null) {
      this.setState({ device: localStorage.getItem("device") });
    } else {
      if (isMobile) {
        this.setState({ device: "mobile" });
      } else {
        this.setState({ device: "desktop" });
      }
    }
  }

  constructor() {
    super();
    this.state = {
      theme: "",
      device: "",
      user: null
    };
    this.changeTheme = this.changeTheme.bind(this);
    this.changeDevice = this.changeDevice.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  componentDidMount() {
    this.updateStateTheme();
    this.updateStateDevice();
  }

  setUser(user) {
    this.setState({ user: user });
  }

  render() {
    return (
      <div class={`app ${this.state.theme}-theme ${this.state.device}`}>
        <Helmet
          meta={[
            {
              name: "description",
              content: "The Matthieu Montaillé showcase website"
            }
          ]}
        />
        <Header
          features={features}
          changeTheme={this.changeTheme}
          device={this.state.device}
          changeDevice={this.changeDevice}
          setUser={this.setUser}
        />
        <div class="content">
          <Router>
            <Home path="/" />
            <ParallaxMatt path="/parallax" device={this.state.device} />
            <CssShowcase path="/css" />
            <Fotos path="/fotos" />
            <Animals path="/animals" />
            <DesTrucs path="/trucs" />
            <Clicks
              path="/clicks"
              device={this.state.device}
              user={this.state.user}
            />
            <Highscores path="/highscores" />
            <NotFound type="404" default />
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

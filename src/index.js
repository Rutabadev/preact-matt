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
  render() {
    return (
      <div class="app">
        <Header features={features} />
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

import "./style";
import { Component, render } from "preact";
import { Header } from "./header";
import { Footer } from "./footer";
import { CssShowcase } from "./css-showcase";
import { Fotos } from "./fotos";
import { NotFound } from "./not-found";
import Router from "preact-router";

const features = [
  {
    name: "Matthieu",
    path: "/",
    main: true,
    active: true
  },
  {
    name: "CSS Showcase",
    path: "/",
    active: false
  },
  {
    name: "Fotos",
    path: "/fotos",
    active: false
  }
];

export default class App extends Component {
  render() {
    return (
      <div class="app">
        <Header features={features} />
        <div class="content">
          <Router>
            <CssShowcase path="/" />
            <Fotos path="/fotos" />
            <NotFound default />
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

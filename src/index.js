import "./style";
import { Component, render } from "preact";
import { Header } from "./header";
import { Footer } from "./footer";
import { CssShowcase } from "./css-showcase";
import { Fotos } from "./fotos";
import { NotFound } from "./not-found";
import Router from "preact-router";

export default class App extends Component {
  render() {
    return (
      <div class="app">
        <Header />
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

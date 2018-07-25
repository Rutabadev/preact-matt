import "./style.scss";
import { Component } from "preact";
import { Link } from "preact-router/match";
import { Login } from "./login";
import { SideNav } from "./sidenav";

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      sideNavDisplay: "closed"
    };

    this.closeSideNav = this.closeSideNav.bind(this);
  }

  openSideNav() {
    this.setState({ sideNavDisplay: "open" });
  }

  closeSideNav() {
    this.setState({ sideNavDisplay: "closed" });
  }

  render(props, state) {
    const features = props.features;
    const links = [];
    features.forEach(feature => {
      links.push(
        <Link activeClassName="active" href={feature.path}>
          <button class={feature.main ? "main" : ""}>{feature.name}</button>
        </Link>
      );
    });

    return (
      <div class="header">
        <div class="sidenav-switcher">
          <button class="sidenav-button" onClick={() => this.openSideNav()}>
            #
          </button>
          <SideNav
            features={features}
            sideNavDisplay={this.state.sideNavDisplay}
            closeHandler={this.closeSideNav}
          />
        </div>
        <nav class="menu-links">{links}</nav>
        <div class="authentification">
          <Login />
        </div>
      </div>
    );
  }
}

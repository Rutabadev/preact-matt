import "./style.scss";
import { Component } from "preact";
import { Link } from "preact-router/match";

export class Header extends Component {
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
        <nav class="sidenav-switcher" />
        <nav class="menu-links">{links}</nav>
        <div class="authentification">
          <button onClick={e => alert("Pas encore fait.")}>Login</button>
        </div>
      </div>
    );
  }
}

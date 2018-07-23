import "./style.scss";
import { Component } from "preact";
import { Link } from "preact-router/match";

export class Header extends Component {
  render(props, state) {
    const features = props.features;
    const links = [];
    features.forEach(feature => {
      // let dynamicClass = feature.active ? "secondary active" : "primary";
      let dynamicClass = "primary";
      if (feature.main) {
        dynamicClass += " main";
      }
      links.push(
        <Link activeClassName="active" href={feature.path}>
          <button class={dynamicClass}>{feature.name}</button>
        </Link>
      );
    });
    return (
      <div class="header">
        <nav class="menu-links">{links}</nav>
        <div class="authentification">
          <button class="primary">Login</button>
        </div>
      </div>
    );
  }
}

import "./style.scss";
import { Component } from "preact";

export class Header extends Component {
  render(props, state) {
    const features = props.features;
    const links = [];
    features.forEach(feature => {
      let dynamicClass = feature.active ? "secondary active" : "primary";
      if (feature.main) {
        dynamicClass += " main";
      }
      links.push(<button class={dynamicClass}>{feature.name}</button>);
    });
    return (
      <div class="header">
        <div class="menu-links">{links}</div>
        <div class="authentification">
          <button class="primary">Login</button>
        </div>
      </div>
    );
  }
}

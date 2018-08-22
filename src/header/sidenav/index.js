import "./style.scss";
import { Component } from "preact";
import { Link } from "preact-router/match";
import { MdClose } from "preact-icons/md"

export class SideNav extends Component {

  render() {
    const links = [];
    this.props.features.forEach(feature => {
      links.push(
        <Link activeClassName="active" href={feature.path}>
          <button
            onClick={this.props.closeHandler}
            class={feature.main ? "main" : ""}
          >
            {feature.name}
          </button>
        </Link>
      );
    });

    return (
      <div class={"sidenav " + this.props.sideNavDisplay}>
        <div class="table-wrapper">
          <div class="close-button-wrapper">
            <button class="sidenav-button" onClick={this.props.closeHandler}>
              <MdClose />
            </button>
          </div>
        </div>
        {links}
        <button class="theme-switcher" onClick={this.props.changeTheme}>
          Switch theme
        </button>
      </div>
    );
  }
}

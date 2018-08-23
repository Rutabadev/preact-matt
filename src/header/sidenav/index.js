import "./style.scss";
import { Component } from "preact";
import { Link } from "preact-router/match";
import CloseIcon from "preact-icons/md/close"
import ColorIcon from 'preact-icons/go/color-mode';
import OutsideAlerter from "./outside-alerter";


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
      <OutsideAlerter sideNavDisplay={this.props.sideNavDisplay} closeHandler={this.props.closeHandler}>
        <div class={"sidenav " + this.props.sideNavDisplay}>
          <div class="table-wrapper">
            <div class="close-button-wrapper">
              <button class="sidenav-button" onClick={this.props.closeHandler}>
                <CloseIcon />
              </button>
            </div>
          </div>
          {links}
          <button class="theme-switcher" onClick={this.props.changeTheme}>
            <ColorIcon />
          </button>
        </div>
      </OutsideAlerter>
    );
  }
}

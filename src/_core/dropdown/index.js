import "./style.scss";
import { Component } from "preact";
import OutsideAlerter from "../outside-alerter";

export class Dropdown extends Component {

  render({ show, children, closeHandler, direction }) {
    const display = show ? "open" : "closed";

    return (
      <div class={"dropdown " + (direction ? direction : "down") + (show ? " open" : " close")}>
        <OutsideAlerter thingDisplayed={display} closeHandler={closeHandler}>
          <div class="arrow_box">{children}</div>
        </OutsideAlerter>
      </div>
    );
  }
}

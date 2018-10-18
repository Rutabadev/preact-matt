import "./style.scss";
import { Component } from "preact";
import OutsideAlerter from "../outside-alerter";

export class Dropdown extends Component {

  render({ show, children, closeHandler }) {
    const display = show ? "open" : "closed";

    return (
      <div class={"dropdown" + (show ? " open" : " close")}>
        <OutsideAlerter thingDisplayed={display} closeHandler={closeHandler}>
          <div class="arrow_box">{children}</div>
        </OutsideAlerter>
      </div>
    );
  }
}

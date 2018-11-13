import "./style.scss";
import { Component } from "preact";

export class Clicks extends Component {
  constructor() {
    super();
    this.state = {
      lastClick: null,
      lastPosition: null,
      allowPosition: null,
      score: 0
    };

    this.showClick = this.showClick.bind(this);
    this.showPosition = this.showPosition.bind(this);
  }

  componentDidMount() {
    const clicksDiv = document.getElementById("clicks");
    this.setState({ clicksDivHeight: clicksDiv.clientHeight });
    this.setState({ clicksDivWidth: clicksDiv.clientWidth });
    this.interval = setInterval(
      () =>
        this.setState({
          btnX: Math.random() * (this.state.clicksDivWidth - 30),
          btnY: Math.random() * (this.state.clicksDivHeight - 30),
          buttonClickable: true
        }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  showClick(event) {
    let click = (
      <div class="click" style={{ left: event.clientX, top: event.clientY }}>
        <div class="arrow_box">You clicked here</div>
      </div>
    );
    this.setState({
      lastClick: click
    });
  }

  showPosition(event) {
    if (this.props.device !== "desktop") return;
    let position = (
      <div
        class="click position"
        style={{ left: event.pageX, top: event.nativeEvent.pageY }}
      >
        <div class="arrow_box">You are here</div>
      </div>
    );
    this.setState({
      lastPosition: position
    });
  }

  handleAim() {
    if (this.state.buttonClickable) {
      this.setState({ score: this.state.score + 1 });
      this.setState({ buttonClickable: false });
    }
  }

  render({ device }) {
    return (
      <div
        id="clicks"
        class="clicks"
        onClick={e => this.showClick(e)}
        onMouseEnter={() => this.setState({ allowPosition: true })}
        onMouseLeave={() => this.setState({ allowPosition: false })}
        onMouseMove={e => this.showPosition(e)}
      >
        <p>Score : {this.state.score}</p>
        {this.state.lastClick}
        {device === "desktop" && this.state.allowPosition
          ? this.state.lastPosition
          : null}
        <button
          onClick={() => this.handleAim()}
          class="secondary"
          style={{
            width: "30px",
            height: "30px",
            padding: "0",
            left: `${this.state.btnX}px`,
            top: `${this.state.btnY}px`,
            transition: `${
              device === "desktop" ? "left .2s ease, top .2s ease" : "none"
            }`
          }}
        />
      </div>
    );
  }
}

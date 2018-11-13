import "./style.scss";
import { Component } from "preact";

export class Clicks extends Component {
  constructor() {
    super();
    this.state = {
      lastClick: null,
      lastPosition: null,
      allowPosition: null,
      game: false,
      score: 0,
      btnX: "calc(50% - 30px)",
      btnY: "0",
      lastScore: null
    };

    this.showClick = this.showClick.bind(this);
    this.showPosition = this.showPosition.bind(this);
  }

  componentDidMount() {
    const clicksDiv = document.getElementById("clicks");
    this.setState({ clicksDivHeight: clicksDiv.clientHeight });
    this.setState({ clicksDivWidth: clicksDiv.clientWidth });
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

  startGame() {
    this.setState({ game: true });
    let timesRun = 0;
    this.interval = setInterval(() => {
      this.setState({
        btnX: `${Math.random() * (this.state.clicksDivWidth - 30)}px`,
        btnY: `${Math.random() * (this.state.clicksDivHeight - 30)}px`,
        buttonClickable: true
      });
      timesRun++;
      if (timesRun === 10) {
        clearInterval(this.interval);
        this.setState({
          game: false,
          btnX: "calc(50% - 30px)",
          btnY: "0",
          lastScore: this.state.score,
          score: 0
        });
      }
    }, 1000);
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
        {this.state.lastScore !== null && (
          <p>Last score : {this.state.lastScore}</p>
        )}
        {this.state.lastClick}
        {device === "desktop" && this.state.allowPosition
          ? this.state.lastPosition
          : null}
        <button
          onClick={
            this.state.game ? () => this.handleAim() : () => this.startGame()
          }
          class="secondary"
          style={{
            width: this.state.game ? "30px" : "inherit",
            height: this.state.game ? "30px" : "inherit",
            padding: this.state.game ? "0" : ".4em .5em",
            left: `${this.state.btnX}`,
            top: `${this.state.btnY}`,
            transition: device === "desktop" ? "all .2s ease" : "none"
          }}
        >
          {!this.state.game && "Start"}
        </button>
      </div>
    );
  }
}

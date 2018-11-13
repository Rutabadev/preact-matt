import "./style.scss";
import { Component } from "preact";
import firebase from "../../firebase";

export class Highscores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fails: [],
      clicks: []
    };
  }

  componentDidMount() {
    let scoresRef = firebase
      .database()
      .ref("Scores")
      .orderByChild("max");
    scoresRef.on("value", snapshot => {
      snapshot.forEach(data => {
        let score = data.val();
        this.setState({ fails: [score, ...this.state.fails] });
      });
      scoresRef.off();
    });
    let clicksRef = firebase
      .database()
      .ref("Clicks")
      .orderByChild("score");
    clicksRef.on("value", snapshot => {
      snapshot.forEach(data => {
        let score = data.val();
        this.setState({ clicks: [score, ...this.state.clicks] });
      });
      clicksRef.off();
    });
  }

  render() {
    let dataScore = [];
    this.state.fails.forEach(score => {
      dataScore.push(
        <tr>
          <td>{score.displayName}</td>
          <td>{score.max}</td>
        </tr>
      );
    });
    let dataClicks = [];
    this.state.clicks.forEach(score => {
      dataClicks.push(
        <tr>
          <td>{score.displayName}</td>
          <td>{score.score}</td>
        </tr>
      );
    });
    return (
      <div class="highscores">
        <h2>Fails</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>{dataScore}</tbody>
        </table>
        <h2>Clicks</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>{dataClicks}</tbody>
        </table>
      </div>
    );
  }
}

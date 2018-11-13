import "./style.scss";
import { Component } from "preact";
import firebase from "../../firebase";

export class Highscores extends Component {
  constructor(props) {
    super(props);
    this.state = { scores: [] };
  }

  componentDidMount() {
    let scoresRef = firebase
      .database()
      .ref("Scores")
      .orderByChild("max");
    scoresRef.on("value", snapshot => {
      snapshot.forEach(data => {
        let score = data.val();
        this.setState({ scores: [score, ...this.state.scores] });
      });
      scoresRef.off();
    });
  }

  render() {
    let data = [];
    this.state.scores.forEach(score => {
      data.push(
        <tr>
          <td>{score.displayName}</td>
          <td>{score.max}</td>
        </tr>
      );
    });
    return (
      <div class="highscores">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>{data}</tbody>
        </table>
      </div>
    );
  }
}

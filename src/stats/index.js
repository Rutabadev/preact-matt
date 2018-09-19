import './style.scss'
import { Component } from 'preact'

export class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dog: ""
        }
        this.refreshDoggo = this.refreshDoggo.bind(this);
    }

    refreshDoggo() {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                this.setState({ dog: json.message })
            });
    }

    componentDidMount() {
        this.refreshDoggo();
    }

    render({ }, { results }) {
        return (
            <div class="stats">
                <h1>The statistics for this great g@mer</h1>
                <Dog dog={this.state.dog} refresh={this.refreshDoggo} />
            </div>
        )
    }
}

const Dog = ({ dog, refresh }) => (
    <div class="dog">
        <img src={dog} onClick={refresh}></img>
    </div>
);
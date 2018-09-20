import './style.scss'
import { Component } from 'preact'

export class Animals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animal: "dog",
            result: null
        }
        this.refresh = this.refresh.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    refresh() {
        this.setState({ result: null })
        switch (this.state.animal) {
            case 'dog':
                this.setState({ animal: 'dog' });
                fetch('https://dog.ceo/api/breeds/image/random')
                    .then((response) => {
                        return response.json();
                    })
                    .then((json) => {
                        console.log(json)
                        this.setState({ result: json.message })
                    });
                break;
            case 'cat':
                this.setState({ animal: 'cat' });
                fetch('https://api.thecatapi.com/v1/images/search?')
                    .then((response) => {
                        return response.json();
                    })
                    .then((json) => {
                        this.setState({ result: json[0].url })
                    });
                break;
        }
    }

    componentDidMount() {
        this.refresh();
    }

    handleChange(event) {
        this.setState({ animal: event.target.value });
        this.refresh();
    }

    render({ }, { results }) {
        return (
            <div class="animals">
                <select onChange={this.handleChange} name="Animal">
                    <option value="dog">doggo</option>
                    <option value="cat">kitty</option>
                </select>
                {this.state.result ? <Animal animal={this.state.result} refresh={this.refresh} /> : <div class="spinner"></div>}
            </div>
        )
    }
}

const Animal = ({ animal, refresh }) => (
    <div class="animal">
        <img src={animal} onClick={refresh}></img>
    </div>
);
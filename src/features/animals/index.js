import './style.scss'
import { Component } from 'preact'
import { Animal } from './animal';

export class Animals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animal: "dog",
            result: null,
            imageLoading: false
        }
        this.refresh = this.refresh.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
    }

    refresh() {
        this.setState({ result: null, imageLoading: true })
        switch (this.state.animal) {
            case 'dog':
                this.setState({ animal: 'dog' });
                fetch('https://dog.ceo/api/breeds/image/random')
                    .then((response) => {
                        return response.json();
                    })
                    .then((json) => {
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

    handleLoad() {
        this.setState({ imageLoading: false });
    }

    render() {
        return (
            <div class="animals">
                <Select handleChange={this.handleChange}></Select>
                {this.state.result && <Animal animal={this.state.result} refresh={this.refresh} handleLoad={this.handleLoad} />}
                {this.state.imageLoading && <div class="spinner"></div>}
            </div>
        )
    }
}

const Select = ({ handleChange }) => (
    <div class="select">
        <select onChange={handleChange} name="Animal">
            <option value="dog">doggo</option>
            <option value="cat">kitty</option>
        </select>
    </div>
);
import { Component } from "preact";

export class Animal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageLoading: true
        }
        this.imageLoaded = this.imageLoaded.bind(this);
    }

    imageLoaded() {
        this.setState({ imageLoading: false })
        this.props.handleLoad();
    }

    render({ animal, refresh }) {
        return (
            <div class="animal">
                <img src={animal} style={this.state.imageLoading && "display: none"} onLoad={this.imageLoaded} onClick={refresh}></img>
            </div>
        )
    }
}
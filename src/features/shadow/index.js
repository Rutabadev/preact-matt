import "./style.scss";
import { Component } from "preact";

export class Shadow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            horizontal: 0,
            vertical: 1,
            blur: 4
        }
    }

    render() {
        return(
            <div class="shadow">
                <div class="card" style={{boxShadow: `${this.state.horizontal}px ${this.state.vertical}px ${this.state.blur}px var(--shadow-color)`}}>
                    <div class="row">
                        <button class="tertiary" onClick={() => this.setState({blur: this.state.blur - 100})}>---</button>
                        <button class="tertiary" onClick={() => this.setState({blur: this.state.blur - 10})}>--</button>
                        <button class="tertiary" onClick={() => this.setState({blur: this.state.blur - 1})}>-</button>
                        <span>blur</span>
                        <button class="tertiary" onClick={() => this.setState({blur: this.state.blur + 1})}>+</button>
                        <button class="tertiary" onClick={() => this.setState({blur: this.state.blur + 10})}>++</button>
                        <button class="tertiary" onClick={() => this.setState({blur: this.state.blur + 100})}>+++</button>
                    </div>

                    <div class="row">
                        <button class="tertiary" onClick={() => this.setState({horizontal: this.state.horizontal - 100})}>---</button>
                        <button class="tertiary" onClick={() => this.setState({horizontal: this.state.horizontal - 10})}>--</button>
                        <button class="tertiary" onClick={() => this.setState({horizontal: this.state.horizontal - 1})}>-</button>
                        <span>horizontal</span>
                        <button class="tertiary" onClick={() => this.setState({horizontal: this.state.horizontal + 1})}>+</button>
                        <button class="tertiary" onClick={() => this.setState({horizontal: this.state.horizontal + 10})}>++</button>
                        <button class="tertiary" onClick={() => this.setState({horizontal: this.state.horizontal + 100})}>+++</button>
                    </div>

                    <div class="row">
                        <button class="tertiary" onClick={() => this.setState({vertical: this.state.vertical + 100})}>---</button>
                        <button class="tertiary" onClick={() => this.setState({vertical: this.state.vertical + 10})}>--</button>
                        <button class="tertiary" onClick={() => this.setState({vertical: this.state.vertical + 1})}>-</button>
                        <span>vertical</span>
                        <button class="tertiary" onClick={() => this.setState({vertical: this.state.vertical - 1})}>+</button>
                        <button class="tertiary" onClick={() => this.setState({vertical: this.state.vertical - 10})}>++</button>
                        <button class="tertiary" onClick={() => this.setState({vertical: this.state.vertical - 100})}>+++</button>
                    </div>
                </div>
            </div>
        )
    }
}

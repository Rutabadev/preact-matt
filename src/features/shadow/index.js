import "./style.scss";
import { Component } from "preact";

export class Shadow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            horizontal: 0,
            vertical: 1,
            blur: 4
        }
    }

    render() {

        function row(ceci, property) {
            return (
                <div class="row">
                    <button class="tertiary" onClick={() => ceci.setState({ [property]: ceci.state[property] - 100 })}>---</button>
                    <button class="tertiary" onClick={() => ceci.setState({ [property]: ceci.state[property] - 10 })}>--</button>
                    <button class="tertiary" onClick={() => ceci.setState({ [property]: ceci.state[property] - 1 })}>-</button>
                    <span>{property}</span>
                    <button class="tertiary" onClick={() => ceci.setState({ [property]: ceci.state[property] + 1 })}>+</button>
                    <button class="tertiary" onClick={() => ceci.setState({ [property]: ceci.state[property] + 10 })}>++</button>
                    <button class="tertiary" onClick={() => ceci.setState({ [property]: ceci.state[property] + 100 })}>+++</button>
                </div>
            )
        }

        return (
            <div class="shadow">
                <div class="card" style={{ boxShadow: `${this.state.horizontal}px ${this.state.vertical}px ${this.state.blur}px var(--shadow-color)` }}>
                    {row(this, 'blur')}
                    {row(this, 'horizontal')}
                    {row(this, 'vertical')} 
                </div>
            </div>
        )
    }
}

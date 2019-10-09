import "./style.scss";
import { Component } from "preact";
import { Dropdown } from "../../_core";

export class DropFun extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drops: 0,
            dropdown0: {
                open: false
            },
            dropdown: {
                open: false,
                lastchanged: null
            }
        }

        this.switchDrop = this.switchDrop.bind(this);
    }

    switchDrop() {
        if (Date.now() - this.state.dropdown.lastchanged > 100 || this.state.dropdown.lastchanged === null) {
            this.setState({ dropdown: { open: !this.state.dropdown.open, lastchanged: Date.now() } });
        }
    }

    onMoreDrop() {
        let newDrop = this.state.drops;
        this.setState({ ["dropdown" + newDrop]: { open: true }, drops: this.state.drops++ });
        console.log(this.state);
    }

    render() {
        return (
            <div class="dropfun">
                <div class="dropdown-wrapper">
                    <button class='primary' onClick={() => this.switchDrop()}>
                        dropdown
                    </button>
                    <Dropdown show={this.state.dropdown.open} closeHandler={this.switchDrop} direction={"up"}>
                        <button onClick={() => this.onMoreDrop()}>Hello</button>
                        <Dropdown show={this.state.dropdown0.open} closeHandler={this.switchDrop} direction={"up"}>
                            <button onClick={() => this.onMoreDrop()}>Hello</button>
                        </Dropdown>
                    </Dropdown>
                </div>
            </div>
        )
    }
}

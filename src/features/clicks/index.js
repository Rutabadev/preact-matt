import './style.scss'
import { Component } from 'preact'

export class Clicks extends Component {

    constructor() {
        super()
        this.state = {
            lastClick: null
        }

        this.showClick = this.showClick.bind(this);
    }

    showClick(event) {
        console.log(event.clientX);
        let click = (
            <div class="click" style={{ left: event.clientX, top: event.clientY }}>
                <div class="arrow_box">You clicked here</div>
            </div>
        )
        this.setState({
            lastClick: click
        })
    }

    render() {
        return (
            <div class="clicks" onClick={(e) => this.showClick(e)}>
                {this.state.lastClick}
            </div>
        )
    }
}

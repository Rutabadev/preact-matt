import './style.scss'
import { Component } from 'preact'

export class Clicks extends Component {

    constructor() {
        super()
        this.state = {
            lastClick: null,
            lastPosition: null,
        }

        this.showClick = this.showClick.bind(this);
        this.showPosition = this.showPosition.bind(this);
    }

    showClick(event) {
        let click = (
            <div class="click" style={{ left: event.clientX, top: event.clientY }}>
                <div class="arrow_box">You clicked here</div>
            </div>
        )
        this.setState({
            lastClick: click
        })
    }

    showPosition(event) {
        if (this.props.device !== 'desktop') return
        let position = (
            <div class="click position" style={{ left: event.pageX, top: event.nativeEvent.pageY }}>
                <div class="arrow_box">You are here</div>
            </div>
        )
        this.setState({
            lastPosition: position
        })
    }

    render({ device }) {
        return (
            <div class="clicks" onClick={(e) => this.showClick(e)} onMouseMove={(e) => this.showPosition(e)}>
                {this.state.lastClick}
                {(device === 'desktop') ? this.state.lastPosition : null}
            </div>
        )
    }
}

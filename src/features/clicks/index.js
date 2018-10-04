import './style.scss'
import { Component } from 'preact'

export class Clicks extends Component {

    constructor() {
        super()
        this.state = {
            lastClick: null,
            lastPosition: null
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
        console.log(`1 = x: ${event.pageX}, y: ${event.pageY}`)
        console.log(`2 = x: ${event.nativeEvent.clientX}, y: ${event.nativeEvent.clientY}`)
        let position = (
            <div class="click position" style={{ left: event.pageX, top: event.nativeEvent.pageY }}>
                <div class="arrow_box">You are here</div>
            </div>
        )
        this.setState({
            lastPosition: position
        })
    }

    render() {
        return (
            <div class="clicks" onClick={(e) => this.showClick(e)} onMouseMove={(e) => this.showPosition(e)}>
                {this.state.lastClick}
                {this.state.lastPosition}
            </div>
        )
    }
}

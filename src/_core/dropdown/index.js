import "./style.scss"
import { Component } from "preact"
import OutsideAlerter from '../outside-alerter'

export class Dropdown extends Component {

    render({ show, Xcorrect, Ycorrect, children, closeHandler }) {

        const display = show ? 'open' : 'closed'

        return (
            <OutsideAlerter thingDisplayed={display} closeHandler={closeHandler} >
                <div class={"dropdown" + (show ? " open" : " close")} style={{ transform: `translate(${Xcorrect}, ${Ycorrect})` }}>
                    <div class="arrow_box">
                        {children}
                    </div>
                </div>
            </OutsideAlerter>
        )
    }
}

import "./style.scss"
import { Component } from "preact"

export class Dropdown extends Component {

    render({ show, Xcorrect, Ycorrect, children }) {
        return (
            <div class={"dropdown" + (show ? " open" : " close")} style={{ transform: `translate(${Xcorrect}, ${Ycorrect})` }}>
                <div class="arrow_box">
                    {children}
                </div>
            </div>
        )
    }
}

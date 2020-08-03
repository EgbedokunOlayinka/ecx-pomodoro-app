import React from 'react'

export default function BreakLength(props) {
    return (
        <div className="length-div break-div">
            <p className="length-head">Break (mins)</p>
            <div className="length-body">
                <button className="length-btn break-decrement" onClick={props.decrementBreak} disabled={props.isPlay===true ? "disabled" : ""}>-</button>
                <p className="length-time">{ props.breakLength }</p>
                <button className="length-btn break-increment" onClick={props.incrementBreak} disabled={props.isPlay===true ? "disabled" : ""}>+</button>
            </div>
        </div>
    )
}

import React from 'react'

export default function SessionLength(props) {
    return (
        <div className="length-div session-div">
            <p className="length-head">Session (mins)</p>
            <div className="length-body">
                <button className="length-btn session-decrement" onClick={props.decrementSession} disabled={props.isPlay===true ? "disabled" : ""}>-</button>
                <p className="length-time">{ props.sessionLength }</p>
                <button className="length-btn session-increment" onClick={props.incrementSession} disabled={props.isPlay===true ? "disabled" : ""}>+</button>
            </div>
        </div>
    )
}

import React, { Component } from 'react'

export class Timer extends Component {
    state = {
        isSession: true,
        timerSecond: 0,
        intervalId: 0
    }

    play = () => {
        let intervalId = setInterval(this.decreaseTimer, 1000);
        this.props.onPlayStopTimer(true);
        this.setState({
            intervalId: intervalId
        })
    }

    decreaseTimer = () => {
        switch (this.state.timerSecond) {
            case 0:
                if (this.props.timerMinute === 0) {
                    if(this.state.isSession) {
                        this.setState({
                            isSession: false
                        });

                        this.props.onToggleInterval(this.state.isSession);
                    } else {
                        this.setState({
                            isSession: true
                        });

                        this.props.onToggleInterval(this.state.isSession);
                    }
                } else {
                    this.props.onUpdateTimerMinute()
                    this.setState({
                        timerSecond: 59
                    })
                }
                
                break;
            default:
                this.setState((prevState) => {
                    return {timerSecond: prevState.timerSecond - 1}
                } )
                break;
        }
    }

    stop = () => {
        clearInterval(this.state.intervalId);
        this.props.onPlayStopTimer(false);
    }

    reset = () => {
        this.stop();
        this.props.onReset();
        this.props.onPlayStopTimer(false);
        this.setState({
            timerSecond: 0,
            isSession: true
        })
    }

    render() {
       
        return (
            <div className="timer-div">
                <div className="timer-div-head">
                    <p className="length-head">
                        {
                            this.state.isSession === true ? "Session (mins)" : "Break (mins)"
                        }
                    </p>
                    <h2 className="timer">
                        <span>{this.props.timerMinute}</span>
                        <span>:</span>
                        <span>
                            {
                                this.state.timerSecond === 0
                                    ? "00"
                                    : this.state.timerSecond < 10
                                    ? "0" + this.state.timerSecond
                                    : this.state.timerSecond
                            }
                        </span>
                    </h2>
                </div>
        
                <div className="timer-div-buttons">
                    <button className="timer-div-button" onClick={this.play}><i className="fas fa-play"></i></button>
                    <button className="timer-div-button" onClick={this.stop}><i className="fas fa-stop"></i></button>
                    <button className="timer-div-button" onClick={this.reset}><i className="fas fa-redo-alt"></i></button>
                </div>
                    
            </div>
        )
    }
}

export default Timer


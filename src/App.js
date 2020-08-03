import React, { Component } from 'react';
import './App.css';

import BreakLength from './components/BreakLength';
import SessionLength from './components/SessionLength';
import Timer from './components/Timer';



class App extends Component {
  state = {
    breakLength: 5,
    sessionLength: 25,
    timerMinute: 25,
    isPlay: false
  }

  onPlayStopTimer = (isPlay) => {
    this.setState({
      isPlay: isPlay
    })
  }

  incrementBreak = (e) => {
    if (this.state.breakLength === 30) {
      return;
    } else {
      this.setState((prevState, prevProps) => {
        return {breakLength : prevState.breakLength + 1}
      })
    }
  }

  decrementBreak = (e) => {
    if(this.state.breakLength === 1) {
      return;
    } else {
      this.setState((prevState, prevProps) => {
        return {breakLength : prevState.breakLength - 1}
      })
    }
    
  }

  incrementSession = (e) => {
    if (this.state.sessionLength === 60) {
      return;
    } else {
      this.setState((prevState, prevProps) => {
        return {
          sessionLength : prevState.sessionLength + 1,
          timerMinute: prevState.timerMinute + 1
        }
      })
    }
  }

  decrementSession = (e) => {
    if (this.state.sessionLength === 1) {
      return;
    } else {
      this.setState((prevState, prevProps) => {
        return {
          sessionLength : prevState.sessionLength - 1,
          timerMinute: prevState.timerMinute - 1
        }
      })
    }  
  }

  onUpdateTimerMinute = () => {
    this.setState((prevState) => {
      return {timerMinute: prevState.timerMinute - 1}
    })
  }

  onToggleInterval= (isSession) => {
    if(isSession) {
      this.setState({
        timerMinute: this.state.sessionLength
      })
    } else {
      this.setState({
        timerMinute: this.state.breakLength
      })
    }
  }

  onReset = () => {
    this.setState({
      timerMinute: this.state.sessionLength
    })
  }


  render() {
    
    return (
      <div className="container">
        <h1 className="title-head">Pomodoro App</h1>
        <div className="container-divs">
          <BreakLength
           breakLength={this.state.breakLength}
           incrementBreak = {this.incrementBreak}
           decrementBreak = {this.decrementBreak}
           isPlay = {this.state.isPlay}
            />
          <SessionLength
           sessionLength={this.state.sessionLength}
           incrementSession = {this.incrementSession}
           decrementSession = {this.decrementSession}
           isPlay = {this.state.isPlay}
            />
          <Timer 
            sessionLength = {this.state.sessionLength}
            timerMinute = {this.state.timerMinute}
            breakLength = {this.state.breakLength}
            onUpdateTimerMinute = {this.onUpdateTimerMinute}
            onToggleInterval = {this.onToggleInterval}
            onReset = {this.onReset}
            onPlayStopTimer = {this.onPlayStopTimer}
          />
        </div>
      </div>
    )
  }
}

export default App;


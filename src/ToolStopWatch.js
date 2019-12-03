import React, { Component } from 'react';

class ToolStopWatch extends Component {
    constructor() {
        super();
        this.state = {
            time: 0,
            running: false,
        }
    }

    toggleTimer = () => {
        this.setState({
            running: !this.state.running
        })
    }

    resetTimer = () => {
        this.setState({
            time: 0
        })
    }

    format = () => {
        let tenMillisecondsValue = this.state.time % 100;
        let secondsValue = Math.floor(this.state.time / 100) % 60;
        let minutesValue = Math.floor(this.state.time / 6000) % 60;
        let hoursValue = Math.floor(this.state.time / 360000) % 60;

        return (
            <>
                {hoursValue < 10 ? "0" + hoursValue : hoursValue} : {minutesValue < 10 ? "0" + minutesValue : minutesValue} : {secondsValue < 10 ? "0" + secondsValue : secondsValue} : {tenMillisecondsValue < 10 ? "0" + tenMillisecondsValue : tenMillisecondsValue}
            </>
        )
    }

    step = () => {
        this.setState({
            time: this.state.time + 1
        })
    }
    
    render() {        
        const interval = 10;
        this.state.running ? setTimeout(this.step, interval) : clearInterval(this.step)
        
        return (
            <div className="timerContainer">
                <h3>Stop Watch</h3>
                <p className="timeDisplay">{this.format()}</p>
                {this.state.running === false
                    ?
                <button onClick={this.toggleTimer} onKeyPress={(e) => {if (e.key === ' '){this.toggleTimer()}}}>Start</button>
                    :
                <button onClick={this.toggleTimer} onKeyPress={(e) => { if (e.key === ' ') { this.toggleTimer() } }}>Pause</button>
                }
                <button onClick={this.resetTimer} disabled={this.state.running}>Reset</button>
            </div>
        );
    };
};

export default ToolStopWatch;
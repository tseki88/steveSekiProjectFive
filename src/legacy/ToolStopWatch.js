import React, { Component } from 'react';
import TimerDisplay from './components/TimerDisplay';

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
                <div>
                    <p className="timeDisplay"><TimerDisplay time={this.state.time} /></p>
                </div>
                {this.state.running === false
                    ?
                <button onClick={this.toggleTimer}>Start</button>
                    :
                <button onClick={this.toggleTimer}>Pause</button>
                }
                <button onClick={this.resetTimer} disabled={this.state.running}>Reset</button>
            </div>
        );
    };
};

export default ToolStopWatch;
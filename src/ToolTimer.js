import React, { Component } from 'react';
import {alertTime} from './sweetAlert';
import TimerDisplay from './components/TimerDisplay';

class ToolTimer extends Component {
    constructor() {
        super();
        this.state = {
            time: 0,
            running: false,
            setTimer: true,
        }
    }

    toggleTimer = () => {
        this.setState({
            running: !this.state.running
        })
    }

    resetTimer = () => {
        this.setState({
            time: 0,
            setTimer: true,
        })
    }

    step = () => {
        if (this.state.time === 1) {
            this.setState({
                running: false,
                setTimer: true,
            })
            alertTime();
        }


        this.setState({
            time: this.state.time - 1
        })
    }

    addTimerValue = (value) => {
        let updatedTime = this.state.time + value
        this.setState({
            time: updatedTime
        })
    }

    startTimer = () => {
        this.setState({
            setTimer: false,
            running: true,
        })
    }

    render() {
        const interval = 10;
        this.state.running ? setTimeout(this.step, interval) : clearInterval(this.step)

        return (
            <div className="timerContainer">
                <h3>Timer</h3>
                <div>
                    <p className="timeDisplay">
                        <TimerDisplay time={this.state.time} />    
                    </p>
                    {this.state.running === false
                        ?
                        <button disabled={this.state.time === 0 && true} onClick={this.toggleTimer}>Start</button>
                        :
                        <button onClick={this.toggleTimer}>Pause</button>
                    }
                    <button onClick={this.resetTimer} disabled={this.state.running}>Reset</button>
                    <div className="buttonFlex">
                        <button disabled={this.state.running} onClick={() => this.addTimerValue(1000)}>+ 10 sec.</button>
                        <button disabled={this.state.running} onClick={() => this.addTimerValue(3000)}>+ 30 sec.</button>
                        <button disabled={this.state.running} onClick={() => this.addTimerValue(6000)}>+ 1 min.</button>
                        <button disabled={this.state.running} onClick={() => this.addTimerValue(30000)}>+ 5 min.</button>
                        <button disabled={this.state.running} onClick={() => this.addTimerValue(180000)}>+ 30 min.</button>
                        <button disabled={this.state.running} onClick={() => this.addTimerValue(360000)}>+ 1 hr</button>
                    </div>
                </div>
            </div>
        );
    };
};

export default ToolTimer;
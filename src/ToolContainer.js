import React, { Component } from 'react';
import StopWatchTwo from './components/StopWatchTwo';
import TimerTwo from './components/TimerTwo';
import ScoreBoard from './components/ScoreBoard';

class ToolContainer extends Component {
    render() {
        return (
            <div className="flex">
                <div className="toolContainer halfContainer">
                    <StopWatchTwo />
                </div>
                <div className="toolContainer halfContainer">
                    <TimerTwo />
                </div>
                <div className="toolContainer">
                    <ScoreBoard />
                </div>
            </div>
        );
    };
};

export default ToolContainer;
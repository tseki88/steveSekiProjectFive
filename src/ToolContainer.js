import React, { Component } from 'react';
import SessionHeader from './SessionHeader';
import ToolScoreTrack from './ToolScoreTrack';
import StopWatchTwo from './components/StopWatchTwo';
import TimerTwo from './components/TimerTwo';

class ToolContainer extends Component {
    render() {
        return (
            <div className="flex">
                <div className="toolContainer">
                    <SessionHeader />
                    <ToolScoreTrack />
                </div>
                <div className="toolContainer halfContainer">
                    <StopWatchTwo />
                </div>
                <div className="toolContainer halfContainer">
                    <TimerTwo />
                </div>
            </div>
        );
    };
};

export default ToolContainer;
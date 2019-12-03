import React, { Component } from 'react';
import SessionHeader from './SessionHeader';
import ToolScoreTrack from './ToolScoreTrack';
import ToolStopWatch from './ToolStopWatch';
import ToolTimer from './ToolTimer';

class ToolContainer extends Component {
    render() {
        return (
            <div className="flex">
                <div className="toolContainer">
                    <SessionHeader />
                    <ToolScoreTrack />
                </div>
                <div className="toolContainer halfContainer">
                    <ToolStopWatch />
                </div>
                <div className="toolContainer halfContainer">
                    <ToolTimer />
                </div>
            </div>
        );
    };
};

export default ToolContainer;
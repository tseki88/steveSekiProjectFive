import React, { Component } from 'react';
import SessionHeader from './SessionHeader';
// import ToolScoreTrack from './ToolScoreTrack';
// import ToolStopWatch from './ToolStopWatch';
import ToolTimer from './ToolTimer';

class ToolContainer extends Component {    
    render() {
        return (
                <div className="toolContainer">
                    <SessionHeader />
                    {/* <ToolScoreTrack /> */}
                    {/* <ToolStopWatch /> */}
                    <ToolTimer />
                </div>
        );
    };
};

export default ToolContainer;
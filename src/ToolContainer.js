import React, { Component } from 'react';
import SessionHeader from './SessionHeader';
import ToolScoreTrack from './ToolScoreTrack';


class ToolContainer extends Component {
    render() {
        return (
            <div className="toolContainer">
                <SessionHeader />
                <ToolScoreTrack />
            </div>
        );
    };
};

export default ToolContainer;
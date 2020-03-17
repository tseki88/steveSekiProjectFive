import React from 'react'

function TimerDisplay(props) { 
    const tenMillisecondsValue = props.time % 100;
    const secondsValue = Math.floor(props.time / 100) % 60;
    const minutesValue = Math.floor(props.time / 6000) % 60;
    const hoursValue = Math.floor(props.time / 360000) % 60;

    return (
        <p className="timeDisplay">
            {hoursValue < 10 ? "0" + hoursValue : hoursValue} 
            <span className="mini">h</span>
            : 
            {minutesValue < 10 ? "0" + minutesValue : minutesValue}
            <span className="mini">m</span> 
            : 
            {secondsValue < 10 ? "0" + secondsValue : secondsValue} 
            <span className="mini">s</span>
            : 
            {tenMillisecondsValue < 10 ? "0" + tenMillisecondsValue 
            : 
            tenMillisecondsValue}
        </p>
    )
}

export default TimerDisplay

import React from 'react'

function TimerDisplay(props) { 
    const tenMillisecondsValue = props.time % 100;
    const secondsValue = Math.floor(props.time / 100) % 60;
    const minutesValue = Math.floor(props.time / 6000) % 60;
    const hoursValue = Math.floor(props.time / 360000) % 60;

    return (
        <div className="timeDisplay">
            {hoursValue < 10 ? "0" + hoursValue : hoursValue} : {minutesValue < 10 ? "0" + minutesValue : minutesValue} : {secondsValue < 10 ? "0" + secondsValue : secondsValue} : {tenMillisecondsValue < 10 ? "0" + tenMillisecondsValue : tenMillisecondsValue}
        </div>
    )
}

export default TimerDisplay

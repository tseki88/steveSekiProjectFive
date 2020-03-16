import React from 'react'
import TimerDisplay from './TimerDisplay';
import useTimer from '../hooks/useTimer'

function StopWatchTwo() {
    const [time, running, toggleRunning, resetTimer] = useTimer(true);

    return (
        <div>
            <TimerDisplay time={time} />
            <button onClick={toggleRunning}>
                {running ? "Pause" : "Start"}
            </button>
            <button onClick={resetTimer} disabled={running}>Reset</button>
        </div>
    )
}

export default StopWatchTwo

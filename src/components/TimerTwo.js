import React from 'react'
import TimerDisplay from './TimerDisplay';
import useTimer from '../hooks/useTimer'

function TimerTwo() {
    const [time, running, toggleRunning, resetTimer, addTimerValue] = useTimer(false);

    return (
        <div>
            <TimerDisplay time={time} />
            <button onClick={toggleRunning} disabled={time === 0}>
                {running ? "Pause" : "Start"}
            </button>
            <button onClick={resetTimer} disabled={running}>Reset</button>
            <button disabled={running} onClick={() => addTimerValue(1000)}>+ 10 sec.</button>
            <button disabled={running} onClick={() => addTimerValue(3000)}>+ 30 sec.</button>
            <button disabled={running} onClick={() => addTimerValue(6000)}>+ 1 min.</button>
            <button disabled={running} onClick={() => addTimerValue(30000)}>+ 5 min.</button>
        </div>
    )
}

export default TimerTwo

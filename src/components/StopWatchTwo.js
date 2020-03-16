import React from 'react'
import TimerDisplay from './TimerDisplay';
import useTimer from '../hooks/useTimer'
import { Button } from 'semantic-ui-react'

function StopWatchTwo() {
    const [time, running, toggleRunning, resetTimer] = useTimer(true);

    return (
        <div>
            <TimerDisplay time={time} />
            <Button.Group >
                <Button icon={running ? "pause" : "play"} content={running ? "Pause" : "Start"} onClick={toggleRunning} />
                <Button icon='undo' content='Reset' onClick={resetTimer} disabled={running} />
            </Button.Group>
        </div>
    )
}

export default StopWatchTwo

import React from 'react'
import TimerDisplay from './TimerDisplay';
import useTimer from '../hooks/useTimer';
import { Button } from 'semantic-ui-react'

function TimerTwo() {
    const [time, running, toggleRunning, resetTimer, addTimerValue] = useTimer(false);

    return (
        <div>
            <TimerDisplay time={time} />
            <div className="buttonFlex">
                <Button.Group >
                    <Button 
                        icon={running ? "pause" : "play"} 
                        content={running ? "Pause" : "Start"} 
                        onClick={toggleRunning} 
                        disabled={time === 0} 
                        />
                    <Button icon='undo' content='Reset' onClick={resetTimer} disabled={running} />
                </Button.Group>
                <Button.Group >
                    <Button compact content="+ 10 sec." disabled={running} onClick={() => addTimerValue(1000)} />
                    <Button compact content="+ 30 sec." disabled={running} onClick={() => addTimerValue(3000)} />
                    <Button compact content="+ 1 min." disabled={running} onClick={() => addTimerValue(6000)} />
                    <Button compact content="+ 5 min." disabled={running} onClick={() => addTimerValue(30000)} />
                </Button.Group>
            </div>
        </div>
    )
}

export default TimerTwo

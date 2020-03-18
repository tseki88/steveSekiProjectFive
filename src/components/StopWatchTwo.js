import React from 'react'
import TimerDisplay from './TimerDisplay';
import useTimer from '../hooks/useTimer'
import { Header, Button, Icon } from 'semantic-ui-react'

function StopWatchTwo(props) {
    const {time, running, toggleRunning, resetTimer} = useTimer(true);

    return (
        <>
            <Header size="medium" icon="time" content="Stop Watch" dividing />
            <Icon name="delete" onClick={props.delete} />
            <TimerDisplay time={time} />
            <Button.Group >
                <Button icon={running ? "pause" : "play"} content={running ? "Pause" : "Start"} onClick={toggleRunning} />
                <Button icon='undo' content='Reset' onClick={resetTimer} disabled={running} />
            </Button.Group>
        </>
    )
}

export default StopWatchTwo

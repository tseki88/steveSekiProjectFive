import React, { useContext } from 'react'
import TimerDisplay from './TimerDisplay';
import useTimer from '../hooks/useTimer'
import { Header, Button, Icon } from 'semantic-ui-react'
import { DarkContext } from '../App';

function StopWatchTwo(props) {
    const {time, running, toggleRunning, resetTimer} = useTimer(true);
    const darkMode = useContext(DarkContext)

    return (
        <div className={`toolContainer ${darkMode ? "darkMode" : null}`}>
            <Header size="medium" icon="time" content="Stop Watch" dividing inverted={darkMode} />
            <Icon name="delete" onClick={props.delete} inverted={darkMode} />
            <TimerDisplay time={time} />
            <Button.Group >
                <Button icon={running ? "pause" : "play"} content={running ? "Pause" : "Start"} onClick={toggleRunning} inverted={darkMode} />
                <Button icon='undo' content='Reset' onClick={resetTimer} disabled={running} inverted={darkMode} />
            </Button.Group>
        </div>
    )
}

export default StopWatchTwo

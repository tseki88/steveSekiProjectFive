import React from 'react'
import TimerDisplay from './TimerDisplay';
import useTimer from '../hooks/useTimer';
import { Header, Button, Icon, Popup } from 'semantic-ui-react'

// option to enable sound trigger
function TimerTwo(props) {
    const {time, running, toggleRunning, resetTimer, addTimerValue, alert, setAlert} = useTimer(false);

    return (
        <>
            <Popup
                trigger={<Header size="medium" icon="hourglass" content="Timer" dividing />}
                content={
                <Button content="Time's Up!" color="red" size="large" onClick={() => setAlert(false)} />}
                position="bottom left"
                open={alert}
            />
            {/* <Header size="medium" icon="hourglass" content="Timer" dividing /> */}
            <Icon name="delete" onClick={props.delete} />
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
        </>
    )
}

export default TimerTwo

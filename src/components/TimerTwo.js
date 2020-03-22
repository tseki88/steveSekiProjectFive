import React, { useContext } from 'react'
import TimerDisplay from './TimerDisplay';
import useTimer from '../hooks/useTimer';
import { Header, Button, Icon, Popup } from 'semantic-ui-react'
import { DarkContext } from '../App';

function TimerTwo(props) {
    const {
        time, 
        running, 
        toggleRunning, 
        resetTimer, 
        addTimerValue, 
        alert, 
        setAlert,
        maxTime
    } = useTimer(false, props.mute);

    const darkMode = useContext(DarkContext)

    return (
        <div className={`toolContainer ${darkMode ? "darkMode" : null}`}>
            <Popup
                trigger={
                    <Header size="medium" dividing inverted={darkMode} >
                        <Icon name={
                            !running && maxTime
                            ?
                            "hourglass"
                            :
                                running && time / maxTime > 0.9
                                ?
                                "hourglass start"
                                :
                                    running && time / maxTime > 0.1
                                    ?
                                    "hourglass half"
                                    :
                                    "hourglass end"
                        } />
                        <Header.Content>Timer</Header.Content>
                        <Icon name={props.mute ? "volume off" : "volume up"} color={props.mute ? "red" : "green"} className="toolStatus" />
                    </Header>
                }
                content={
                <Button content="Time's Up!" color="red" size="large" onClick={()=> setAlert(false)} inverted={darkMode} />}
                position="bottom left"
                open={alert}
                inverted={darkMode}
            />
            {/* <Header size="medium" icon="hourglass" content="Timer" dividing /> */}
            <Icon name="delete" onClick={props.delete} inverted={darkMode} />
            <TimerDisplay time={time} />
            <div className="buttonContainer">
                <Button.Group >
                    <Button 
                        icon={running ? "pause" : "play"} 
                        content={running ? "Pause" : "Start"} 
                        onClick={toggleRunning} 
                        disabled={time === 0} 
                        inverted={darkMode}
                        />
                    <Button icon='undo' content='Reset' onClick={resetTimer} disabled={running} inverted={darkMode} />
                </Button.Group>
                <Button.Group >
                    <Button compact content="+ 10 sec." disabled={running} onClick={() => addTimerValue(1000)} inverted={darkMode} />
                    <Button compact content="+ 30 sec." disabled={running} onClick={() => addTimerValue(3000)} inverted={darkMode} />
                    <Button compact content="+ 1 min." disabled={running} onClick={() => addTimerValue(6000)} inverted={darkMode} />
                    <Button compact content="+ 5 min." disabled={running} onClick={() => addTimerValue(30000)} inverted={darkMode} />
                </Button.Group>
            </div>
        </div>
    )
}

export default TimerTwo

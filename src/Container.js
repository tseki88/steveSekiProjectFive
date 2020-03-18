import React, {useState} from 'react';
import {Button} from 'semantic-ui-react'
import StopWatchTwo from './components/StopWatchTwo';
import TimerTwo from './components/TimerTwo';
import Dice from './components/Dice';
// import ScoreBoard from './components/ScoreBoard';

function Container () {

    const [tools, setTools] = useState(["dice","timer","stopwatch"]);

    const clickHandler = (item) => {
        setTools([...tools, item])
    }

    const getComponent = (tool) => {
        switch(tool) {
            case "timer":
                return <TimerTwo />
            case "stopwatch":
                return <StopWatchTwo />
            case "dice":
                return <Dice />
            default:
                return
        }
    }

    return (
        <>
        {/* <Button.Group> */}
            <Button icon="time" onClick={() => clickHandler("stopwatch")} />
            <Button icon="hourglass" onClick={() => clickHandler("timer")} />
            <Button icon="cube" onClick={() => clickHandler("dice")} />
        {/* </Button.Group> */}
        <div className="flex">
            {tools.map((e,i) => {
                return (
                    <div className="toolContainer halfContainer" key={`${i}-${e}`}>
                        {getComponent(e)}
                    </div>
                )
            })}
        </div>
        </>
    );
};

export default Container;
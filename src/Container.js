import React, {useState} from 'react';
import {Button, Icon} from 'semantic-ui-react'
import StopWatchTwo from './components/StopWatchTwo';
import TimerTwo from './components/TimerTwo';
import Dice from './components/Dice';
import CoinFlip from './components/CoinFlip';
import ScoreBoard from './components/ScoreBoard';

function Container () {

    const [tools, setTools] = useState(["dice","timer","stopwatch", "coin"]);

    const clickHandler = (item) => {
        setTools([...tools, item])
    }

    const removeTool = (id) => {
        let updatedTools = [...tools]
        updatedTools.splice(id, 1);
        setTools(updatedTools);
    }

    const getComponent = (tool,id) => {
        switch(tool) {
            case "timer":
                return <TimerTwo delete={() => removeTool(id)} />
            case "stopwatch":
                return <StopWatchTwo delete={() => removeTool(id)} />
            case "dice":
                return <Dice delete={() => removeTool(id)} />
            case "coin":
                return <CoinFlip delete={() => removeTool(id)} />
            case "scoreboard":
                return <ScoreBoard delete={() => removeTool(id)} />
            default:
                return
        }
    }

    return (
        <>
        {/* <Button.Group> */}
        <div className="buttonContainer">
            <Button size="large" icon="time" onClick={() => clickHandler("stopwatch")} />
            <Button size="large" icon="hourglass" onClick={() => clickHandler("timer")} />
            <Button size="large" icon="cube" onClick={() => clickHandler("dice")} />
            <Button size="large" icon="bitcoin" onClick={() => clickHandler("coin")} />
        </div>
        {/* </Button.Group> */}
        <div className="flex">
            {tools.map((e,i) => {
                return (
                    <div className="toolContainer halfContainer" key={`${i}-${e}`} id={i}>
                        {getComponent(e,i)}
                    </div>
                )
            })}
        </div>
        </>
    );
};

export default Container;
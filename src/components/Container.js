import React, {useState} from 'react';
import {Button, Label} from 'semantic-ui-react'
import StopWatchTwo from './StopWatchTwo';
import TimerTwo from './TimerTwo';
import Dice from './Dice';
import CoinFlip from './CoinFlip';
import ScoreBoard from './ScoreBoard';
import Canvas from './Canvas';

function Container () {

    const [tools, setTools] = useState([
        {tool:"dice", id:"0"},
        {tool:"timer",id:"1"},
        {tool:"stopwatch",id:"2"},
        {tool:"coin",id:"3"},
        {tool: "scoreboard", id:"4"},
        {tool: "canvas", id: "5"}
    ]);
    const [boardLimit, setBoardLimit] = useState(true)

    const [componentId, setComponentId] = useState(tools.length)
    const [mute, setMute] = useState(false)

    const toggleMute = () => {
        setMute(!mute)
    }

    const clickHandler = (item) => {
        let updatedTools = [...tools, {tool: item, id: componentId}]
        setTools(updatedTools)
        setComponentId(prevState => {
            return prevState + 1
        })
        checkLimit(updatedTools)
    }

    const removeTool = (id) => {
        let target = tools.findIndex(e => e.id === id)
        let updatedTools = [...tools]
        updatedTools.splice(target, 1);
        setTools(updatedTools);
        checkLimit(updatedTools)
    }

    const checkLimit = (updatedTools) => {
        const check = updatedTools.filter((e) => {
            return e.tool === "scoreboard"
        })
        if (check.length) {
            setBoardLimit(true)
        } else {
            setBoardLimit(false)
        }
    }

    const getComponent = (tool,id) => {
        switch(tool) {
            case "timer":
                return <TimerTwo key={id} delete={() => removeTool(id)} mute={mute} />
            case "stopwatch":
                return <StopWatchTwo key={id} delete={() => removeTool(id)} />
            case "dice":
                return <Dice key={id} delete={() => removeTool(id)} mute={mute} />
            case "coin":
                return <CoinFlip key={id} delete={() => removeTool(id)} mute={mute} />
            case "scoreboard":
                return <ScoreBoard key={id} delete={() => removeTool(id)} />
            case "canvas":
                return <Canvas key={id} delete={() => removeTool(id)} />
            default:
                return
        }
    }

    return (
        <>
        <div className="componentAppender">
        <Button size="large" icon={mute ? "volume off" : "volume up"} color={mute ? "red" : "green"} onClick={toggleMute} />
        {/* <Button.Group > */}
            <Button size="large" icon="time" onClick={() => clickHandler("stopwatch")} />
            <Button size="large" icon="hourglass" onClick={() => clickHandler("timer")} />
            <Button size="large" icon="cube" onClick={() => clickHandler("dice")} />
            <Button size="large" icon="bitcoin" onClick={() => clickHandler("coin")} />
            <Button size="large" icon="pencil" onClick={() => clickHandler("canvas")} />
            <Button size="large" icon="table" content="temp: max-1" onClick={() => clickHandler("scoreboard")} disabled={boardLimit} />
        {/* </Button.Group> */}
        </div>
        <div className="flex">
            {tools.map((e) => {
                return (
                    // <div className="toolContainer" key={e.id}>
                        getComponent(e.tool,e.id)
                    // </div>
                )
            })}
        </div>
        </>
    );
};

export default Container;
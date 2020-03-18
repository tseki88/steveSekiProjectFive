import React, {useState} from 'react';
import {Button} from 'semantic-ui-react'
import StopWatchTwo from './components/StopWatchTwo';
import TimerTwo from './components/TimerTwo';
import Dice from './components/Dice';
import CoinFlip from './components/CoinFlip';
import ScoreBoard from './components/ScoreBoard';

function Container () {

    const [tools, setTools] = useState([
        {tool:"dice", id:"0"},
        {tool:"timer",id:"1"},
        {tool:"stopwatch",id:"2"},
        {tool:"coin",id:"3"}
    ]);

    const [componentId, setComponentId] = useState(tools.length)

    const clickHandler = (item) => {
        setTools([...tools, {tool: item, id: componentId}])
        setComponentId(prevState => {
            return prevState + 1
        })
    }

    const removeTool = (id) => {
        let target = tools.findIndex(e => e.id === id)
        let updatedTools = [...tools]
        updatedTools.splice(target, 1);
        setTools(updatedTools);
    }

    const getComponent = (tool,id) => {
        switch(tool) {
            case "timer":
                return <TimerTwo key={id} delete={() => removeTool(id)} />
            case "stopwatch":
                return <StopWatchTwo key={id} delete={() => removeTool(id)} />
            case "dice":
                return <Dice key={id} delete={() => removeTool(id)} />
            case "coin":
                return <CoinFlip key={id} delete={() => removeTool(id)} />
            case "scoreboard":
                return <ScoreBoard key={id} delete={() => removeTool(id)} />
            default:
                return
        }
    }

    return (
        <>
        <div className="buttonContainer">
            <Button size="large" icon="time" onClick={() => clickHandler("stopwatch")} />
            <Button size="large" icon="hourglass" onClick={() => clickHandler("timer")} />
            <Button size="large" icon="cube" onClick={() => clickHandler("dice")} />
            <Button size="large" icon="bitcoin" onClick={() => clickHandler("coin")} />
        </div>
        <div className="flex">
            {tools.map((e) => {
                return (
                    <div className="toolContainer halfContainer" key={e.id}>
                        {getComponent(e.tool,e.id)}
                    </div>
                )
            })}
        </div>
        </>
    );
};

export default Container;
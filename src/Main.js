import React, {useState, useContext} from 'react';
import {Sidebar, Segment, Menu, Button, Icon} from 'semantic-ui-react'
import Container from './components/Container';
import { DarkContext } from './App';


function Main(props) {

    const darkMode = useContext(DarkContext)

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

    const clickHandler = (item) => {
        let updatedTools = [...tools, {tool: item, id: componentId}]
        setTools(updatedTools)
        setComponentId(prevState => {
            return prevState + 1
        })
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

    return (
        <>
        <Sidebar.Pushable>
            <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted={darkMode}
                onHide={() => props.setVisible(false)}
                vertical
                visible={props.visible}
                width='thin'
            >
                <Menu.Item icon="time" onClick={() => clickHandler("stopwatch")} />
                <Menu.Item icon="hourglass" onClick={() => clickHandler("timer")} />
                <Menu.Item icon="cube" onClick={() => clickHandler("dice")} />
                <Menu.Item icon="bitcoin" onClick={() => clickHandler("coin")} />
                <Menu.Item icon="pencil" onClick={() => clickHandler("canvas")} />
                <Menu.Item icon="table" onClick={!boardLimit ? () => clickHandler("scoreboard") : null} />
            </Sidebar>
            <Sidebar.Pusher>
                <Container tools={tools} setTools={setTools} checkLimit={checkLimit} />
            </Sidebar.Pusher>
        </Sidebar.Pushable>
        </>
    );
};

export default Main;
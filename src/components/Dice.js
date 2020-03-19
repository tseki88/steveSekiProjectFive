import React, { useState, useEffect } from 'react'
import { Header, Button, Icon, Popup, Transition } from 'semantic-ui-react';

// Custom Dice Faces?

function Dice(props) {
    const [dice, setDice] = useState([[6,6]])
    const [rolling, setRolling] = useState(false)
    const [sum, setSum] = useState("Calc")
    const [popup, setPopup] = useState(false)
    const [popupAdd, setPopupAdd] = useState(false)
    const [popupRemove, setPopupRemove] = useState(false)

    const [uniqueDice, setUniqueDice] = useState({})

    useEffect(() => {
        let diceCount = {}
        dice.forEach((e) => {
            if (!diceCount[e[0]]) {
                diceCount[e[0]] = 1
            } else {
                diceCount[e[0]]++
            }
        })
        setUniqueDice(diceCount)
    },[dice])

    const addDice = (sides) => {
        if (sides === 10) {
            setDice([...dice, [sides, Math.floor(Math.random() * sides)]])
        } else {
            setDice([...dice, [sides, Math.ceil(Math.random() * sides)]])
        }
        setSum("Calc")
    }

    const sortDice = () => {
        let sortedDice = [...dice]
        sortedDice.sort((a,b) => {
            return a[1]-b[1];
        })
        setDice(sortedDice);
    }

    const removeDice = (type) => {
        let newDiceArray = [...dice]
        let target = newDiceArray.findIndex((e) => e[0] === type)
        newDiceArray.splice(target,1)
        setDice(newDiceArray);
        setSum("Calc")
    }

    const displaySum = () => {
        let value = 0
        dice.forEach((e) => {
            value += e[1]
        })
        setSum(value)
    }

    const clearDice = () => {
        setDice([])
        setSum("Calc")
        setPopup(false)
    }

    const rollDice = () => {
        setRolling(true)
        setSum("Calc")
        setTimeout(() => {
            setRolling(false)
        },2000)
    }

    const displayRandom = () => {
        let diceValues = []
        dice.forEach((e) => {
            let display
            if (e[0] === 10) {
                display = Math.floor(Math.random() * e[0])
            } else {
                display = Math.ceil(Math.random() * e[0])
            }
            diceValues.push([e[0],display])
        })
        diceValues.sort(() => {
            return 1 - Math.floor(Math.random() * 3)
        })
        setDice(diceValues)
    }

    const renderDiceButton = (value, add) => {
        return (
            <Button 
                onClick={() => {add ? addDice(value) : removeDice(value)}} 
                disabled={add ? false : !uniqueDice[`${value}`]} 
            >
                <i className={`dice df-d${value}-${value}`}></i>{uniqueDice[`${value}`] ? uniqueDice[`${value}`] : 0}
            </Button>
        )
    }

    useEffect(() => {
        let interval
        rolling ? interval = setInterval(displayRandom, 100) : clearInterval(interval)

        return () => {
            clearInterval(interval)
        }
    }, [rolling])
    
    return (
        <div className="toolContainer">
            <Header size="medium" icon="cube" content="Dice" dividing />
            <Icon name="delete" onClick={props.delete} />
            <div className="diceContainer">
                {dice.map((e, i) => {
                    return (
                        <Transition
                            animation="tada"
                            duration="500"
                            visible={!rolling}
                        >
                            <i className={`dice df-d${e[0]}-${e[1]}`} key={`${i}-${e[1]}`}></i>
                        </Transition>
                    )
                })}
            </div>
            <Button.Group>
                <Button icon="shuffle" content="Roll" onClick={rollDice} disabled={rolling} />
                <Popup
                    trigger={
                        <Button icon="add" disabled={rolling} />
                    }
                    content={
                        <>
                            <Button.Group className="diceButtons">
                                {renderDiceButton(4,true)}
                                {renderDiceButton(6,true)}
                                {renderDiceButton(8,true)}
                            </Button.Group>
                            <Button.Group className="diceButtons">
                                {renderDiceButton(10,true)}
                                {renderDiceButton(12,true)}
                                {renderDiceButton(20,true)}
                            </Button.Group>
                        </>
                    }
                    on='click'
                    onOpen={() => setPopupAdd(true)}
                    onClose={() => setPopupAdd(false)}
                    position='bottom center'
                    open={popupAdd}
                />
                <Popup
                    trigger={
                        <Button icon="minus" disabled={dice.length === 0 || rolling} />
                    }
                    content={
                        <>
                            <Button.Group className="diceButtons">
                                {renderDiceButton(4,false)}
                                {renderDiceButton(6,false)}
                                {renderDiceButton(8,false)}
                            </Button.Group>
                            <Button.Group className="diceButtons">
                                {renderDiceButton(10,false)}
                                {renderDiceButton(12,false)}
                                {renderDiceButton(20,false)}
                            </Button.Group>
                        </>
                    }
                    on='click'
                    onOpen={() => setPopupRemove(true)}
                    onClose={() => setPopupRemove(false)}
                    position='bottom center'
                    open={popupRemove}
                />
            </Button.Group>
            <Button.Group>
                <Button icon="sort" content="Sort" onClick={sortDice} disabled={rolling} />
                <Button icon="calculator" content={sum ? sum : ""} onClick={displaySum} disabled={rolling} />
                <Popup
                    trigger={
                        <Button icon="undo" content="Clear" disabled={rolling} />
                    }
                    content={<Button color='red' content='Clear Dice?' onClick={clearDice}  />}
                    on='click'
                    onOpen={() => setPopup(true)}
                    onClose={() => setPopup(false)}
                    position='top center'
                    open={popup}
                />
            </Button.Group>
        </div>
    )
}

export default Dice

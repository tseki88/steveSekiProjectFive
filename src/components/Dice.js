import React, { useState, useEffect, useContext } from 'react'
import { Header, Button, Icon, Popup, Transition } from 'semantic-ui-react';
import diceThrow from '../assets/sounds/diceThrow2.wav'
import dieShuffle1 from '../assets/sounds/dieShuffle1.wav'
import dieShuffle2 from '../assets/sounds/dieShuffle2.wav'
import dieShuffle3 from '../assets/sounds/dieShuffle3.wav'
import dieThrow1 from '../assets/sounds/dieThrow1.wav'
import dieThrow2 from '../assets/sounds/dieThrow2.wav'
import dieThrow3 from '../assets/sounds/dieThrow3.wav'
import { DarkContext } from '../App';


function Dice(props) {
    const [dice, setDice] = useState([[6,6]])
    const [rolling, setRolling] = useState(false)
    const [sum, setSum] = useState("Calc")
    const [popup, setPopup] = useState(false)
    const [popupAdd, setPopupAdd] = useState(false)
    const [popupRemove, setPopupRemove] = useState(false)
    
    const darkMode = useContext(DarkContext)

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

        if (!props.mute) {
            const dieRollSound1 = new Audio(dieShuffle1)
            const dieRollSound2 = new Audio(dieShuffle2)
            const dieRollSound3 = new Audio(dieShuffle3)
            let diceThrowSound
            let dieRollSound

            if (dice.length === 1) {
                diceThrowSound = new Audio(diceThrow)
            } else if (dice.length > 1) {
                let r = Math.ceil(Math.random() * 3)
                switch (r) {
                    case 1:
                        dieRollSound = dieRollSound1
                        break
                    case 2:
                        dieRollSound = dieRollSound2
                        break
                    case 3:
                        dieRollSound = dieRollSound3
                        break
                    default:
                }

                dieRollSound.play()

                let t = Math.ceil(Math.random() * 3)
                switch (t) {
                    case 1:
                        diceThrowSound = new Audio(dieThrow1)
                        break
                    case 2:
                        diceThrowSound = new Audio(dieThrow2)
                        break
                    case 3:
                        diceThrowSound = new Audio(dieThrow3)
                        break
                    default:
                        return
                }
            }
            setTimeout(() => {
                
                diceThrowSound.play()
                setRolling(false)
            },2000)
        } else {
            setTimeout(() => {
                setRolling(false)
            },2000)
        }
        setSum("Calc")
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
                inverted={darkMode} 
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
        <div className={`toolContainer ${darkMode ? "darkMode" : null}`}>
            <Header size="medium" dividing inverted={darkMode} >
                <Icon name="cube" />
                <Header.Content>Dice</Header.Content>
                <Icon name={props.mute ? "volume off" : "volume up"} color={props.mute ? "red" : "green"} className="toolStatus" />
            </Header>
            <Icon name="delete" onClick={props.delete} inverted={darkMode} />
            <div className="diceContainer">
                {dice.map((e, i) => {
                    return (
                        <Transition
                            animation="tada"
                            duration="500"
                            visible={!rolling}
                        >
                            <i className={`dice df-d${e[0]}-${e[1]} ${darkMode ? "darkMode" : null}`} key={`${i}-${e[1]}`}></i>
                        </Transition>
                    )
                })}
            </div>
            <Button.Group>
                <Button icon="shuffle" content="Roll" onClick={rollDice} disabled={rolling || dice.length === 0} inverted={darkMode} />
                <Popup
                    trigger={
                        <Button icon="add" disabled={rolling} inverted={darkMode} />
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
                    inverted={darkMode}
                />
                <Popup
                    trigger={
                        <Button icon="minus" disabled={dice.length === 0 || rolling} inverted={darkMode} />
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
                    position='bottom right'
                    open={popupRemove}
                    inverted={darkMode}
                />
            </Button.Group>
            <Button.Group>
                <Button icon="sort" content="Sort" onClick={sortDice} disabled={rolling} inverted={darkMode} />
                <Button icon="calculator" content={sum ? sum : ""} onClick={displaySum} disabled={rolling} inverted={darkMode} />
                <Popup
                    trigger={
                        <Button icon="undo" content="Clear" disabled={rolling} inverted={darkMode} />
                    }
                    content={<Button color='red' content='Clear Dice?' onClick={clearDice} inverted={darkMode}  />}
                    on='click'
                    onOpen={() => setPopup(true)}
                    onClose={() => setPopup(false)}
                    position='top center'
                    open={popup}
                    inverted={darkMode}
                />
            </Button.Group>
        </div>
    )
}

export default Dice

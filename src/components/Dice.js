import React, { useState, useEffect } from 'react'
import { Header, Button, Modal, Form, Input } from 'semantic-ui-react';

function Dice() {
    const [dice, setDice] = useState([6])
    const [rolling, setRolling] = useState(false)

    console.log("rendered")

    const rollDice = () => {
        setRolling(true)
        // display = Math.ceil(Math.random() * 6)
        // setDice(roll)
        setTimeout(() => {
            setRolling(false)
        },2000)
    }

    const displayRandom = () => {
        let display = Math.ceil(Math.random() * 6)
        setDice(display)
        console.log(display)
    }

    rolling ? setTimeout(displayRandom, 60) : clearInterval(displayRandom)

    useEffect(() => {
        
        return () => {
            clearInterval(displayRandom)
        }
    }, [])
    
    return (
        <div>
            <Header size="medium" icon="cube" content="Dice" dividing />
            <div className="diceContainer">
                <span className={`dice dice-${dice}`} title="Dice 1"></span>
            </div>
            <Button icon="shuffle" content="Roll" onClick={rollDice} />
        </div>
    )
}

export default Dice

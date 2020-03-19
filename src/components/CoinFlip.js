import React, { useState, useEffect } from 'react'
import { Header, Button, Popup, Transition, Icon } from 'semantic-ui-react';
import coinSound from '../assets/sounds/coin.mp3';

function CoinFlip(props) {
    const [coin, setCoin] = useState([[2]])
    const [rolling, setRolling] = useState(false)
    const [sum, setSum] = useState("Calc")
    const [popup, setPopup] = useState(false)

    const [uniqueCoin, setUniqueCoin] = useState({})

    useEffect(() => {
        let CoinCount = {}
        coin.forEach((e) => {
            if (!CoinCount[e]) {
                CoinCount[e] = 1
            } else {
                CoinCount[e]++
            }
        })
        setUniqueCoin(CoinCount)
    },[coin])

    const addCoin = () => {
        setCoin([...coin, Math.ceil(Math.random() * 2)])
        setSum("Calc")
    }

    const removeCoin = () => {
        let newCoinArray = [...coin]
        newCoinArray.pop();
        setCoin(newCoinArray);
        setSum("Calc")
    }

    const displaySum = () => {
        let value = `H - ${uniqueCoin["2"] ? uniqueCoin["2"] : 0 } : T - ${uniqueCoin["1"] ? uniqueCoin["1"] : 0 }`;
        setSum(value)
    }

    const clearCoin = () => {
        setCoin([])
        setSum("Calc")
        setPopup(false)
    }

    const rollCoin = () => {
        if (!props.mute){
            for (let i = 0; i < coin.length; i++) {
                const flipSound = new Audio(coinSound)
                flipSound.play()
            }
        }
        setRolling(true)
        setSum("Calc")
        displayRandom()
        setTimeout(() => {
            setRolling(false)
        },500)
    }

    const displayRandom = () => {
        let CoinValues = []
        coin.forEach((e) => {
            let display
            display = Math.ceil(Math.random() * 2)
            CoinValues.push(display)
        })
        setCoin(CoinValues)
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
            <Header size="medium" dividing>
                <Icon name="bitcoin" />
                <Header.Content>Coin</Header.Content>
                <Icon name={props.mute ? "volume off" : "volume up"} color={props.mute ? "red" : "green"} className="toolStatus" />
            </Header>
            <Icon name="delete" onClick={props.delete} />
            <div className="diceContainer">
                {coin.map((e, i) => {
                    return (
                        <Transition
                            animation="bounce"
                            duration="500"
                            visible={!rolling}
                        >
                            <i className={`dice df-d2-${e}`} key={`${i}-${e}`}></i>
                        </Transition>
                    )
                })}
            </div>
            <Button.Group>
                <Button icon="shuffle" content="Flip" onClick={rollCoin} disabled={rolling || coin.length === 0} />
                <Button icon="add" onClick={addCoin} disabled={rolling} />
                <Button icon="minus" onClick={removeCoin} disabled={coin.length === 0 || rolling} />
            </Button.Group>
            <Button.Group>
                <Button icon="calculator" content={sum ? sum : ""} onClick={displaySum} disabled={rolling} />
                <Popup
                    trigger={
                        <Button icon="undo" content="Clear" disabled={rolling} />
                    }
                    content={<Button color='red' content='Clear Coin?' onClick={clearCoin}  />}
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

export default CoinFlip

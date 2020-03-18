import React, {useState, useEffect} from 'react';
import firebase from '../firebase';
import { Header, Button, Table, Form, Popup, Input } from 'semantic-ui-react';

// Tally / Multiply (point value e.g. for every Egg you get 5 points..)

function ScoreBoard() {
    const {Row, HeaderCell, Body, Cell, Footer} = Table

    const [players, setPlayers] = useState([""]);
    const [scoreTypes, setScoreTypes] = useState([
        {
            category: "Category",
            scores: [0]
        }
    ])
    // const [loading, setLoading] = useState(false)
    const [popup, setPopup] = useState(false)
    const [clearPopup, setClearPopup] = useState(false)

    const playerDbRef = firebase.database().ref("players");
    const scoreTypeDbRef = firebase.database().ref("scoreTypes");

    console.log("rerender")

    const renderPlayers = (
        players.map((e, i) => {
            return (
                <HeaderCell key={i}>{e}</HeaderCell>
            )
        })
    )

    const renderScores = (
        scoreTypes.map((e,i) => {
            return(
                e 
                ?
                <Row key={i} id={i}>
                    <HeaderCell>{e.category}</HeaderCell>
                    {e.scores.map((e, i) => {
                        return (
                        <Cell key={i} id={i}>
                            <Input value={e} type="number" />
                        </Cell>
                        )
                    })}
                </Row>
                :
                null
            )
        })
    )

    const addPlayer = (name) => {
        let newPlayerState = [...players, name]
        playerDbRef.set(newPlayerState)

        let newScoreState = [...scoreTypes]
        newScoreState.forEach((e) => {
            e.scores.push(0)
        })
        scoreTypeDbRef.set(newScoreState)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        addPlayer(e.target.name.value);
        e.target.name.value = "";
        setPopup(false)
    }

    // const removePlayer = () => {

    // }

    const addScore = (scoreName) => {
        let newScores = [];
        for (let i = 0; i < players.length; i++) {
            newScores.push(0)
        }

        let newScoreObject = {
            category: scoreName,
            scores: newScores
        }
        let newScoreState = [...scoreTypes, newScoreObject]
        
        scoreTypeDbRef.set(newScoreState)
    }

    const resetBoard = () => {
        const resetPlayers = [
            "Player 1"
        ]
        
        const resetScores = [
            {
                category: "Category",
                scores: [0]
            }
        ]
        
        playerDbRef.set(resetPlayers);
        scoreTypeDbRef.set(resetScores);
        setClearPopup(false)
    }

    useEffect(() => {
        playerDbRef.on("value", (response) => {
            const newState = [];
            response.forEach((e) => {
                newState.push(e.val())
            })
            setPlayers(newState)
        })

        scoreTypeDbRef.on("value", (response) => {
            const newState = [];
            response.forEach((e) => {
                newState.push(e.val())
            })
            setScoreTypes(newState)
        })
    },[])

    const renderTotals = (
        players.map((e,i) => {
            let total = 0;
            scoreTypes.forEach((e) => {
                total += e.scores[i]
            })
            return <HeaderCell key={i}>{total}</HeaderCell>
        })
    )

    return (
        <div>
            <Header size="medium" icon="table" content="Score Card" dividing />
            <Table celled>
                <Table.Header>
                    <Row>
                        <HeaderCell></HeaderCell>
                        {renderPlayers} 
                    </Row>
                </Table.Header>
                <Body>
                    {renderScores}
                </Body>
                <Footer>
                    <Row>
                        <HeaderCell>Total</HeaderCell>
                        {renderTotals}
                    </Row>
                </Footer>
            </Table>

            <Popup
                    trigger={
                        <Button icon="add user" />
                    }
                    content={
                        <Form onSubmit={(e) => submitHandler(e)} >
                            <Form.Input
                                type="text" 
                                name="name"
                                placeholder="Player Name"
                                required
                            />
                            <Form.Button content="Add" />
                        </Form>
                    }
                    on='click'
                    onOpen={() => setPopup(true)}
                    onClose={() => setPopup(false)}
                    position='top center'
                    open={popup}
                />
            <Button icon="add" content="Row" onClick={() => addScore("New Category")} />
            <Popup
                    trigger={
                        <Button icon="undo" content="Reset"/>
                    }
                    content={<Button color='red' content='Clear?' onClick={resetBoard}  />}
                    on='click'
                    onOpen={() => setClearPopup(true)}
                    onClose={() => setClearPopup(false)}
                    position='top center'
                    open={clearPopup}
                />
        </div>
    )
}

export default ScoreBoard

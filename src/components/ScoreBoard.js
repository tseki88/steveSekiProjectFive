import React, {useState, useEffect} from 'react';
import firebase from '../firebase';
import { Header, Button, Table, Icon, Popup, Input, Loader, Dimmer, Segment, Placeholder } from 'semantic-ui-react';

function ScoreBoard(props) {
    const {Row, HeaderCell, Body, Cell, Footer} = Table

    const [players, setPlayers] = useState([""]);
    const [scoreTypes, setScoreTypes] = useState([
        {
            category: "Category",
            scores: [0]
        }
    ])
    const [confirmDelete, setConfirmDelete] = useState(null)
    const [loading, setLoading] = useState(false)
    const [edit, setEdit] = useState(false)
    const [clearPopup, setClearPopup] = useState(false)
    const [total, setTotal] = useState(false)

    console.log("rerender")

    const playerDbRef = firebase.database().ref("players");
    const scoreTypeDbRef = firebase.database().ref("scoreTypes");

    const changeHandler = (event, catInd, scoreIndex) => {
        let updatedScore = [...scoreTypes]
        let newValue = event.target.value
        updatedScore[catInd]["scores"][scoreIndex] = newValue;
        scoreTypeDbRef.set(updatedScore);
    }

    const addPlayer = () => {
        let newPlayerState = [...players, ""]
        playerDbRef.set(newPlayerState)

        let newScoreState = [...scoreTypes]
        newScoreState.forEach((e) => {
            e.scores.push(0)
        })
        scoreTypeDbRef.set(newScoreState)
        setConfirmDelete(null)
    }

    const confirmRemove = (type, i) => {
        let target = {}
        target[`${type}`] = i
        setConfirmDelete(target)
    }

    const removePlayer = (index) => {
        let newPlayerState = [...players]
        newPlayerState.splice(index, 1)
        playerDbRef.set(newPlayerState)

        let newScoreState = [...scoreTypes]
        newScoreState.forEach((e) => {
            e["scores"].splice(index,1)
        })
        scoreTypeDbRef.set(newScoreState)
        setConfirmDelete(null)
    }

    const addScore = () => {
        let newScores = [];
        for (let i = 0; i < players.length; i++) {
            newScores.push(0)
        }

        let newScoreObject = {
            category: "",
            scores: newScores
        }
        let newScoreState = [...scoreTypes, newScoreObject]
        
        scoreTypeDbRef.set(newScoreState)
        setConfirmDelete(null)
    }

    const removeScoreCategory = (index) => {
        let newScores = [...scoreTypes];
        newScores.splice(index,1);
        scoreTypeDbRef.set(newScores)
        setConfirmDelete(null)
    }

    const editToggle = () => {
        setConfirmDelete(null)
        setEdit(!edit)
    }

    const resetBoard = () => {
        const resetPlayers = [
            ""
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
        setConfirmDelete(null)
    }

    const nameHandler = (event, index) => {
        let updatedPlayers = [...players]
        updatedPlayers[index] = event.target.value;
        playerDbRef.set(updatedPlayers)
    }

    const scoreTypeHandler = (event, index) => {
        let updatedScore = [...scoreTypes]
        updatedScore[index]["category"] = event.target.value;
        scoreTypeDbRef.set(updatedScore)
    }

    const renderPlayers = (
        players.map((e, i) => {
            return (
                <HeaderCell key={i}>
                    {
                    edit
                    ?
                        (!confirmDelete || confirmDelete["player"] !== i)
                        ?
                        <Input 
                            type="text"
                            value={e}
                            fluid
                            placeholder="Name"
                            label={{
                                icon:"delete", 
                                onClick:() => confirmRemove("player",i)
                            }}
                            labelPosition="right corner"    
                        />
                        :
                        <Input 
                            type="text"
                            value={e}
                            fluid
                            placeholder="Name"
                            action={{
                                icon:"trash alternate",
                                color:"red", 
                                onClick: () => removePlayer(i)
                            }}
                        />
                    :
                    <Input 
                        type="text"
                        value={e}
                        fluid
                        placeholder="Name"
                        onChange={(event) => {
                            nameHandler(event, i)
                        }}
                    />
                    }   
                </HeaderCell>
            )
        })
    )

    const renderScores = (
        scoreTypes.map((catObj,catInd) => {
            return(
                catObj 
                ?
                <Row key={catInd} id={catInd}>
                    <HeaderCell>
                    {
                    edit
                    ?
                        (!confirmDelete || confirmDelete["score"] !== catInd)
                        ?
                        <Input 
                            type="text"
                            value={catObj.category}
                            placeholder="Category"
                            fluid
                            label={{
                                icon:"delete", 
                                onClick:() => confirmRemove("score",catInd)
                            }}
                            labelPosition="right corner"    
                        />
                        :
                        <Input 
                            type="text"
                            value={catObj.category}
                            placeholder="Category"
                            fluid
                            action={{
                                icon:"trash alternate",
                                color:"red", 
                                onClick: () => removeScoreCategory(catInd)
                            }}
                        />
                    :
                        <Input 
                            type="text"
                            value={catObj.category}
                            placeholder="Category"
                            fluid
                            onChange={(event) => {
                                scoreTypeHandler(event, catInd)
                            }}    
                        />
                    }   
                    </HeaderCell>
                    {catObj.scores.map((e, i) => {
                        return (
                        <Cell key={i} id={i}>
                            <Input 
                                type="number"
                                value={e} 
                                fluid
                                onChange={(event) => {
                                    changeHandler(event,catInd,i)}}
                                />
                        </Cell>
                        )
                    })}
                </Row>
                :
                null
            )
        })
    )

    const renderTotals = (
        players.map((e,i) => {
            let totalValue = 0;
            scoreTypes.forEach((e) => {
                let value = parseInt(e.scores[i])
                totalValue += (isNaN(value) ?  0 : value);
            })
            return <HeaderCell key={i} >{total ? totalValue : "-"}</HeaderCell>
        })
    )


    // ***** Figure out Firebase event handler unmounting...

    useEffect(() => {
        setLoading(true)
        const playerDbRef = firebase.database().ref("players");

        playerDbRef.on("value", (response) => {
            const newState = [];
            response.forEach((e) => {
                newState.push(e.val())
            })
            setPlayers(newState)
            setLoading(false)
        })

        return(() => {
            // playerDbRef()
        })
    },[])

    useEffect(() => {
        setLoading(true)
        const scoreTypeDbRef = firebase.database().ref("scoreTypes");

        scoreTypeDbRef.on("value", (response) => {
            const newState = [];
            response.forEach((e) => {
                newState.push(e.val())
            })
            setScoreTypes(newState)
            setLoading(false)
        })

        return(() => {
            // scoreTypeDbRef()
        })
    },[])

    return (
        <div className="toolContainer scoreContainer">
            <Header size="medium" icon="table" content="Score Card" dividing />
            <Icon name="delete" onClick={props.delete} />
            {
            loading 
            ? 
            <Segment>
            <Dimmer active>
                <Loader content="Loading" /> 
            </Dimmer>
            <Placeholder style={{ height: 200, width: 300 }} />
            </Segment>
            : 
            <Table definition selectable unstackable columns="3" singleLine >
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
                        <Cell>
                            <Button 
                                icon={total ? "hide" : "calculator"} 
                                content="Total"
                                onClick={() => setTotal(!total)}
                                fluid 
                            />
                        </Cell>
                        {renderTotals}
                    </Row>
                </Footer>
            </Table>
            }
            <Button.Group>
                <Button 
                    icon={edit ? "unlock" : "lock"} 
                    active={!edit}
                    content={edit ? "Lock Table" : "Edit Table"} 
                    onClick={editToggle} 
                />
                <Button icon="add user" content="Player" onClick={addPlayer} disabled={!edit} />
                <Button icon="add" content="Row" onClick={addScore} disabled={!edit} />
                <Popup
                    trigger={
                        <Button icon="undo" content="Reset" disabled={!edit} />
                    }
                    content={<Button color='red' content='Clear?' onClick={resetBoard}  />}
                    on='click'
                    onOpen={() => setClearPopup(true)}
                    onClose={() => setClearPopup(false)}
                    position='top center'
                    open={clearPopup}
                />
            </Button.Group>
        </div>
    )
}

export default ScoreBoard

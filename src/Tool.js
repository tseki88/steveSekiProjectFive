import React, { Component } from 'react';
import UserComponent from './UserComponent'

class ScoreTrackTool extends Component {
    constructor() {
        super();
        this.state = {
            userbaseObjects: [],
            scoreType: [
                ""
            ],
        }
    };


    // Make a handleChange for each score value, as well as username
    addNewUserObject = () => {
        let newUserbaseObjectsArray = [...this.state.userbaseObjects];
        let newUserObject = {
            userName: "",
            userScore: [0]
            // find a way to match the number of 0's on this userScore with this.state.scoreType.length
        }
        for (let i = newUserObject.userScore.length; i < this.state.scoreType.length; i++) {
            newUserObject.userScore.push(0);
        }
        newUserbaseObjectsArray.push(newUserObject)
        this.setState({
            userbaseObjects: newUserbaseObjectsArray
        })
    }

    handleUserNameChange = (e) => {
        let updatedUserbaseObjectsArray = [...this.state.userbaseObjects];
        updatedUserbaseObjectsArray[e.target.id].userName = e.target.value;
        this.setState({
            userbaseObjects: updatedUserbaseObjectsArray
        })
    }

    handleCellValueChange = (e) => {
        let updatedUserbaseObjectsArray = [...this.state.userbaseObjects];
        updatedUserbaseObjectsArray[e.target.name].userScore[e.target.id] = e.target.value;
        this.setState({
            userbaseObjects: updatedUserbaseObjectsArray
        })
    }

    addNewScoreCategory = () => {
        // Adds new score category box
        let newScoreTypeSpreadArray = [...this.state.scoreType];
        newScoreTypeSpreadArray.push("");
        this.setState({
            scoreType: newScoreTypeSpreadArray
        });

        // Goes through each userObject's userscore array, and add a 0 at the end
        let updatedUserbaseObject = [...this.state.userbaseObjects];
        updatedUserbaseObject.map((userObject) => {
            let copyUserScoreArray = [...userObject.userScore];
            copyUserScoreArray.push(0);
            userObject.userScore = copyUserScoreArray;
            return copyUserScoreArray
        });
        // This will then rerender and add another box to each user component
        this.setState({
            userbaseObjects: updatedUserbaseObject
        });
    }

    handleScoreTypeChange = (e) => {
        // Spreads existing values for scoreType into a copy, and then setState to the ScoreTypeCopy with the updated value.
        let updatedScoreTypeSpreadArray = [...this.state.scoreType];
        updatedScoreTypeSpreadArray[parseInt(e.target.id)] = e.target.value;
        this.setState({
            scoreType: updatedScoreTypeSpreadArray
        })
    }

    render() {
        return (
            <div>
                <div className="flex scoreContainer">
                    <div>
                        <div className="cell emptyCell">Score Category</div>
                        {this.state.scoreType.map((scoreTypeName, i) => {
                            return(
                                <div key={i}>
                                    <input ref="stringInput" placeholder="Enter Score Category" type="text" className="cell scoreType" onChange={this.handleScoreTypeChange} value={this.state.scoreType[i]} key={i} id={i} />
                                </div>
                            )
                        }) }
                    </div>
                    {this.state.userbaseObjects.map((userObject, i) => {
                        return(
                        <UserComponent 
                            userName={userObject.userName} 
                            userScoreArray={userObject.userScore} 
                            userbaseObjects={userObject} 
                            scoreTypeReferenceRow={i}
                            keyValue={i}
                            key={i}
                            handleUserNameChange={this.handleUserNameChange}
                            handleCellValueChange={this.handleCellValueChange}
                        />
                        )
                    })}
                    <button className="cell" onClick={this.addNewUserObject}>+ User</button>
                </div>
                <div className="sumRow flex">
                    <div className="cell">Total</div>
                    {this.state.userbaseObjects.map((userObject, i) => {
                        return(
                        <div className="cell" key={i}>
                            {this.state.userbaseObjects[i].userScore.reduce((a,b) => parseInt(a) + parseInt(b), 0)}</div>
                        )
                    })}
                </div>
                <button onClick={this.addNewScoreCategory}>+ Score Category</button>
            </div>
        );
    };
};

export default ScoreTrackTool;
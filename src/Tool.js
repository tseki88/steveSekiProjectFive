import React, { Component } from 'react';
import UserComponent from './UserComponent'

class ScoreTrackTool extends Component {
    constructor() {
        super();
        this.state = {
            userbaseObjects: [
                {
                    userName: "Steve",
                    userScore: [0],
                },
                {
                    userName: "Nuno",
                    userScore: [5],
                }
            ],
            scoreType: [
                "hello"
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
        newUserbaseObjectsArray.push(newUserObject)
        this.setState({
            userbaseObjects: newUserbaseObjectsArray
        })
    }

    handleScoreTypeChange = (e) => {
        // Spreads existing values for scoreType into a copy, and then setState to the ScoreTypeCopy with the updated value.
        let updatedScoreTypeSpreadArray = [...this.state.scoreType];
        updatedScoreTypeSpreadArray[parseInt(e.target.id)] = e.target.value;
        this.setState({
            scoreType: updatedScoreTypeSpreadArray
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
        });
        // This will then rerender and add another box to each user component
        this.setState({
            userbaseObjects: updatedUserbaseObject
        });
    }


    render() {
        return (
            <div>
                <div className="flex scoreContainer">
                    <div>
                        <div className="cell emptyCell">X</div>
                        {this.state.scoreType.length === 0 
                            ? 
                            <div className="cell scoreType defaultOnLoad"><span>+</span> add score category</div> 
                            : 
                            this.state.scoreType.map((scoreTypeName, i) => {
                                return(
                                    <div key={i}>
                                        <input ref="stringInput" type="text" className="cell scoreType" onChange={this.handleScoreTypeChange} value={this.state.scoreType[i]} key={i} id={i} />
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
                        />
                        )
                    })}
                    <button onClick={this.addNewUserObject}>+</button>
                </div>
                <button onClick={this.addNewScoreCategory}>ADD</button>
            </div>
        );
    };
};

export default ScoreTrackTool;
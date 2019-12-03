import React, { Component } from 'react';
import UserComponent from './UserComponent'
import firebase from './firebase';
import alert from './sweetAlert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faPlus } from '@fortawesome/free-solid-svg-icons'

class ToolScoreTrack extends Component {
    constructor() {
        super();
        this.state = {
            userbaseObjects: [],
            scoreType: [
                ""
            ],
        };
    };

    componentDidMount() {
        const scoreDbRef = firebase.database().ref("scoreType");

        scoreDbRef.on("value", (response) => {
            const newState = [];
            const data = response.val();
            for (let key in data) {
                newState.push(data[key]);
            };

            this.setState({
                scoreType: newState
            });
        });

        const userDbRef = firebase.database().ref("userbaseObjects");

        userDbRef.on(("value"), (response) => {
            const newState = [];
            const data = response.val();
            for (let key in data) {
                newState.push(data[key]);
            };

            this.setState({
                userbaseObjects: newState
            });
        });
    };

    addNewUserObject = () => {
        const userDbRef = firebase.database().ref("userbaseObjects");

        const newUserbaseObjectsArray = [...this.state.userbaseObjects];
        const newUserObject = {
            userName: "",
            userScore: []
        };

        for (let i = newUserObject.userScore.length; i < this.state.scoreType.length; i++) {
            newUserObject.userScore.push(0);
        };
        newUserbaseObjectsArray.push(newUserObject);

        userDbRef.set(newUserbaseObjectsArray);
    };

    removeUserObject = (scoreIndex) => {
        const userDbRef = firebase.database().ref("userbaseObjects");
        const copyUserbaseObjectsArray = [...this.state.userbaseObjects];
        copyUserbaseObjectsArray.splice(scoreIndex, 1);
        
        userDbRef.set(copyUserbaseObjectsArray);
    };

    handleUserNameChange = (e) => {
        const userDbRef = firebase.database().ref("userbaseObjects");
        const updatedUserbaseObjectsArray = [...this.state.userbaseObjects];
        updatedUserbaseObjectsArray[e.target.id].userName = e.target.value;
        
        userDbRef.set(updatedUserbaseObjectsArray);
    };

    handleCellValueChange = (e) => {
        const userDbRef = firebase.database().ref("userbaseObjects");
        const updatedUserbaseObjectsArray = [...this.state.userbaseObjects];
        updatedUserbaseObjectsArray[e.target.name].userScore[e.target.id] = e.target.value;

        userDbRef.set(updatedUserbaseObjectsArray);
    };

    addNewScoreCategory = () => {
        const scoreDbRef = firebase.database().ref("scoreType");
        // Adds new score category box
        const newScoreTypeSpreadArray = [...this.state.scoreType];
        newScoreTypeSpreadArray.push("");
        
        scoreDbRef.set(newScoreTypeSpreadArray);

        // Goes through each userObject's userscore array, and add a 0 at the end (for the new score category)
        const userDbRef = firebase.database().ref("userbaseObjects");
        const updatedUserbaseObject = [...this.state.userbaseObjects];
        updatedUserbaseObject.forEach((userObject) => {
            const copyUserScoreArray = [...userObject.userScore];
            copyUserScoreArray.push(0);
            userObject.userScore = copyUserScoreArray;
        });
        // This will then rerender and add another box to each user component
        userDbRef.set(updatedUserbaseObject);
    };

    removeScoreCategory = (scoreIndex) => {
        const scoreDbRef = firebase.database().ref("scoreType");
        const updatedScoreTypeSpreadArray = [...this.state.scoreType];
        updatedScoreTypeSpreadArray.splice(scoreIndex, 1);

        scoreDbRef.set(updatedScoreTypeSpreadArray);

        const userDbRef = firebase.database().ref("userbaseObjects");
        const updatedUserbaseObject = [...this.state.userbaseObjects];
        updatedUserbaseObject.forEach((userObject) => {
            userObject.userScore.splice(scoreIndex, 1);
        });

        userDbRef.set(updatedUserbaseObject);
    };

    handleScoreTypeChange = (e) => {
        const scoreDbRef = firebase.database().ref("scoreType");
        const updatedScoreTypeSpreadArray = [...this.state.scoreType];
        updatedScoreTypeSpreadArray[parseInt(e.target.id)] = e.target.value;
        scoreDbRef.set(updatedScoreTypeSpreadArray);
    };

    resetComponent = () => {
        const userDbRef = firebase.database().ref("userbaseObjects");
        const scoreDbRef = firebase.database().ref("scoreType");

        const resetUserObjects = [
            {
                userName: "",
                userScore: [
                    0,
                ]
            }
        ];

        userDbRef.set(resetUserObjects);
        const resetScoreType = [
            "",
        ];

        scoreDbRef.set(resetScoreType);
    }

    clearScore = () => {
        const userDbRef = firebase.database().ref("userbaseObjects");
        const copyUserbaseObjectsArray = [...this.state.userbaseObjects];

        copyUserbaseObjectsArray.forEach((userObject) => {
            userObject.userScore.forEach((value, index, array) => {
                array[index] = 0;
            });
        });

        userDbRef.set(copyUserbaseObjectsArray);
    };

    render() {
        return (
            <div className="scoreContainer">
                <h3>Score Card</h3>
                <div className="grid relative">
                    <div>
                        <div className="cell"> 
                            <button onClick={() => {alert(() => this.resetComponent())}}>Reset All</button>
                            <button onClick={() => {alert(() => this.clearScore())}}>Clear Score</button>
                        </div>
                        {this.state.scoreType.map((scoreTypeName, i) => {
                            return(
                                <div className="relative" key={i}>
                                    {
                                    this.state.scoreType.length !== 1
                                        &&
                                    <button className="delete deleteScoreType" 
                                    onClick={() => {alert(() => this.removeScoreCategory(i))}} id={i}>x</button>
                                    }
                                    <input placeholder="Category Name" type="text" className="cell scoreType" onChange={this.handleScoreTypeChange} value={scoreTypeName} id={i} />
                                </div>
                            )
                        }) }
                    </div>
                    <button className="addScoreTypeIcon" onClick={this.addNewScoreCategory}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                    {this.state.userbaseObjects.map((userObject, i) => {
                        return(
                        <UserComponent 
                            userbaseObjects={userObject}
                            userbaseData={this.state.userbaseObjects}
                            scoreTypeReferenceRow={i}
                            keyValue={i}
                            key={i}
                            handleUserNameChange={this.handleUserNameChange}
                            handleCellValueChange={this.handleCellValueChange}
                            removeUserObject={this.removeUserObject}
                        />
                        )
                    })}
                    <button className="addUserObjectIcon" onClick={this.addNewUserObject}>
                        <FontAwesomeIcon icon={faUserPlus} />
                    </button>
                </div>
                <div className="sumRow grid">
                    <div className="cell"><p>Total</p></div>
                    {this.state.userbaseObjects.map((userObject, i) => {
                        return(
                        <div className="cell" key={i}>
                            <p>
                                {this.state.userbaseObjects[i].userScore.reduce((a,b) => parseInt(a) + parseInt(b), 0)}
                            </p>
                        </div>
                        )
                    })}
                </div>

            </div>
        );
    };
};

export default ToolScoreTrack;
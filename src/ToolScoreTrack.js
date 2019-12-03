import React, { Component } from 'react';
import UserComponent from './UserComponent'
import firebase from './firebase';
import alert from './sweetAlert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faPlus } from '@fortawesome/free-solid-svg-icons'
import LoadingSpinner from './LoadingSpinner';

class ToolScoreTrack extends Component {
    constructor() {
        super();
        this.state = {
            userbaseObjects: [],
            scoreType: [
                ""
            ],
            loading: true,
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

        setTimeout(() => {
            this.setState({
                loading: false,
            })
        }, 2500);
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
        if (this.state.loading) {
            return (
                <>
                    <LoadingSpinner />
                    <h3>Loading..</h3>
                </>
            )
        }
        return (
            <div className="scoreContainer relative">
                <h3>Score Card</h3>
                <button className="addScoreTypeIcon" aria-label="add new score category to scoreboard" onClick={this.addNewScoreCategory}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
                <button className="addUserObjectIcon" aria-label="add new user to scoreboard" onClick={this.addNewUserObject}>
                    <FontAwesomeIcon icon={faUserPlus} />
                </button>
                <div className="gridsContainer">

                    
                    <div className="grid relative">
                        <div className="scoreTypeContainer">
                            <div className="cell emptyCell"> 
                            </div>
                            {this.state.scoreType.map((scoreTypeName, i) => {
                                return(
                                    <div className="relative" key={i}>
                                        {
                                        this.state.scoreType.length !== 1
                                            &&
                                        <button className="delete deleteScoreType" aria-label="delete score category row from scoreboard" 
                                        onClick={() => {alert(() => this.removeScoreCategory(i))}} id={i}>x</button>
                                        }
                                        <input placeholder="Category Name" type="text" className="cell scoreType" onChange={this.handleScoreTypeChange} value={scoreTypeName} id={i} />
                                    </div>
                                )
                            }) }
                        </div>
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
                <div className="scoreButtons">
                    <button onClick={() => { alert(() => this.resetComponent()) }}>Reset</button>
                    <button onClick={() => { alert(() => this.clearScore()) }}>Clear</button>
                </div>
            </div>
        );
    };
};

export default ToolScoreTrack;
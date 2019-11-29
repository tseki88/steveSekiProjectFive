import React, { Component } from 'react';
import UserComponent from './UserComponent'
import firebase from './firebase';

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

    componentDidMount() {
        const scoreDbRef = firebase.database().ref("scoreType");

        scoreDbRef.on("value", (response) => {
            const newState = [];
            const data = response.val();
            for (let key in data) {
                newState.push(data[key]);
            }

            this.setState({
                scoreType: newState
            })
        })

        const userDbRef = firebase.database().ref("userbaseObjects");

        userDbRef.on(("value"), (response) => {
            const newState = [];
            const data = response.val();
            for (let key in data) {
                newState.push(data[key]);
            }

            this.setState({
                userbaseObjects: newState
            })
        })
    }

    addNewUserObject = () => {
        const userDbRef = firebase.database().ref("userbaseObjects");

        let newUserbaseObjectsArray = [...this.state.userbaseObjects];
        let newUserObject = {
            userName: "",
            userScore: []
        }
        for (let i = newUserObject.userScore.length; i < this.state.scoreType.length; i++) {
            newUserObject.userScore.push(0);
        }
        newUserbaseObjectsArray.push(newUserObject)

        userDbRef.set(newUserbaseObjectsArray)

        // this.setState({
        //     userbaseObjects: newUserbaseObjectsArray
        // })
    }

    removeUserObject = (e) => {
        const userDbRef = firebase.database().ref("userbaseObjects");
        let copyUserbaseObjectsArray = [...this.state.userbaseObjects];
        copyUserbaseObjectsArray.splice(e.target.id, 1);
        
        userDbRef.set(copyUserbaseObjectsArray)
        
        // this.setState({
        //     userbaseObjects: copyUserbaseObjectsArray
        // })
    }

    handleUserNameChange = (e) => {
        const userDbRef = firebase.database().ref("userbaseObjects");
        let updatedUserbaseObjectsArray = [...this.state.userbaseObjects];
        updatedUserbaseObjectsArray[e.target.id].userName = e.target.value;
        
        userDbRef.set(updatedUserbaseObjectsArray)
        // this.setState({
        //     userbaseObjects: updatedUserbaseObjectsArray
        // })
    }

    handleCellValueChange = (e) => {
        const userDbRef = firebase.database().ref("userbaseObjects");
        let updatedUserbaseObjectsArray = [...this.state.userbaseObjects];
        updatedUserbaseObjectsArray[e.target.name].userScore[e.target.id] = e.target.value;

        userDbRef.set(updatedUserbaseObjectsArray)
        // this.setState({
        //     userbaseObjects: updatedUserbaseObjectsArray
        // })
    }

    addNewScoreCategory = () => {
        const scoreDbRef = firebase.database().ref("scoreType");
        // Adds new score category box
        let newScoreTypeSpreadArray = [...this.state.scoreType];
        newScoreTypeSpreadArray.push("");
        
        scoreDbRef.set(newScoreTypeSpreadArray)
        // this.setState({
        //     scoreType: newScoreTypeSpreadArray
        // });

        // Goes through each userObject's userscore array, and add a 0 at the end
        const userDbRef = firebase.database().ref("userbaseObjects");
        let updatedUserbaseObject = [...this.state.userbaseObjects];
        updatedUserbaseObject.forEach((userObject) => {
            let copyUserScoreArray = [...userObject.userScore];
            copyUserScoreArray.push(0);
            userObject.userScore = copyUserScoreArray;
        });
        // This will then rerender and add another box to each user component
        
        userDbRef.set(updatedUserbaseObject)
        // this.setState({
        //     userbaseObjects: updatedUserbaseObject
        // });
    }

    removeScoreCategory = (e) => {
        const scoreDbRef = firebase.database().ref("scoreType");
        let updatedScoreTypeSpreadArray = [...this.state.scoreType];
        updatedScoreTypeSpreadArray.splice(e.target.id, 1);
        // this.setState({
        //     scoreType:  updatedScoreTypeSpreadArray
        // })
        scoreDbRef.set(updatedScoreTypeSpreadArray)

        const userDbRef = firebase.database().ref("userbaseObjects");
        let updatedUserbaseObject = [...this.state.userbaseObjects];
        updatedUserbaseObject.forEach((userObject) => {
            userObject.userScore.splice(e.target.id, 1);
        })

        userDbRef.set(updatedUserbaseObject)
        // this.setState({
        //     userbaseObjects: updatedUserbaseObject
        // })
    }

    handleScoreTypeChange = (e) => {
        // Spreads existing values for scoreType into a copy, and then setState to the ScoreTypeCopy with the updated value.
        const scoreDbRef = firebase.database().ref("scoreType");
        let updatedScoreTypeSpreadArray = [...this.state.scoreType];
        updatedScoreTypeSpreadArray[parseInt(e.target.id)] = e.target.value;
        scoreDbRef.set(updatedScoreTypeSpreadArray)
        // this.setState({
        //     scoreType: updatedScoreTypeSpreadArray
        // })
    }

    render() {
        return (
            <div>
                <div className="flex scoreContainer">
                    <div>
                        <div className="defaultCell cell"> 
                            <button onClick={this.addNewScoreCategory}>+ Score Category</button>
                        </div>
                        {this.state.scoreType.map((scoreTypeName, i) => {
                            return(
                                <div className="relative" key={i}>
                                    <div className="delete" onClick={(e) => { if (window.confirm('Pleaes Confirm Delete')) this.removeScoreCategory(e)}} id={i}>x</div>
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
                            removeUserObject={this.removeUserObject}
                        />
                        )
                    })}
                    <button className="" onClick={this.addNewUserObject}>+ User</button>
                </div>
                <div className="sumRow flex">
                    <div className="cell">Total</div>
                    {this.state.userbaseObjects.map((userObject, i) => {
                        return(
                        <div className="cell" key={i}>
                            {this.state.userbaseObjects[i].userScore.reduce((a,b) => parseInt(a) + parseInt(b), 0)}
                        </div>
                        )
                    })}
                </div>

            </div>
        );
    };
};

export default ScoreTrackTool;
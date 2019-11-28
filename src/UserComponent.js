import React, { Component } from 'react';
import userbaseOnLoad from './userbaseDefault';

class UserComponent extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         userbaseObjects: [
    //             {
    //                 userName: "",
    //                 userScore: [],
    //             },
    //         ],
    //     }
    // }
    render() {
        return( 
            // Is this ternary even needed...? 
            (this.props.userbaseObjects.userName === "" && this.props.userbaseObjects.length === 1) 
                ?
            <div className="userComponent">
                <div className="userName cell defaultOnLoad"><span>+</span> {userbaseOnLoad[0].userName}</div>
                <div className="cell">{userbaseOnLoad[0].score}</div>
            </div>
                :        
            // this.props.userbaseObjects.map((user, i) => {
                // return(
                    <div className="userComponent" key={this.props.keyValue}>
                        <div className="userName cell" id={this.props.userName}>{this.props.userName}</div>
                        {this.props.userScoreArray.map((scoreValue, i) => {
                            return(
                                <div className="cell" key={i}>{scoreValue}</div>
                            )
                        }) }
                    </div>
                // )
                // })
                );
            };
};

export default UserComponent;
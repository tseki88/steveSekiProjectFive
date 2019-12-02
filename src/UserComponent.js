import React, { Component } from 'react';
import alert from './sweetAlert';

class UserComponent extends Component {    
    render() {
        return( 
            <div className="userComponent relative" key={this.props.keyValue}>
                {
                this.props.userbaseData.length !== 1
                    &&
                <button className="delete deleteUserObject" 
                onClick={() => {
                    alert(() => this.props.removeUserObject(this.props.keyValue)) }
                } 
                id={this.props.keyValue}
                >x</button>
                }
                <input type="text" placeholder="Enter User" className="userName cell" 
                onChange={(e) => this.props.handleUserNameChange(e)} 
                id={this.props.keyValue} value={this.props.userbaseObjects.userName} />
                {this.props.userbaseObjects.userScore.map((scoreValue, i) => {
                    return(
                        <input type="number" className="cell" key={i} name={this.props.keyValue} id={i} onChange={(e) => this.props.handleCellValueChange(e)} value={scoreValue} />   
                    )
                }) }
            </div>
        );
    };
};

export default UserComponent;
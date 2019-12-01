import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class UserComponent extends Component {
    render() {
        return( 
            <div className="userComponent relative" key={this.props.keyValue}>
                {
                this.props.userbaseData.length !== 1
                    ?
                <button className="delete deleteUserObject" 
                onClick={(e) => {if (window.confirm('Please Confirm Delete')) this.props.removeUserObject(e)}} 
                id={this.props.keyValue}
                >x</button>
                    :
                null
                }
                <input type="text" placeholder="Enter User" className="userName cell" 
                onChange={(e) => this.props.handleUserNameChange(e)} 
                id={this.props.keyValue} value={this.props.userName} />
                {this.props.userScoreArray.map((scoreValue, i) => {
                    return(
                        <React.Fragment key={i}>
                            <input type="number" className="cell" key={i} name={this.props.keyValue} id={i} onChange={(e) => this.props.handleCellValueChange(e)}value={scoreValue} />    
                        </React.Fragment>
                    )
                }) }
            </div>
        );
    };
};

export default UserComponent;
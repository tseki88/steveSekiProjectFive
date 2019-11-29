import React, { Component } from 'react';

class UserComponent extends Component {
    render() {
        return( 
            <div className="userComponent" key={this.props.keyValue}>
                <input type="text" placeholder="Enter User" className="userName cell" 
                onChange={(e) => this.props.handleUserNameChange(e)} 
                id={this.props.keyValue} value={this.props.userName} />
                {this.props.userScoreArray.map((scoreValue, i) => {
                    return(
                        <div key={i}>
                            <input type="number" className="cell" key={i} name={this.props.keyValue} id={i} onChange={(e) => this.props.handleCellValueChange(e)}value={scoreValue} />    
                        </div>
                    )
                }) }
            </div>
        );
    };
};

export default UserComponent;
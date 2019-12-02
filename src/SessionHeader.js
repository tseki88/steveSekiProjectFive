import React, { Component } from 'react';
import firebase from './firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck } from '@fortawesome/free-solid-svg-icons'

class SessionHeader extends Component {
    constructor() {
        super();
        this.state = {
            sessionName: "",
            sessionNameEdit: false,
        }
    }

    componentDidMount() {
        const sessionNameDbRef = firebase.database().ref("sessionName");

        sessionNameDbRef.on("value", (response) => {
            const updatedSessionName = response.val()
            this.setState({
                sessionName: updatedSessionName
            })
        })
    }

    editEnable = () => {
        this.setState({
            sessionNameEdit: !this.state.sessionNameEdit
        })
    }

    editSessionName = (e) => {
        const sessionNameDbRef = firebase.database().ref("sessionName");
        let copySessionName = this.state.sessionName;
        copySessionName = e.target.value;
        sessionNameDbRef.set(copySessionName)
    }

    render() {
        return (
            <>
                {this.state.sessionNameEdit === false
                    ?
                    <h3 className="sessionName">{this.state.sessionName} <span className="icon editIcon" onClick={this.editEnable}><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></span> </h3>
                    :
                    <div>
                        <input className="sessionName" type="text" onChange={this.editSessionName} value={this.state.sessionName} onKeyPress={(e) => { if (e.key === 'Enter') { this.editEnable() } }} />
                        <span className="sessionName icon checkIcon" onClick={this.editEnable}><FontAwesomeIcon icon={faCheck} /></span>
                    </div>
                }
            </>
        );
    };
};

export default SessionHeader;
import React, {useState, useEffect} from 'react';
import firebase from '../firebase';

function ScoreBoard() {
    const [userbaseObject, setUserbaseObject] = useState([]);
    const [scoreType, setScoreType] = useState("")
    const [loading, setLoading] = useState(false)
    

    useEffect(() => {
        // use async await
        async function fetchData () {
            setLoading(true)
            const scoreDbRef = firebase.database().ref("scoreType");
            const userDbRef = firebase.database().ref("userbaseObjects");
            
            await scoreDbRef.on("value", (response) => {
                const newState = [];
                const data = response.val();
                for (let key in data) {
                    newState.push(data[key]);
                };
                setScoreType(newState)
            })
            await userDbRef.on(("value"), (response) => {
                const newState = [];
                const data = response.val();
                for (let key in data) {
                    newState.push(data[key]);
                };
                setUserbaseObject(newState)
            })
            await setLoading(false)
        }
        fetchData();

    },[])


    return (
        <div>
            
        </div>
    )
}

export default ScoreBoard

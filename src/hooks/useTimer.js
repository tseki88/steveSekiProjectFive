import {useState, useEffect} from 'react'
import alarm from '../assets/sounds/alarm.mp3'

function useTimer(increment, mute = null) {
    const alertSound = new Audio(alarm)

    const [maxTime, setMaxTime] = useState(0);
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [alert, setAlert] = useState(false)

    const toggleRunning = () => {
        setRunning(!running)
    }

    const resetTimer = () => {
        setTime(0)
        setMaxTime(0)
    }

    useEffect(() => {
        if (!mute) {    
            if (alert) {
                alertSound.play()
            } else {
                alertSound.pause();
                alertSound.currentTime=0;
            }
        }

        setMaxTime(0)

        return (() => {
            alertSound.pause();
            alertSound.currentTime=0;
        })
    },[alert])
    
    const steps = () => {
        if (increment) {
            setTime(prevTime => {
                return prevTime + 1
            })
        } else {
            if (time === 1){
                setRunning(false)
                setAlert(true)
            }

            setTime(prevTime => {
                return prevTime - 1
            })
        }
    }

    const addTimerValue = (value) => {
        if (!increment) {
            setMaxTime(prevTime => {
                return prevTime + value
            })
        }
        
        setTime(prevTime => {
            return prevTime + value
        })
    }
    
    useEffect(() => {
        return () => {
            clearTimeout(steps)
        }
    })
    
    running ? setTimeout(steps, 10) : clearTimeout(steps);
    
    return {time, running, toggleRunning, resetTimer, addTimerValue, alert, setAlert, maxTime, setMaxTime}
}

export default useTimer


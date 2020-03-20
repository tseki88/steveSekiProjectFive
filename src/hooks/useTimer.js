import {useState, useEffect, useMemo, useCallback} from 'react'
import alarm from '../assets/sounds/alarm.mp3'

function useTimer(increment, mute = null) {

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
        const alertSound = new Audio(alarm)
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
        const steps = () => {
            if (increment) {
                setTime(prevTime => {
                    return prevTime + 2
                })
            } else {
                if (time <= 0){
                    setRunning(false)
                    setAlert(true)
                } else {
                    setTime(prevTime => {
                        return prevTime - 2
                    })
                }
            }
        }
        
        const timer = setInterval(steps, 20)
        if (!running) clearInterval(timer);

        return () => {
            clearInterval(timer)
            console.log("hey")
        }
    },[running,time])
    
    return {time, running, toggleRunning, resetTimer, addTimerValue, alert, setAlert, maxTime}
}

export default useTimer


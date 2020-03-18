import {useState, useEffect} from 'react'

function useTimer(increment) {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [alert, setAlert] = useState(false)

    const toggleRunning = () => {
        setRunning(!running)
    }

    const resetTimer = () => {
        setTime(0)
    }
    
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
    
    return {time, running, toggleRunning, resetTimer, addTimerValue, alert, setAlert}
}

export default useTimer


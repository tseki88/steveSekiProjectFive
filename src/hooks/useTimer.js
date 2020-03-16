import {useState, useEffect} from 'react'

function useTimer(increment) {
    const interval = 10;
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

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
            clearInterval(steps)
        }
    })
    
    running ? setTimeout(steps, interval) : clearInterval(steps);
    
    return [time, running, toggleRunning, resetTimer, addTimerValue]
}

export default useTimer


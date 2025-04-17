import React, {useState, useEffect, useRef} from 'react';
import "../styles/stopwatch.css"

const StopWatch = () => {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedtime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10)
        }

        return () => {
            clearInterval(intervalIdRef.current)
        }
    }, [isRunning]);

    function start(){
            setIsRunning(true);
            startTimeRef.current = Date.now() - elapsedtime;
    }

    function stop(){
        setIsRunning(false)
    }

    function reset(){
        setElapsedTime(0)
        setIsRunning(false)
    }

    function formatTime(){
        let hours = Math.floor(elapsedtime / (1000 * 60 * 60))
        let minutes = Math.floor(elapsedtime / (1000 * 60) % 60)
        let seconds = Math.floor(elapsedtime / (1000) % 60)
        let milliseconds = Math.floor(elapsedtime % 1000)

        return `${hours}:${minutes}:${seconds}:${milliseconds}`
    }















    return(
        <div className='maindiv'>
            <div className='stop-watch'>
                <div className='display'>{formatTime()}</div>
                <div className='controls'>
                    <button onClick={start} className='start-button'>Start</button>
                    <button onClick={stop} className='stop-button'>Stop</button>
                    <button onClick={reset} className='reset-button'>Reset</button>


                </div>
            </div>
        </div>
    )
}

export default StopWatch
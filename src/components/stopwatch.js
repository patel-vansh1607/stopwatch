import React, {useState, useEffect, useRef} from 'react';


const StopWatch = () => {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedtime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

    }, [isRunning]);

    function start(){

    }

    function stop(){
        
    }

    function reset(){
        
    }

    function formatTime(){
        return `00:00:00`
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
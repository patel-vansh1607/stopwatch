import React, {useState, useEffect, useRef} from 'react';


const StopWatch = () => {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedtime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

    }, [isRunning]);
    return(
        <div>
            <h1>stopwatch</h1>
        </div>
    )
}

export default StopWatch
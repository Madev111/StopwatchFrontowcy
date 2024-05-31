import {useEffect, useState} from "react";


export const Counter = ()=> {

    const [time, setTime] = useState<number>(0);


    useEffect(() => {
        const interval = setInterval(()=> {
            setTime(prevTime => prevTime + 1)
        }, 10)

        return ()=> {
            clearInterval(interval)
        }
    }, []);


    const minutes = Math.floor((time % 360000) / 6000)
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;

    return <>
        <p>
            {minutes < 10 ? `0${minutes}` : minutes} :
            {seconds < 10 ? `0${seconds}` : seconds} :
            {milliseconds < 10 ? `0${milliseconds}` : milliseconds}
        </p>
    </> }
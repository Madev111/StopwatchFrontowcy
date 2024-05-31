
import {Btn} from "./Btn.tsx";
import {TotalTime} from "./TotalTime.tsx";
import {LapTime} from "./LapTime.tsx";
import {resetLapTime} from "./utils/resetLapTime.ts";
import {useState} from "react";

export const App = ()=> {

    const [runTime, setRunTime] = useState<boolean>(false);

    return <>
        <h1>Stopwatch</h1>
        <Btn body="Start" handleClick={()=> setRunTime(true)}/>
        <Btn body="Stop" handleClick={()=> setRunTime(false)}/>
        <Btn body="Reset"/>
        <Btn body="Lap" handleClick={resetLapTime}/>
        {runTime ?
            <div>
                <TotalTime/>
                <LapTime/>
            </div> : null}

    </>
}
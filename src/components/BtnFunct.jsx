import React, { useState } from 'react'

import './Buttons/Btns.css'

import StartBtn from './Buttons/StartBtn'
import ReStartBtn from './Buttons/ReStartBtn';
import StopBtn from './Buttons/StopBtn';


const Buttons = (props) => {
    const [runing, setRunning]=useState(false)
       
        const handleStart = (started)=>{
            setRunning(started)
            props.start();
        }
        const handleReStart = (restarted)=>{
            setRunning(restarted)
            props.restart();
        }
        const handleStop = (stopped)=>{
            setRunning(stopped)
            props.stop();
        }
        if(runing){
            return(
                <div className='BottonsCnt'>
                    <StopBtn onClick={handleStop} />
                    <ReStartBtn onClick={handleReStart} />
                </div>
            )
        }return(
            <div className='BottonsCnt'>
                <StartBtn onClick={handleStart} />
            </div>
        )
}
 
export default Buttons;
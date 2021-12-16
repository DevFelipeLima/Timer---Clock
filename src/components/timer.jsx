import React, { useState } from 'react'

import './TimerStyle.css'

import Screen from './screen'
import Buttons from './BtnFunct'


const Timer = () => {
    
    const [time, setTime]=useState({
        stateHour:0,
        stateMinute: 0,
        stateSeconds: 0,
    })
    const [interval, setIntervalo]=useState()

        let seconds=time.stateSeconds
        let minutes=time.stateMinute
        let hour=time.stateHour

    const incremet=()=>{
        if(seconds===60){
            minutes++
            seconds=0
        }
        if(minutes ===60){
            hour++
            minutes=0
        }
        seconds++
        return setTime({
            stateHour: hour,
            stateMinute: minutes,
            stateSeconds: seconds
        })
    }
    const start =()=>{
        setIntervalo(setInterval(()=>{
            incremet()
        },1000))
    }
    const stop=()=>{
        clearInterval(interval)
    }
    const restart =()=>{
        setTime({
            stateHour:0,
            stateMinute:0,
            stateSeconds:0,
        })
        hour = minutes = seconds = 0
        stop()
    }

    return ( 
        <section className='Timer'>
            <h1>Timer end Clock</h1>
{            /*passando as propriedades para o children */}
            <Screen hour={time.stateHour} minutes={time.stateMinute} seconds={time.stateSeconds}/>
            <Buttons start={start} stop={stop} restart={restart}/>
        </section>
     );
}
 
export default Timer;
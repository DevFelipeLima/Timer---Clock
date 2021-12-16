import React from 'react'

import { FaPlay} from 'react-icons/fa'

const StartBtn=(props)=>{
    const handleStart=()=>{
        props.onClick(true)
    }
    
    return(
       <button onClick={handleStart}><FaPlay /></button> 
        )
    }
    export default StartBtn
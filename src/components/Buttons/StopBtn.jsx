import React from 'react'

import { FaPauseCircle} from 'react-icons/fa'

const StopBtn=(props)=>{
    const handleStop=()=>{
        props.onClick(false)
    }
    
    return(
       <button onClick={handleStop}><FaPauseCircle /></button> 
        )
    }
    export default StopBtn
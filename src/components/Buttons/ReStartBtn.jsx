import React from 'react'

import { FaRedoAlt} from 'react-icons/fa'

const ReStartBtn=(props)=>{
    const handleReStart=()=>{
        props.onClick(false)
    }
    
    return(
       <button onClick={handleReStart}><FaRedoAlt /></button> 
        )
    }
    export default ReStartBtn
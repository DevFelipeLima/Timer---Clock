import React from 'react'
import './screenStyle.css'

const Screen = (props) => {
    return ( 
        <div className='TimerCont'>
            <div className='visor'>

            </div>
            <p>
                {/*veificando se o valor passando pro cada prop,
                 é menor que 10, se for imprimir 01,02,03... 
                 e nao 1,2,3... */}
                {props.hour<10? '0'+ props.hour:props.hour}:
                {props.minutes<10? '0'+ props.minutes:props.minutes}:
                {props.seconds<10? '0'+ props.seconds:props.seconds}
                
            </p>

        </div>
     );
}
 
export default Screen;
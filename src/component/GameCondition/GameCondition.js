import React from 'react'

const GameCondition = (props) => {
    return (
        <div>
             <p>Playing With : {props.play} </p>
             <input type="number" onChange={props.inputHandler} value={props.play}/>
        </div>
    )
}
export default GameCondition;
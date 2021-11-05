import React from 'react'

const Player = (props) => {
    return (
        <div>
            <button disabled={props.score1 === props.play || props.score2 === props.play  ? true : false} onClick={props.score1Handler}>Player01</button>
            <button disabled={props.score2 === props.play || props.score1 === props.play ? true : false} onClick={props.score2Handler}>Player02</button>
            <button onClick={props.resetHandler}>Resets</button>
        </div>
    )
}

export default Player

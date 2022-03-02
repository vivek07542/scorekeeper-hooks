import React from 'react'

const ScoreBoard = (props) => {
    return (
        <div>
             <h1 data-testid="score1" style={props.score1===props.play ? {color : "green"} : null}>{props.score1}</h1> To <h1 data-testid="score2" style={props.score2===props.play ? {color : "green"} : null}>{props.score2}</h1>
        </div>
    )
}

export default ScoreBoard


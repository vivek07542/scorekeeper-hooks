import React from 'react'

const GameCondition = ({play,inputHandler}) => {
    return (
        <div>
            <p name="playingWithCondition">Playing With : {play}</p>
            <label htmlFor='scoreCondition'>Score Condition</label>
            <input type="text" name="scoreCondition" id="scoreCondition" onChange={inputHandler} value={play}/>
        </div>
    )
}
export default GameCondition;
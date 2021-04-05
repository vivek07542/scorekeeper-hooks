import React, { useEffect} from 'react';
import {useDispatch , useSelector} from "react-redux";
import ScoreBoard from "../component/ScoreBoard/ScoreBoard";
import Player from "../component/Player/Player";
import GameCondition from "../component/GameCondition/GameCondition";
import * as gameAction from "../store/reducer/reducer";
import "./Scorekeeper.css";

const ScoreKeeper = () =>{
    const score1  = useSelector(state => state.reducer.score1);
    const score2 = useSelector(state => state.reducer.score2);
    const game = useSelector(state => state.reducer.game);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(gameAction.initilizeHandler());
    }, [])

    const breakup =
            <div className = "ScoreKeeper">
                <ScoreBoard score1={score1} score2={score2} play={game} />
                <GameCondition 
                inputHandler={(event)=>dispatch(gameAction.gameHandler(event))} 
                play={game} />
                <Player  
                    score1={score1}
                    score2={score2}
                    play={game} 
                    score1Handler={()=>dispatch(gameAction.scoreHandler("score1"))} 
                    score2Handler={() => dispatch(gameAction.scoreHandler("score2"))} 
                    resetHandler={() => dispatch(gameAction.resetHandler())} 
                />
            </div>
        return (
            <div>
                <h1>ScoreKeeper Game</h1>
                {breakup}
            </div>
        )
}
export default ScoreKeeper;
// Action Type

export const RESET_STATE = "RESET_STATE";

export const RESET_STATE_FINAL = "RESET_STATE_FINAL";

// Input Field 
export const INPUT_INITIAL = "INPUT_INITIAL";

export const INPUT_FINAL = " INPUT_FINAL";
// SCORE 
export const SCORE_INITIAL = "SCORE_INITIAL";

export const SCORE_FINAL = "SCORE_FINAL";

export const INIT = "INIT"

// Action Creator
export const initilizeHandler = ()=>{
    return{
        type:INIT
    }
}
export const gameHandler = (event) => {
    return {
        type: INPUT_INITIAL,
        game: +event.target.value
    }
}
export const gameHandlerFinal = (game,score1,score2) => {
    return {
        type: INPUT_FINAL,
        game: game,
        score1:score1,
        score2:score2
    }
}
export const scoreHandler = (score) => {
    return {
        type: SCORE_INITIAL,
        score:score
    }
}
export const scoreHandlerFinal = (score1,score2) => {
    return {
        type: SCORE_FINAL,
        score1:score1,
        score2:score2
    }
}

export const resetHandler = () => {
    return {
        type: RESET_STATE
    }
}

export const resetHandlerFinal = (state) => {
    return {
        type: RESET_STATE_FINAL,
        score1 : state.score1,
        score2: state.score2,
        game:state.game
    }
}

// Reducer

const initialState = {
    score1: 0,
    score2: 0,
    game: 5,
    disabled: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_INITIAL:
            return {
                ...state
            }
        case INPUT_FINAL:
            return {
                ...state,
                game: action.game,
                score1:action.score1,
                score2:action.score2
            };
        case SCORE_INITIAL:
            return {
                ...state
            }
        case SCORE_FINAL:
            return {
                ...state,
                score1: action.score1,
                score2 : action.score2
            }
        case RESET_STATE_FINAL:
            return { ...state,
            score1:action.score1,
            score2:action.score2,
            game:action.game,
     }
        default:
            return state;
    }
}

export default reducer;
import { takeLatest } from "@redux-saga/core/effects";
import * as actionType from "../reducer/reducer"; 
import {gameHandlerSaga,scoreHandlerSaga,resetHandlerSaga,initilizeHandlerSaga} from "./Sagas";

export function* watch(){
    yield takeLatest(actionType.INIT,initilizeHandlerSaga);
    yield takeLatest(actionType.INPUT_INITIAL,gameHandlerSaga);
    yield takeLatest(actionType.SCORE_INITIAL,scoreHandlerSaga);
    yield takeLatest(actionType.RESET_STATE,resetHandlerSaga)
}
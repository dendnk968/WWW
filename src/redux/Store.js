import {combineReducers, createStore} from "redux";
import {adminReducer, questionReducer, Reducer} from "./Reducers";



let reducers = combineReducers({general: Reducer, question: questionReducer, admin: adminReducer});

let store = createStore(reducers);

export default store;
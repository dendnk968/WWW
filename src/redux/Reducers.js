import {CHANGE_NAME_ACTION, SUBMIT_NAME_ACTION} from "../pages/login/ActionCreatos";
import {ANSWER_CHANGE_ACTION, SEND_ANSWER_ACTION} from "../pages/Game/AnswerActionCreators";
import {CHANGE_QUESTION_ACTION} from "../pages/Admin/AdminActionCreator";
import {GET_API_ACTION} from "../api/ApiAction";

let __inital_state = {
    login: "",
    isLogin: false
}
let __inital_question_state = {
    timeLeft: -1,
    lastQuestion: -1,
    currentAnswer: ""
}

let __inital_state_ = {
    general: {
        login: ""
    },
    question: {
        timeLeft: -1,
        lastQuestion: -1,
        currentAnswer: ""
    }
}
let __inital_admin_state = {
    numberNext: 0
}

export const Reducer = (state = __inital_state, action) => {
    if (action.type === CHANGE_NAME_ACTION) {
        return {...state, login: action.name}
    }
    if (action.type === SUBMIT_NAME_ACTION) {
        return {...state, isLogin: true}
    }
    return state;
}
export const questionReducer = (state = __inital_question_state, action) => {
    if (action.type === ANSWER_CHANGE_ACTION) {
        return {...state, currentAnswer: action.text}
    }
    if (action.type === GET_API_ACTION) {
        debugger
        return {...state, timeLeft: action.obj.TimeLeft, lastQuestion: action.obj.LastQuestion};
    }
    return state;
}


export const adminReducer = (state = __inital_admin_state, action) => {
    if (action.type === CHANGE_QUESTION_ACTION) {
        return {...state, numberNext: action.text}
    }
    return state;
}
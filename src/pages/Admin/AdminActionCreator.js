export const CHANGE_QUESTION_ACTION = "CHANGE_QUESTION";
export const START_QUESTION = "START_QUESTION"

export const changeQuestionAction = (text) => {
    return {
        type: CHANGE_QUESTION_ACTION,
        text: text
    }
}

export const startQuestionAction = () => {
    return {
        type: START_QUESTION
    }
}
export const ANSWER_CHANGE_ACTION = "answer_change";
export const SEND_ANSWER_ACTION = "send_answer";

export const answerChangeAction = (text) => {
    return {
        type: ANSWER_CHANGE_ACTION,
        text: text
    }
}


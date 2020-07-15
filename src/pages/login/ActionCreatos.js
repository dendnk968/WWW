export const CHANGE_NAME_ACTION = "CHANGE_NAME";
export const SUBMIT_NAME_ACTION = "SUBMIT_NAME";

export const changeNameActionCreator = (text) => {
    return {
        type: CHANGE_NAME_ACTION,
        name: text
    }
}

export const submitActionCreator = () => {
    return {
        type: SUBMIT_NAME_ACTION
    }
}
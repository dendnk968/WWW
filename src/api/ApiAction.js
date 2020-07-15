export const GET_API_ACTION = "get_api";
export const getApiActionCreator = (obj) => {
    return {
        type: GET_API_ACTION,
        obj: obj
    }
}
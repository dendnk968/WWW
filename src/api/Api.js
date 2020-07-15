import axios from "axios"

const instance = axios.create({
    baseURL: "http://3.16.166.39/api/",
    headers: {
        "Content-Type": "application/json"
    }
})

let user = "";
export const API = {
    init: (login) => {
        user = login;
    },

    sendAnswer: (answer) => {
        return instance.post("SendAnswer", {Answer: answer, password: user})
            .then(result => result.data);
    },
    getState: () => {
        return instance.get("Get?password=" + user).then(result => result.data);
    },
    startQuestion: (number) => {
        return instance.post("StartQuestion", {QuestionNumber: number, password: user, Answer:""});
    }

}


import React, {useEffect} from "react";
import Timer from "../General/Timer";
import {Button, Col, Input, Row} from "antd";
import './Game.css'
import LastQuestion from "../General/LastQuestion";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {answerChangeAction} from "./AnswerActionCreators";
import {API} from "../../api/Api";
import {getApiActionCreator} from "../../api/ApiAction";

const Game = (props) => {
    if (!props.isLogin) {
        return <Redirect to={'/'}/>
    }

    API.init(props.name);
    useEffect(() => {
        let timer = setInterval(() => {
                API.getState().then(obj => {
                    props.getNewState(obj);
                })
            }, 500
        );
        return () => {
            clearTimeout(timer)
        }
    });
    return (
        <div align={"center"}>
            <Row align={"center"} className={"header"}>
                <Col className={"team-name"}>
                    {props.name}
                </Col>
            </Row>
            <Row align={"center"}>
                <Col span={24}>
                    <LastQuestion lastQuestion={props.lastQuestion}/>
                </Col>
                <Timer time={props.time}/>
            </Row>

            <Row align={"center"} className={"input-block"}>
                <Col span={18}>
                    <Input placeholder={"Ваш ответ"} className={"input"}
                           onChange={event => props.answerChange(event.target.value)} value={props.currentAnswer}/>
                </Col>
                <Col span={6}>
                    <Button type="primary" block onClick={() => {
                        API.sendAnswer(props.currentAnswer).then(result => {

                            alert("Ответ "+ (result ? "": "не ") + "принят");
                        });
                        props.answerChange("");
                    }}
                            className={"button"} disabled={props.time == -1}>Отправить</Button>
                </Col>
            </Row>


        </div>
    );
}
let stateToProps = (state) => {
    return {
        isLogin: state.general.isLogin,
        name: state.general.login,
        lastQuestion: state.question.lastQuestion,
        time: state.question.timeLeft,
        currentAnswer: state.question.currentAnswer
    }
}

let dispatchToProps = (dispatch) => {
    return {
        answerChange: (text) => {
            dispatch(answerChangeAction(text))
        },
        getNewState: (obj) => {
            dispatch(getApiActionCreator(obj));
        }
    }
}

export default connect(stateToProps, dispatchToProps)(Game);
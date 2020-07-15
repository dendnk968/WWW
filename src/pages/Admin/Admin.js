import React, {useEffect} from "react";
import {Button, Col, Input, Row} from "antd";
import LastQuestion from "../General/LastQuestion";
import Timer from "../General/Timer";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {API} from "../../api/Api";
import {changeQuestionAction} from "./AdminActionCreator";
import {getApiActionCreator} from "../../api/ApiAction";

const AdminPage = (props) => {
    if (!props.isLogin || !props.name.startsWith("admin")) {
        return <Redirect to={'/'}/>
    }
    API.init(props.name);
    useEffect(() => {
        let timer = setInterval(() => {
                API.getState().then(obj => props.getNewState(obj))
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
                    <Input placeholder={"Номер вопроса"} className={"input"}
                           onChange={(event) => props.changeQuestion(event.target.value)}
                           value={props.currentQuestion}/>
                </Col>
                <Col span={6}>
                    <Button type={"primary"} block className={"button"} disabled={props.time != -1}
                            onClick={() => {
                                API.startQuestion(props.currentQuestion).then(() => {

                                });
                                props.changeQuestion(+props.currentQuestion + 1)

                            }}>Запустить</Button>
                </Col>
            </Row>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.general.isLogin,
        name: state.general.login,
        lastQuestion: state.question.lastQuestion,
        currentQuestion: state.admin.numberNext,
        time: state.question.timeLeft
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeQuestion: (text) => {
            dispatch(changeQuestionAction(text));
        },

        getNewState: (obj) => {
            dispatch(getApiActionCreator(obj));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
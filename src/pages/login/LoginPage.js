import React from "react";
import {Col, Input, Row, Button} from "antd";
import 'antd/dist/antd.css';
import './login.css';
import {changeNameActionCreator, submitActionCreator} from "./ActionCreatos";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const Login = (props) => {

    if(props.isLogin){
        if(props.name.startsWith("admin")){
            return <Redirect to={"/admin"}/>;
        }
        return <Redirect to={"/game"}/>;
    }
    return (
        <Row justify={"center"} align={"middle"} className={"login-container"}>
            <Col span={8} className={"login-form"} justify={"center"} align={"middle"}>
                <Row justify={"center"} align={"middle"} className={"login-container-min"}>
                    <Input
                        placeholder="Введите название команды"
                        className={"login-input"}
                        onChange={(event)=>props.change(event.target.value)}
                        value={props.name}
                    />
                    <Button type={"primary"} className={"login-button"} onClick={props.submit}>Войти</Button>
                </Row>
            </Col>
        </Row>
    );
}


let mapStateToProps = (state) => {
    return {
        name: state.general.login,
        isLogin: state.general.isLogin
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        change: (text) => {
            dispatch(changeNameActionCreator(text))
        },
        submit: () => {
            dispatch(submitActionCreator())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
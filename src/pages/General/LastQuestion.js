import {Col} from "antd";
import React from "react";
import './LastQuestion.css'
const LastQuestion = (props) => {
    return (props.lastQuestion !== -1 &&
        <Col span={24} className={"last-question-container"}>
            <h3>Текущий вопрос: {props.lastQuestion}</h3>
        </Col>
    );
}

export default LastQuestion;
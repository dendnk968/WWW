import React from "react";
import './Timer.css'
const Timer = (props) => {
    return (props.time !== -1 &&
        <div className={"timer-container " + (props.time <= 10 ? "last-time" : "")}>
            {props.time}
        </div>
    );
}

export default Timer;
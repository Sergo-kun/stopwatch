import React from "react";
import {Button} from "semantic-ui-react";
import './Buttons.css'

const Buttons = ({showTheTime,isGoing,time,stopStartClick,handleWait,handleReset}) => {
    return (
        <div>
            <div ><h1 className={'info'}>{showTheTime(time)}</h1></div>
            <Button
                onClick={isGoing ? () => stopStartClick("Stop") : () => stopStartClick("Start")}
            >{isGoing ? "Stop" : "Start"}</Button>
            <Button onDoubleClick={handleWait}>Wait</Button>
            <Button onClick={handleReset}>Reset</Button>
        </div>
    )
}
export default Buttons
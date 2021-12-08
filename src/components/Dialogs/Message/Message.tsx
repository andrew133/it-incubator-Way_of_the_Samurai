import React from "react";
import s from './../Dialogs.module.css';
import {MessageDataType} from "../../../Rudax/state";
type Message = {

}

const Message = (props: MessageDataType) => {
    debugger
    return <div className={s.dialog}>{props.message}</div>
}

export default Message;
import React from "react";
import s from './../Dialogs.module.css';
import {state} from "../../../index";



const Message = () => {
    return <div className={s.dialog}>{state.dialogPage.messageData}</div>
}

export default Message;
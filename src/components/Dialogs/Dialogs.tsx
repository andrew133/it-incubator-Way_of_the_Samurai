import React from "react";
import s from './Dialogs.module.css';
import {DialogPageType, state, StateType} from "../../index";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props:StateType) => {

    let dialogElements = [props.dialogPage.dialogData[].name.map(d=><DialogItem name={d.name} id = {d.id}/>)]

    let messageElement = [state.dialogPage.messageData.message.map(m => <Message message={m.message} id = {m.id}/>)]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    )
}
export default Dialogs;
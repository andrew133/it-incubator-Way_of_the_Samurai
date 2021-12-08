import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogPageType, StateType} from "../../Redax/state";

type DialogsType = {
    dialogPage: DialogPageType
}


const Dialogs = (props: DialogsType) => {
    let dialogElements = [props.dialogPage.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>)]
    let messageElement = [props.dialogPage.messageData.map(m => <Message message={m.message} id={m.id}/>)]
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
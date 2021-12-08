import React from "react";
import s from './Dialogs.module.css';
import {DialogPageType} from "../../index";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props: DialogPageType) => {
    let dialogElements = [props.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>)]
    let messageElement = [props.messageData.map(m => <Message message={m.message} id={m.id}/>)]
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
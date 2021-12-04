import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number

}
const DialogItem = (props:DialogItemType) => {
    let path = "/dialog/" + props.id

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
type MessageType = {
    message: string
    id: number
}
const Message = (props:MessageType) => {
    return <div className={s.dialog}>{props.message}</div>
}


const Dialogs = () => {
    let dialogData = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrew"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sacha"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valera"},
    ]
    let messageData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Yo"},
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogData[0].name} id = {dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id = {dialogData[1].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message} id = {messageData[0].id}/>
                <Message message={messageData[1].message} id = {messageData[1].id}/>
            </div>
        </div>
    )
}
export default Dialogs;
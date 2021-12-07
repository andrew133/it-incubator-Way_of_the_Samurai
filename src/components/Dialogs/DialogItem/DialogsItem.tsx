import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {state} from "../../../index";


const DialogItem = () => {
    let path = "/dialog/" + state.dialogPage.dialogData
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{state.dialogPage.dialogData}</NavLink>
    </div>
}

export default DialogItem;
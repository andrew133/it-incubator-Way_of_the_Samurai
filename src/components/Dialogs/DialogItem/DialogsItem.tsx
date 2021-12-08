import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogDataType} from "../../../index";

const DialogItem = (props: DialogDataType) => {
    let path = "/dialog/" + props.name
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;
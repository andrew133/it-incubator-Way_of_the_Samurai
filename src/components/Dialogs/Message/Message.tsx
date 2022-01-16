import React from "react";
import s from './../Dialogs.module.css';
import {MessageDataType} from "../../../Redax/state";
type Message = {

}

const Message = (props: MessageDataType) => {

    let newTexElement = React.createRef<HTMLTextAreaElement>()
    let addtex = ()=>{
        let tex = newTexElement.current?.value
        alert(tex);
    }


    return ( <div>
        <div className={s.dialog}>{props.message}</div>
            <div>
                <textarea ref={newTexElement}> </textarea>
            </div>

            <div>
            <button onClick={addtex}>Add tex</button>
        </div>
    </div>

    )
}

export default Message;
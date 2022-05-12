import React from 'react'
import s from'./Message.module.css'

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt={"avatar"} className={s.avatar}/>
            <div className={s.text}>
                <div className={s.name}><b>{props.name}</b></div>
                <div className={s.post}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message

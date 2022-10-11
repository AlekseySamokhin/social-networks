import React from "react";

import DialogItem from "./DialogItem";
import DialogMessage from "./DialogMessage";

import styles from "./Dialogs.module.css";

import { addMessageCreator, updateNewMessageTextCreator } from "../../../redux/dialogsRerucer";

const Dialogs = (props) => {
    const {state, dispatch} = props;

    const {dialogs, messages, newMessageText} = state;

    const onSendMessageClick = () => {
        dispatch(addMessageCreator());
    };

    const onNewMessageChange = (e) => {
        const text = e.target.value;
        dispatch(updateNewMessageTextCreator(text));
    }

    return (
        <div className={styles.dialogs}>
            <div>
                {
                    dialogs.map((dialog, index) => (
                        <DialogItem key={index} id={dialog.id} name={dialog.name}/>
                    ))
                }
            </div>
            <div>
                {
                    messages.map((message, index) => (
                        <DialogMessage key={index} id={message.id} message={message.message}/>
                    ))
                }

                <div className={styles.textarea}>
                    <textarea
                        placeholder="Enter you message..."
                        onChange={onNewMessageChange}
                        value={newMessageText}
                    />
                    <button onClick={onSendMessageClick}>Add message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;

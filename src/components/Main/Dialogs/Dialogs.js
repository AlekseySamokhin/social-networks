import React from "react";

import DialogItem from "./DialogItem";
import DialogMessage from "./DialogMessage";

import styles from "./Dialogs.module.css";

const Dialogs = (props) => {
    const {state, dispatch} = props;

    const {dialogs, messages, newMessageText} = state;

    const newMessageElement = React.createRef();

    const addNewMessage = () => {
        let action = {type: "ADD-MESSAGE"};
        dispatch(action);
    };

    const onChangeMessage = () => {
        const text = newMessageElement.current.value;
        let action = {
            type: "UPDATE-NEW-MESSAGE-TEXT",
            newText: text
        };
        dispatch(action);
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
                        onChange={onChangeMessage}
                        value={newMessageText}
                        ref={newMessageElement}
                    />
                    <button onClick={addNewMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;

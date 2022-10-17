import DialogItem from "./DialogItem";
import DialogMessage from "./DialogMessage";

import styles from "./Dialogs.module.css";

const Dialogs = (props) => {
    const {addMessage, updateNewMessageText, dialogsPage} = props;

    const onSendMessageClick = () => {
        addMessage();
    };

    const onNewMessageChange = (e) => {
        const text = e.target.value;
        updateNewMessageText(text);
    }

    const messageItem = dialogsPage.messages.map((message, index) => (
        <DialogMessage key={index} id={message.id} message={message.message}/>
    ))

    const dialogItem = dialogsPage.dialogs.map((dialog, index) => (
        <DialogItem key={index} id={dialog.id} name={dialog.name}/>
    ))

    return (
        <div className={styles.dialogs}>
            <div>{dialogItem}</div>
            <div>
                {messageItem}
                <div className={styles.textarea}>
                    <textarea
                        placeholder="Enter you message..."
                        onChange={onNewMessageChange}
                        value={dialogsPage.newMessageText}
                    />
                    <button onClick={onSendMessageClick}>Add message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;

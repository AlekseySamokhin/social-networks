import DialogItem from "./DialogItem";
import DialogMessage from "./DialogMessage";

import styles from "./Dialogs.module.css";

const Dialogs = (props) => {
    const {state} = props;

    const {dialogs, messages} = state;

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
            </div>
        </div>
    );
};

export default Dialogs;

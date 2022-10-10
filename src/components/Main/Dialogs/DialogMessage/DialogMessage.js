import styles from "./DialogMessage.module.css";

const DialogMessage = (props) => {
    const {message} = props;

    return (
        <>
            <div className={styles.dialogs_message}>{message}</div>
        </>
    )
}

export default DialogMessage;
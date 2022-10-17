import Dialogs from "./index";

import {addMessageCreator, updateNewMessageTextCreator} from "../../../redux/dialogsReducer";

const DialogsContainer = (props) => {
    const {store} = props;

    const state = store.getState().dialogsPage;

    const onSendMessageClick = () => {
        store.dispatch(addMessageCreator());
    };

    const onNewMessageChange = (text) => {
        store.dispatch(updateNewMessageTextCreator(text));
    }

    return (
        <Dialogs dialogsPage={state} addMessage={onSendMessageClick}  updateNewMessageText={onNewMessageChange} />
    );
};

export default DialogsContainer;

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
    dialogs: [
        {id: 1, name: "Aleksey"},
        {id: 2, name: "Dmitry"},
        {id: 3, name: "Sergey"},
        {id: 4, name: "Valeriy"},
        {id: 5, name: "Vasa"},],
        messages: [
    {id: 1, message: "Hi how are you?"},
    {id: 2, message: "Hello! Hi!"},
    {id: 3, message: "How do you do?"},
    {id: 4, message: "How are you?"},
    {id: 5, message: "I' fine"},
],
    newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let text = state.newMessageText
            let newMessage = {
                id: 5,
                message: text,
            }

            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
});

export default dialogsReducer;
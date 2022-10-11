const ADD_POST = "ADD-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 15},
                {id: 2, message: "Hello, how are you Nigga?", likesCount: 20},
                {id: 3, message: "Hello, how are you Nigga?", likesCount: 25},
                {id: 4, message: "Hello, how are you Nigga?", likesCount: 30},
                {id: 5, message: "Hello, how are you Nigga?", likesCount: 35},
                {id: 6, message: "Hello, how are you Nigga?", likesCount: 40},
            ],
            newPostText: "it-MassTransit",

        },
        dialogsPage: {
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
            newMessageText: "Hello Nigger!",
        },
        sideBar: {
            friends: [
                {id: 1, name: "Kirill"},
                {id: 2, name: "Svetlana"},
                {id: 3, name: "Iosif"},
            ]
        }
    },
    _callSubscriber(text) {
        console.log(text);
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }

            this._state.profilePage.posts.push(newPost);

            this._state.profilePage.newPostText = "";

            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;

            this._callSubscriber(this._state);
        } else if (action.type === "ADD-MESSAGE") {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText,
            }

            this._state.dialogsPage.messages.push(newMessage);

            this._state.dialogsPage.newMessageText = "";

            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
            this._state.dialogsPage.newMessageText = action.newText;

            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
});

export default store;

window.store = store;
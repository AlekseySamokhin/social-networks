import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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
            newPostText: "",

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
            newMessageText: "",
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
    }
}

export default store;

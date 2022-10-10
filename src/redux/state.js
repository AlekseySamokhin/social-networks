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

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log("State changed!");
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        }

        this._state.profilePage.posts.push(newPost);

        this._state.profilePage.newPostText = "";

        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;

        this._callSubscriber(this._state);
    },

    addMessage() {
        let newMessage = {
            id: 5,
            message: this._state.dialogsPage.newMessageText,
        }

        this._state.dialogsPage.messages.push(newMessage);

        this._state.dialogsPage.newMessageText = "";

        this._callSubscriber(this._state);
    },

    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;

        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;

window.store = store;
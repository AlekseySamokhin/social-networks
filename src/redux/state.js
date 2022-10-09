const state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", like: 15},
            {id: 2, message: "Hello, how are you Nigga?", like: 20},
            {id: 3, message: "Hello, how are you Nigga?", like: 25},
            {id: 4, message: "Hello, how are you Nigga?", like: 30},
            {id: 5, message: "Hello, how are you Nigga?", like: 35},
            {id: 6, message: "Hello, how are you Nigga?", like: 40},
        ],

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
    },
    sideBar: {
        friends: [
            {id: 1, name: "Kirill"},
            {id: 2, name: "Svetlana"},
            {id: 3, name: "Iosif"},
        ]
    }
};

export default state;
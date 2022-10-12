const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 15},
        {id: 2, message: "Hello, how are you Nigga?", likesCount: 20},
        {id: 3, message: "Hello, how are you Nigga?", likesCount: 25},
        {id: 4, message: "Hello, how are you Nigga?", likesCount: 30},
        {id: 5, message: "Hello, how are you Nigga?", likesCount: 35},
        {id: 6, message: "Hello, how are you Nigga?", likesCount: 40},
    ],
    newPostText: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }

            state.posts.push(newPost);
            state.newPostText = "";

            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export default profileReducer;


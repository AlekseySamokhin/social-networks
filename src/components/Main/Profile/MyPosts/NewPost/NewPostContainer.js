import { addPostCreator, updateNewPostTextCreator } from "../../../../../redux/profileReducer";
import NewPost from "./index";

const NewPostContainer = (props) => {
    const { store } = props;

    const state = store.getState();

    const onSendPostClick = () => {
        store.dispatch(addPostCreator());
    }

    const onNewPostChange = (text) => {
        store.dispatch(updateNewPostTextCreator(text));
    }

    return (
        <NewPost newPostText={state.profilePage.newPostText} updateNewPostText={onNewPostChange} addPost={onSendPostClick} />
    );
};

export default NewPostContainer;
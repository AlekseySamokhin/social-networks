import MyPosts from "./MyPosts";
import UserInfo from "./UserInfo";

import styles from "./Profile.module.css";

const Profile = (props) => {
    const { state, addPost, updateNewPostText } = props;

    return (
        <main>
            <UserInfo />
            <MyPosts updateNewPostText={updateNewPostText} addPost={addPost} state={state} />
        </main>
    );
};

export default Profile;
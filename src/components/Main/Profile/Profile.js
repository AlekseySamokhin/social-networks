import MyPosts from "./MyPosts";
import UserInfo from "./UserInfo";

import styles from "./Profile.module.css";

const Profile = (props) => {
    const { state } = props;
    const { posts } = state;

    return (
        <main>
            <UserInfo />
            <MyPosts posts={posts} />
        </main>
    );
};

export default Profile;
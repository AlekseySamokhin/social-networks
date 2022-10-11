import MyPosts from "./MyPosts";
import UserInfo from "./UserInfo";

import styles from "./Profile.module.css";

const Profile = (props) => {
    const { state, dispatch } = props;

    return (
        <main>
            <UserInfo />
            <MyPosts dispatch={dispatch} state={state} />
        </main>
    );
};

export default Profile;
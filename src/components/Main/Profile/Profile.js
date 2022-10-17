import MyPosts from "./MyPosts";
import UserInfo from "./UserInfo";

import styles from "./Profile.module.css";

const Profile = (props) => {
    const {store} = props;

    return (
        <main>
            <UserInfo/>
            <MyPosts store={store}/>
        </main>
    );
};

export default Profile;
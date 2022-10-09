import styles from "./FriendsList.module.css";

import FriendItem from "./FriendItem";

const FriendsList = (props) => {
    const { friends } = props;

    return (
        <div className={styles.sidebar_friends}>
            <h3 className={styles.friends_title}>Friends</h3>
            <div className={styles.friends_list}>
                {
                    friends.map((friend, index) => (
                        <FriendItem key={index} id={friend.id} name={friend.name}/>
                    ))
                }
            </div>
        </div>
    )
}

export default FriendsList;
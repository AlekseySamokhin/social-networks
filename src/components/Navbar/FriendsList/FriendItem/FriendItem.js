import styles from "./FriendItem.module.css";

const FriendItem = (props) => {
    const {id, name} = props;
    return (
        <div className={styles.friend}>
            <img className={styles.friend_logo}
                 src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=681&h=383&crop=1&resize=450%2C253"
                 alt="avatar"/>
            <p id={id} className={styles.friend_name}>{name}</p>
        </div>
    )
}

export default FriendItem;
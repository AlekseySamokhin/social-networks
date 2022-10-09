import styles from "./UserInfo.module.css";

const UserInfo = () => {
    return (
        <>
            <div>
                <img className={styles.profile_img} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/dd/b5/d6/spiaggia-e-mare-alla.jpg?w=1200&h=-1&s=1" alt="main picture"/>
            </div>
            <div className={styles.description}>
                avatar + description
            </div>
        </>
    );
};

export default UserInfo;

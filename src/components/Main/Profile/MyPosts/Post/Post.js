import Avatar from "./Avatar"

import styles from "./Post.module.css";

const Post = (props) => {
    const { message, likes, id, addLikes } = props;

    const addBtnLikes = () => {
        addLikes();
    };

    return (
        <div id={id} className={styles.posts_item}>
            <Avatar />
            <p>{message}</p>
            <div onClick={addBtnLikes}>Likes: {likes}</div>
        </div>
    );
};

export default Post;
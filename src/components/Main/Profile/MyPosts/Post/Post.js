import Avatar from "./Avatar"

import styles from "./Post.module.css";

const Post = (props) => {
    const { message, like } = props;
    return (
        <div className={styles.posts_item}>
            <Avatar />
            <p>{message}</p>
            <div>Like: {like}</div>
        </div>
    );
};

export default Post;
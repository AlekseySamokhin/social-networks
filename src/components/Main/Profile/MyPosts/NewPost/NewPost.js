import styles from "./NewPost.module.css";

const NewPost = (props) => {
    const {addPost, updateNewPostText, newPostText} = props;

    const onSendPostClick = () => {
        addPost();
    }

    const onNewPostChange = (e) => {
        let text = e.target.value;
        updateNewPostText(text);
    }

    return (
        <div className={styles.newPost}>
            <div>
                <textarea
                    placeholder="Enter you post..."
                    onChange={onNewPostChange}
                    value={newPostText}
                />
            </div>
            <div>
                <button onClick={onSendPostClick}>
                    Add post
                </button>
            </div>
        </div>
    );
};

export default NewPost;
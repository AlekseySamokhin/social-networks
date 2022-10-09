import styles from "./NewPost.module.css";

const NewPost = () => {
    return (
        <div className={styles.newPost}>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
    );
};

export default NewPost;
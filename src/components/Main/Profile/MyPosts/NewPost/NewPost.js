import React from "react";

import styles from "./NewPost.module.css";

const NewPost = (props) => {
    const { addPost, updateNewPostText, newPostText } = props;

    const newPostElement = React.createRef();

    const addNewPost = () => {
        addPost();
    }

    const onChangePost = () => {
        let text = newPostElement.current.value;
        updateNewPostText(text);
    }

    return (
        <div className={styles.newPost}>
            <div>
                <textarea
                    onChange={onChangePost}
                    ref={newPostElement}
                    value={newPostText}
                />
            </div>
            <div>
                <button onClick={addNewPost}>
                    Add post
                </button>
            </div>
        </div>
    );
};

export default NewPost;
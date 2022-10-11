import React from "react";

import styles from "./NewPost.module.css";

import { addPostCreator, updateNewPostTextCreator } from "../../../../../redux/profileReducer";

const NewPost = (props) => {
    const {dispatch, newPostText} = props;

    const onSendPostClick = () => {
        dispatch(addPostCreator());
    }

    const onNewPostChange = (e) => {
        let text = e.target.value;
        dispatch(updateNewPostTextCreator(text));
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
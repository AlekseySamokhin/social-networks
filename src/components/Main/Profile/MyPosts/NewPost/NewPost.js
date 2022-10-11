import React from "react";

import styles from "./NewPost.module.css";

import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../../redux/state";

const NewPost = (props) => {
    const {dispatch, newPostText} = props;

    const newPostElement = React.createRef();

    const addNewPost = () => {
        dispatch(addPostActionCreator());
    }

    const onChangePost = () => {
        let text = newPostElement.current.value;
        dispatch(updateNewPostTextActionCreator(text));
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
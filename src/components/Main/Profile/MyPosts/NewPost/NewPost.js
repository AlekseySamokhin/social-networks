import React from "react";

import styles from "./NewPost.module.css";

const NewPost = (props) => {
    const {dispatch, newPostText} = props;

    const newPostElement = React.createRef();

    const addNewPost = () => {
        const action = {type: "ADD-POST"}
        dispatch(action);
    }

    const onChangePost = () => {
        let text = newPostElement.current.value;

        const action = {type: "UPDATE-NEW-POST-TEXT", newText: text};
        dispatch(action);
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
import NewPost from "./NewPost";
import Post from "./Post";

import styles from "./MyPosts.module.css";

const MyPosts = (props) => {
    const { state, addPost, updateNewPostText } = props;

    const {posts, newPostText} = state;

    return (
            <div>
                <h3 className={styles.myPosts}>My post</h3>
                <NewPost newPostText={newPostText} updateNewPostText={updateNewPostText} addPost={addPost} />
                <div>
                    {
                        posts.map((post, index) => (
                            <Post key={index} id={post.id} likes={post.likesCount} message={post.message} />
                        ))
                    }
                </div>
            </div>
    );
};

export default MyPosts;
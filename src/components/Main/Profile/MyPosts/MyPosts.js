import NewPost from "./NewPost";
import Post from "./Post";

import styles from "./MyPosts.module.css";
import NewPostContainer from "./NewPost/NewPostContainer";

const MyPosts = (props) => {
    const {store} = props;

    const posts = store.getState().profilePage.posts;

    const postsElements = posts.map((post, index) => (
        <Post key={index} id={post.id} likes={post.likesCount} message={post.message}/>
    ))

    return (
        <div>
            <h3 className={styles.myPosts}>My post</h3>
            <NewPostContainer store={store}/>
            <div>{postsElements}</div>
        </div>
    );
};

export default MyPosts;
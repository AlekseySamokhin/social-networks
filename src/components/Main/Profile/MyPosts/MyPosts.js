import NewPost from "./NewPost";
import Post from "./Post";

import styles from "./MyPosts.module.css";

const MyPosts = (props) => {
    const { posts } = props;

    return (
            <div>
                <h3 className={styles.myPosts}>My post</h3>
                <NewPost />
                <div>
                    {
                        posts.map((post, index) => (
                            <Post key={index} like={post.like} message={post.message} />
                        ))
                    }
                </div>
            </div>
    );
};

export default MyPosts;
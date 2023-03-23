import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getPosts } from '../api';
import { Loader } from '../components';
import styles from '../styles/home.module.css';
import Comment from './Comment';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log('In Home');

  const fetchPosts = async () => {
    const response = await getPosts();

    if (response.success) {
      setPosts(response.data.posts);
      console.log(posts);
    } else {
      console.error(response.message);
    }

    setLoading(false);
    console.log(loading);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.postsList}>
      {posts.map((post) => (
        <div className={styles.postWrapper} key={`post-${post._id}`}>
          <div className={styles.postHeader}>
            <div className={styles.postAvatar}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1144/1144709.png"
                alt="user-pic"
              ></img>
              <div>
                <span className={styles.postAuthor}>{post.user.name}</span>
                <span className={styles.postTime}>a minute ago</span>
              </div>
            </div>
            <div className={styles.postContent}>{post.content}</div>

            <div className={styles.postActions}>
              <div className={styles.postLike}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/456/456115.png"
                  alt="likes-icon"
                ></img>
                <span>5</span>
              </div>

              <div className={styles.postCommentsIcon}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2190/2190552.png"
                  alt="comments-icon"
                ></img>
                <span>2</span>
              </div>
            </div>
            <div className={styles.postCommentBox}>
              <input placeholder="Start typing a comment"></input>
            </div>

            <div className={styles.postCommentsList}>
              {post.comments.map((comment) => {
                <Comment comment={comment} />;
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Home.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Home;

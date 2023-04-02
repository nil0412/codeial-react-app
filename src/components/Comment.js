import PropTypes from 'prop-types';

import styles from '../styles/home.module.css';

const Comment = ({ comment }) => {
  return (
    <div className={styles.postCommentItem}>
      <div className={styles.postCommentHeader}>
        <span className={styles.postCommentAuthor}>{comment.user.name}</span>
        <span className={styles.postCommentTime}>a minute ago</span>
        <span className={styles.postCommentLikes}>
          <i className="fa-solid fa-heart" style={{ color: '#FF0000' }}></i> 22
        </span>
      </div>

      <div className={styles.postCommentContent}>{comment.content}</div>
    </div>
  );
};

Comment.prototype = {
  comment: PropTypes.object.isRequired,
};

export default Comment;

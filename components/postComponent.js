import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const PostComponent = ({ post, likePost, commentOnPost }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');

  const onLike = () => {
    dispatch(likePost(post._id));
  };

  const onComment = e => {
    e.preventDefault();
    dispatch(commentOnPost(post._id, comment));
    setComment('');
  };

  return (
    <div>
      <p>{post.content}</p>
      {post.mediaUrl && <img src={post.mediaUrl} alt="media" />}
      <button onClick={onLike}>Like ({post.likes.length})</button>
      <form onSubmit={onComment}>
        <input
          type="text"
          placeholder="Add a comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <input type="submit" value="Comment" />
      </form>
      {post.comments.map(comment => (
        <p key={comment._id}>{comment.content}</p>
      ))}
    </div>
  );
};

export default PostComponent;

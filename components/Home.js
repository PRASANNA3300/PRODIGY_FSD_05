import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, createPost, likePost, commentOnPost } from '../actions/postActions';
import PostComponent from './PostComponent';

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);
  const [formData, setFormData] = useState({
    content: '',
    mediaUrl: ''
  });

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const { content, mediaUrl } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    dispatch(createPost(content, mediaUrl));
    setFormData({ content: '', mediaUrl: '' });
  };

  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={onSubmit}>
        <div>
          <textarea
            placeholder="What's on your mind?"
            name="content"
            value={content}
            onChange={onChange}
            required
          ></textarea>
        </div>
        <div>
          <input
            type="text"
            placeholder="Media URL"
            name="mediaUrl"
            value={mediaUrl}
            onChange={onChange}
          />
        </div>
        <input type="submit" value="Post" />
      </form>
      {posts.map(post => (
        <PostComponent key={post._id} post={post} likePost={likePost} commentOnPost={commentOnPost} />
      ))}
    </div>
  );
};

export default Home;

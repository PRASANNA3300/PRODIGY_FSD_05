import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, updateProfile } from '../actions/userActions';

const Profile = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector(state => state.user.user);

  const [formData, setFormData] = useState({
    bio: '',
    profilePicture: ''
  });

  useEffect(() => {
    dispatch(getProfile());
    if (userProfile) {
      setFormData({
        bio: userProfile.bio || '',
        profilePicture: userProfile.profilePicture || ''
      });
    }
  }, [dispatch, userProfile]);

  const { bio, profilePicture } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    dispatch(updateProfile(bio, profilePicture));
  };

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={onSubmit}>
        <div>
          <textarea
            placeholder="Bio"
            name="bio"
            value={bio}
            onChange={onChange}
          ></textarea>
        </div>
        <div>
          <input
            type="text"
            placeholder="Profile Picture URL"
            name="profilePicture"
            value={profilePicture}
            onChange={onChange}
          />
        </div>
        <input type="submit" value="Update Profile" />
      </form>
    </div>
  );
};

export default Profile;

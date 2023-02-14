import React from 'react';

interface ProfileImageProps {
  profileImage: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ profileImage }) => {
  if (!profileImage) {
    return null;
  }

  return (
    <img
      src={profileImage}
      alt="Gmail profile"
      style={{ borderRadius: '50%', width: '50px', height: '50px' }}
    />
  );
};

export default ProfileImage;

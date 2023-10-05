import React from 'react';
import SpotifyLoginButton from '@/api/SpotifyLoginButton';

const LeftMenu = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-32 bg-gray-800 text-white p-4">
      <SpotifyLoginButton></SpotifyLoginButton>
    </div>
  );
};

export default LeftMenu;

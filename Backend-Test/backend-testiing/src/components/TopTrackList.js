import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopTracksList = () => {
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    const makeAuthorizedRequest = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/me/top/tracks?limit=10', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });

        const topTracksData = response.data.items;
        setTopTracks(topTracksData);
      } catch (error) {
        console.error('Error fetching top tracks:', error);
      }
    };

    makeAuthorizedRequest();
  }, []);

  return (
    <div className="fixed left-40 top-0 h-full w-48 bg-gray-800 text-white p-4">
      <h2 className="text-xl mb-4">Top 10 Tracks:</h2>
      <ul className="list-disc pl-4">
        {topTracks.map((track, index) => (
          <li key={index} className="mb-2">
            {track.name} by {track.artists[0].name}
          </li>
        ))}
      </ul>s
    </div>
  );
};

export default TopTracksList;

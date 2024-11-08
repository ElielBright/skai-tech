// src/components/VideoSection.jsx
import React from 'react';

function VideoSection() {
  return (
    <div className="video-container">
        <img src="src/assets/WebDev.png" type="video/mp4" />
      <div className="overlay-message">
        <p>You can't become a guru overnight. This is a journey of constant practice and a steep learning curve...</p>
      </div>
    </div>
  );
}

export default VideoSection;

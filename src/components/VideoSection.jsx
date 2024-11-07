// src/components/VideoSection.jsx
import React from 'react';

function VideoSection() {
  return (
    <div className="video-container">
      <video id="background-video" loop autoPlay muted>
        <source src="src/assets/Developer Coding Background.mp4" type="video/mp4" />
      </video>
      <div className="overlay-message">
        <p>You can't become a guru overnight. This is a journey of constant practice and a steep learning curve...</p>
      </div>
    </div>
  );
}

export default VideoSection;

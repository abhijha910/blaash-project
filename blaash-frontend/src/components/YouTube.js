// YouTube.js
import React, { useState } from "react";

const YouTube = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div style={youtubeContainerStyles}>
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={iframeStyles}
      ></iframe>
      <button onClick={togglePlay} style={buttonStyles}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

const youtubeContainerStyles = {
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "center",
};

const iframeStyles = {
  width: "100%",
  height: "400px",
  borderRadius: "8px",
};

const buttonStyles = {
  marginTop: "10px",
  padding: "10px 20px",
  backgroundColor: "#333",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default YouTube;

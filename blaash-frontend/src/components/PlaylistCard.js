// PlaylistCard.js
import React from "react";

const PlaylistCard = ({ playlist, onClick }) => {
  return (
    <div onClick={() => onClick(playlist.id)} style={cardStyles}>
      <img src={playlist.thumbnail} alt={playlist.title} style={imgStyles} />
      <h3>{playlist.title}</h3>
      <p>{playlist.description}</p>
    </div>
  );
};

const cardStyles = {
  width: "200px",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  margin: "10px",
  textAlign: "center",
  cursor: "pointer",
};

const imgStyles = {
  width: "100%",
  height: "120px",
  objectFit: "cover",
  borderRadius: "4px",
};

export default PlaylistCard;

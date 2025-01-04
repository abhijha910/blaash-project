// DraggableCard.js
import React, { useState } from "react";
import { useDrag } from "react-dnd";

const DraggableCard = ({ cardData, onDrop }) => {
  const [isDragging, setIsDragging] = useState(false);

  const [{ isOver }, drop] = useDrag({
    type: "CARD",
    item: cardData,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        padding: "10px",
        margin: "10px",
        backgroundColor: isDragging ? "lightblue" : "white",
        border: "1px solid gray",
        cursor: "move",
        opacity: isOver ? 0.5 : 1,
      }}
    >
      <h3>{cardData.title}</h3>
      <p>{cardData.description}</p>
    </div>
  );
};

export default DraggableCard;

import React from "react";

export const Tile = ({ tile }) => {
  return (
    <div className="tile-container">
      {/* Object.values(tile) generates the array of the tile objects values */}
      {Object.values(tile).map((value, index) => (
        <p key={index} className={`${index === 0 ? "tile-title" : "tile"}`}>{value}</p>
      ))}
    </div>
  );
};

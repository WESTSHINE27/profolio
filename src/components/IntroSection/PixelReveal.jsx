import React, { useEffect, useRef } from "react";
import "./PixelReveal.scss";

const PixelReveal = ({ src, cols = 20, rows = 20, duration = 1 }) => {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    const total = cols * rows;

    const tiles = [];
    for (let i = 0; i < total; i++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      grid.appendChild(tile);
      tiles.push(tile);
    }

    const centerX = cols / 2;
    const centerY = rows / 2;

    tiles.forEach((tile, i) => {
      const x = i % cols;
      const y = Math.floor(i / cols);
      const dx = x - centerX;
      const dy = y - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      setTimeout(() => {
        tile.style.opacity = 0;
      }, dist * 100);
    });

    return () => {
      grid.innerHTML = "";
    };
  }, [cols, rows]);

  return (
    <div className="image-wrapper">
      <img src={src} alt="pfp" />
      <div ref={gridRef} className="grid"></div>
    </div>
  );
};

export default PixelReveal;

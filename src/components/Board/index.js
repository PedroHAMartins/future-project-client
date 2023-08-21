import React, { useState } from 'react';
import '../../style/components/board.css';
import { MapInteractionCSS } from 'react-map-interaction';

const Board = () => {
  const rows = 100; // Number of rows in the grid
  const cols = 100; // Number of columns in the grid
  const totalCells = rows * cols; // Total number of cells

  const [cellStates, setCellStates] = useState(new Array(totalCells).fill(false));

  const handleCellClick = (cellIndex) => {
    const newCellStates = [...cellStates];
    newCellStates[cellIndex] = !newCellStates[cellIndex];
    setCellStates(newCellStates);
  };

  return (
    <div className='board'>
      <MapInteractionCSS maxScale="10" minScale="0.5" className='board-div'>
        <div className='board-pixels'>
          {Array.from({ length: totalCells }).map((_, index) => (
            <div
              key={index}
              className={`board-cell ${cellStates[index] ? 'active' : ''}`}
              onClick={() => handleCellClick(index)}
            ></div>
          ))}
        </div>
      </MapInteractionCSS>
    </div>
  );
};

export default Board;
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectArea, setZoomLevel } from '../features/gridSlice';
import ColorPicker from './ColorPicker';
import { Link } from 'react-router-dom'; // Импортируем Link

// Функция для получения буквы по индексу
const getLetter = (index) => {
  return String.fromCharCode(65 + index); // 65 — код буквы 'A' в ASCII
};

const Grid = () => {
  const dispatch = useDispatch();
  const grid = useSelector((state) => state.grid.grid);
  const zoomLevel = useSelector((state) => state.grid.zoomLevel);
  const [startCell, setStartCell] = useState(null);
  const gridRef = useRef(null);

  const handleMouseDown = (x, y) => {
    setStartCell({ x, y });
  };

  const handleMouseUp = (x, y) => {
    if (startCell) {
      const startX = Math.min(startCell.x, x);
      const startY = Math.min(startCell.y, y);
      const endX = Math.max(startCell.x, x);
      const endY = Math.max(startCell.y, y);

      dispatch(selectArea({ startX, startY, endX, endY }));
      setStartCell(null);
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();

    const delta = e.deltaY > 0 ? -0.1 : 0.1; // Уменьшаем или увеличиваем зум
    const newZoom = Math.max(0.5, Math.min(5, zoomLevel + delta)); // Ограничиваем зум

    dispatch(setZoomLevel(newZoom));
  };

  // Размер ячейки с учетом зума
  const cellSize = 20 * zoomLevel;

  return (
    <div
      className="main__grid-container"
      ref={gridRef}
      onWheel={handleWheel}
    >
      {/* Ось X (буквы) */}
      <div className="x-axis">
        <div className="axis-label empty"></div> {/* Пустая ячейка для угла */}
        {Array(15)
          .fill()
          .map((_, i) => (
            <div
              key={i}
              className="axis-label"
              style={{ width: `${cellSize}px` }}
            >
              {getLetter(i)}
            </div>
          ))}
      </div>

      <div className="grid-and-y-axis">
        {/* Ось Y (цифры) */}
        <div className="y-axis">
          {Array(10)
            .fill()
            .map((_, i) => (
              <div
                key={i}
                className="axis-label"
                style={{ height: `${cellSize}px` }}
              >
                {i + 1}
              </div>
            ))}
        </div>

        {/* Сетка */}
        <div className="main__grid">
          {grid.map((row, i) => (
            <div key={i} className="row">
              {row.map((cell, j) => (
                <div
                  key={j}
                  className="cell"
                  style={{
                    width: `${cellSize}px`,
                    height: `${cellSize}px`,
                    backgroundColor: cell,
                  }}
                  onMouseDown={() => handleMouseDown(i, j)}
                  onMouseUp={() => handleMouseUp(i, j)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <ColorPicker />

      {/* Кнопка для перехода на страницу /info */}
      <Link to="/info" className="main__info-button">
        Перейти в Info
      </Link>
    </div>
  );
};

export default Grid;
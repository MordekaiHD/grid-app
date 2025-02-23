import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setZoomLevel } from '../features/gridSlice';

const ZoomControls = () => {
  const dispatch = useDispatch();
  const zoomLevel = useSelector((state) => state.grid.zoomLevel);

  const handleZoomIn = () => {
    dispatch(setZoomLevel(zoomLevel + 0.1));
  };

  const handleZoomOut = () => {
    dispatch(setZoomLevel(zoomLevel - 0.1));
  };

  return (
    <div className='main__zoom-controls'>
      <button className='main__zoom-controls-button' onClick={handleZoomIn}>Увеличить (+)</button>
      <button className='main__zoom-controls-button' onClick={handleZoomOut}>Уменьшить (-)</button>
      <span className='main__zoom-controls-span'>Масштаб: {(zoomLevel * 100).toFixed(0)}%</span>
    </div>
  );
};

export default ZoomControls;
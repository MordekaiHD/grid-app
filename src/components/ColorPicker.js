import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setColor } from '../features/gridSlice';

const ColorPicker = () => {
  const dispatch = useDispatch();
  const selectedColor = useSelector((state) => state.grid.selectedColor); // Получаем текущий цвет

  const handleColorChange = (e) => {
    dispatch(setColor(e.target.value));
  };

  return (
    <div className='main__color'>
      <input
        className='main__color-input'
        type="color"
        value={selectedColor} // Устанавливаем текущий цвет
        onChange={handleColorChange}
      />
      <span>Selected Color: {selectedColor}</span> {/* Отображаем текущий цвет */}
    </div>
  );
};

export default ColorPicker;
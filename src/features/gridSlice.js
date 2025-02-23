import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  grid: Array(10).fill().map(() => Array(15).fill(null)),
  selectedColor: '#000000', // Цвет по умолчанию
  selectedAreas: [],
  zoomLevel: 1,
  
};

const gridSlice = createSlice({
  name: 'grid',
  initialState,
  reducers: {
    selectArea: (state, action) => {
      const { startX, startY, endX, endY } = action.payload;
      for (let i = startX; i <= endX; i++) {
        for (let j = startY; j <= endY; j++) {
          state.grid[i][j] = state.selectedColor;
        }
      }
      state.selectedAreas.push({ startX, startY, endX, endY, color: state.selectedColor });
    },
    setColor: (state, action) => {
      state.selectedColor = action.payload;
    },
    setZoomLevel: (state, action) => {
      state.zoomLevel = action.payload;
    },
  },
});

export const { selectArea, setColor, setZoomLevel } = gridSlice.actions;

export default gridSlice.reducer;
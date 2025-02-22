import React from 'react';
import { useSelector } from 'react-redux';

const InfoPage = () => {
  const selectedAreas = useSelector((state) => state.grid.selectedAreas);

  return (
    <div className="info-page">
      <h2 className="info-page__title">Selected Areas</h2>
      <p className="info-page__total">Total selected areas: {selectedAreas.length}</p>
      <ul className="info-page__list">
        {selectedAreas.map((area, index) => (
          <li key={index} className="info-page__item">
            <span className="info-page__area-number">Area {index + 1}:</span>
            <span className="info-page__coordinates">
              ({area.startX}, {area.startY}) to ({area.endX}, {area.endY})
            </span>
            <span className="info-page__color" style={{ backgroundColor: area.color }}>
              Color: {area.color}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoPage;
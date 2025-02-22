import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Grid from './components/Grid';
import InfoPage from './components/InfoPage';
import ZoomControls from './components/ZoomControls';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className='main'> 
                <Grid />
                <ZoomControls /> 
              </div>
            }
          />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
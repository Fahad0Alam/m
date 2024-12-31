import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import SecondPage from './second';
import ThirdPage from './third';
import FourthPage from './fourth';
import CameraPage from './fifth';
import SixthPage from './sixth';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router basename="/m">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/second" element={<SecondPage />} />
      <Route path="/third" element={<ThirdPage />} />
      <Route path="/fourth" element={<FourthPage />} />
      <Route path="/fifth" element={<CameraPage />} />
      <Route path="/sixth" element={<SixthPage />} />
    </Routes>
  </Router>
);



import React from 'react';
import './App.css';
import ImageSlider from './components/ImageSlider';
import { SlideData } from './components/SlideData';

function App() {
  return (
    <div className="app">
       
                 <ImageSlider slides={SlideData}/>
        
    </div>
  );
}

export default App;

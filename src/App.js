import React, { useState } from 'react';
import './App.css';
import FormComponent from './FormComponent';
import SliderComponent from './SliderComponent';

function App() {
  const [imageData, setImageData] = useState([]);

  const handleImageDataSubmit = (data) => {
    setImageData(data);
  };

  return (
    <div className="App">
      <div className="container">
        <FormComponent onSubmit={handleImageDataSubmit} />
        <SliderComponent imageData={imageData} />
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function FormComponent({ onSubmit }) {
  const [numImages, setNumImages] = useState(0);
  const [imageData, setImageData] = useState([]);

  const handleNumImagesChange = (e) => {
    const num = parseInt(e.target.value);
    setNumImages(num);
    setImageData([]);
    if (!isNaN(num) && num >= 0) {
        const newImageData = Array.from({ length: num }, () => ({
          title: '',
          description: '',
          file: null,
        }));
        setImageData(newImageData);
        setNumImages(num);
      }
  };

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const newImageData = [...imageData];
      newImageData[index] = {
        image: event.target.result,
        title: '',
        description: '',
      };
      setImageData(newImageData);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleTitleChange = (e, index) => {
    const newImageData = [...imageData];
    newImageData[index].title = e.target.value;
    setImageData(newImageData);
  };

  const handleDescriptionChange = (e, index) => {
    const newImageData = [...imageData];
    newImageData[index].description = e.target.value;
    setImageData(newImageData);
  };

  const handleSubmit = () => {
    onSubmit(imageData);
  };

  return (
    <div className="form-container">
        
      <h2>Image Slideshow Form</h2>
      <div className='image-upload-container'>
      <input
        type="number"
        id="numImages"
        value={numImages}
        onChange={handleNumImagesChange}
        placeholder='Number of Images Show In Slider'
      />
      </div>
      
      {Array.from({ length: numImages }, (_, index) => (
        <div key={index} className="image-upload-container">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, index)}
          />
          <input
            type="text"
            placeholder="Title"
            value={imageData[index]?.title || ''}
            onChange={(e) => handleTitleChange(e, index)}
          />
          <input
            type="text"
            placeholder="Description"
            value={imageData[index]?.description || ''}
            onChange={(e) => handleDescriptionChange(e, index)}
          />
        </div>
      ))}
      <button className='submit' onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default FormComponent;

import React, { useState } from 'react';
import '../../assets/styles/components/imageUpload.css';

function FileUpload({ onUponUploadFile }) {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const handleFile = (file) => {
    // you can carry out any file validations here...
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleOndragOver = (event) => {
    event.preventDefault();
    handleFile(image);
  };

  const handleOndrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const imageFile = event.dataTransfer.files[0];
    handleFile(imageFile);
  };

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setPreviewUrl(URL.createObjectURL(e.target.files[0]));
      onUponUploadFile(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setPreviewUrl();
  };

  return (
    <div className="my-1">
      <label htmlFor="fileUpload" className="block mb-2 text-md font-medium text-gray-900">
        Image
        <input
          hidden
          id="fileUpload"
          type="file"
          accept="images/*"
          onChange={imageChange}
        />
        <div className="wrapper">
          <div
            className="drop_zone"
            onDragOver={handleOndragOver}
            onDrop={handleOndrop}
          >
            { !previewUrl && <p className="text-sm">drag and drop image here....</p>}
            { previewUrl && (
            <div className="image">
              <img src={previewUrl} alt="abc" />
            </div>
            ) }
          </div>
        </div>
      </label>
    </div>
  );
}

export default FileUpload;

import React, { useState } from "react";
import ImageUploader from "react-images-upload";

const ImageUpload = () => {
  const [pictures, setPictures] = useState([]);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const onDrop = async (picture) => {
    const encodedImages = [];
    for (let image of picture) {
      const encodedImage = await toBase64(image);
      encodedImages.push(encodedImage);
    }
    setPictures(encodedImages);
  };

  return (
    <div id="imageUpload">
      <ImageUploader
        value={pictures}
        withIcon={true}
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
        withPreview={true}
        data-cy="file-input"
      />
    </div>
  );
};

export default ImageUpload;

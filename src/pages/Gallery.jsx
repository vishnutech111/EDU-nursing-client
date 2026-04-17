import React, { useEffect, useState } from "react";
import "./Gallery.css";
import axios from "axios";
import { motion } from "framer-motion";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/gallery");
      setImages(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="gallery-container">

      {/* HERO */}
      <div className="gallery-hero">
        <div className="overlay"></div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          EduNursing Gallery
        </motion.h1>
      </div>

      {/* GRID */}
      <div className="gallery-grid">
        {images.length === 0 ? (
          <p className="no-data">No Images Available</p>
        ) : (
          images.map((img) => (
            <motion.div
              className="gallery-card"
              key={img._id}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(img.image)}
            >
              <img src={img.image} alt="gallery" />
            </motion.div>
          ))
        )}
      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="preview" />
        </div>
      )}

    </div>
  );
};

export default Gallery;
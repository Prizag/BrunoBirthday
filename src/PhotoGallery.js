import React,{useEffect} from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const images = [
  {
    original: '/assets/photo1.jpg',
    thumbnail: '/assets/photo1.jpg',
  },
  {
    original: './assets/photo2.jpg',
    thumbnail: './assets/photo2.jpg',
  },
  {
    original: './assets/photo3.jpg',
    thumbnail: './assets/photo3.jpg',
  },
];

function PhotoGallery() {
  useEffect(() => {
    if (window.performance) {
      if (performance.getEntriesByType('navigation')[0].type === 'reload') {
        window.location.href = '/';
      }
    }
  }, []);
  return (
    <div className="photo-gallery">
    <h2>Memorable Moments</h2>
      <ImageGallery items={images} />
      <NavLink to='/messageform'>
    <motion.button
      className="wish-button"
      whileHover={{ scale: 1.2, rotate: 10 }}
      whileTap={{ scale: 0.8 }}
    >
      Write a message!
    </motion.button>
    </NavLink>
    </div>
  );
}

export default PhotoGallery;

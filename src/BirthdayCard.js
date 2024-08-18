import React from 'react';
import { NavLink } from 'react-router-dom';
import './BirthdayCard.css';
import { motion } from 'framer-motion';
import photo4 from './assets/photo4.jpg';

function BirthdayCard() {
 
  return (
    
    <motion.div
    className="birthday-card"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
  >
    

    <h1>Happy Birthday, Bruno!</h1>
    <motion.img
      src={photo4}
      alt="Birthday"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    />
    <p>Happy Birthday to the furriest, cutest, and most loyal friend! May your day be filled with extra treats, belly rubs, and endless playtime. You're more than just a pet; you're family, and I love you dearly!🐾🎉</p>
    <NavLink to='/surprise'>
    <motion.button
      className="wish-button"
      whileHover={{ scale: 1.2, rotate: 10 }}
      whileTap={{ scale: 0.8 }}
    >
   Click for a Surprise!
    </motion.button>
    </NavLink>
  </motion.div>
);
}

export default BirthdayCard;

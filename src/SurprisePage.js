import React, { useState, useEffect} from 'react';
import Confetti from 'react-confetti';
import Lottie from 'react-lottie';
import cakeAnimationData from './cake-blowout.json'; 
import { motion } from 'framer-motion';
import { NavLink} from 'react-router-dom';

function SurprisePage() {
  const [confeti, setConfeti] = useState(false);
  const handleConfeti = () => {
    setConfeti(true);
  };
  useEffect(() => {
    if (window.performance) {
      if (performance.getEntriesByType('navigation')[0].type === 'reload') {
        window.location.href = '/';
      }
    }
  }, []);

  const cakeOptions = {
    loop: true,
    autoplay: true,
    animationData: cakeAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="surprise-page" style={{ position: 'relative', height: '100vh', width: '100vw',  backgroundImage: `url("./assets/background.png")`}}>
      <Confetti
        run={confeti}
        numberOfPieces={500}
        recycle={true}
        gravity={0.2}
      />
      <div style={{ textAlign: 'center', marginTop: '20vh' }}>
        <Lottie
          options={cakeOptions}
          height={400}
          width={400}
          
        />
        {!confeti && (
          <button onClick={handleConfeti} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
            Celebrate!
          </button>
        )}
        </div>
        <NavLink to='/PhotoGallery'>
    <motion.button
      className="wish-button"
      whileHover={{ scale: 1.2, rotate: 10 }}
      whileTap={{ scale: 0.8 }}
    >
      Click for some memorable moments!
    </motion.button>
    </NavLink>
    </div>
  );
}

export default SurprisePage;

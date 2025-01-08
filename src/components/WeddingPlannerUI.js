import React from 'react';
import { motion } from 'framer-motion';
import './WeddingPlannerUI.css';

function WeddingPlannerUI() {
  return (
    <div className="app-container">
      {/* Company logo at the top of the screen */}
     
        

      <div className="background">
        {/* Envelope animation */}
        <motion.div
          initial={{ y: '100vh' }} // Start from below the screen
          animate={{ y: 0 }} // Move to center position
          transition={{ type: 'spring', stiffness: 50, damping: 20, delay: 0.5 }}
          className="envelope-container"
        >
          {/* Envelope Flap */}
          <motion.div
            className="flap"
            initial={{ rotateX: 0 }}
            animate={{ rotateX: 180 }}
            transition={{ duration: 1 }}
          ></motion.div>

          {/* Envelope Body */}
          <div className="envelope-body">
            {/* Triangles around the invitation */}
            <div className="left-triangle"></div>
            <div className="right-triangle"></div>
            <div className="bottom-triangle"></div>

            {/* Letter (partially visible inside the envelope) */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div
                className="invitation"
                initial={{ y: 100, opacity: 0 }} // Hidden below the envelope body
                animate={{ y: 0, opacity: 1 }} // Slide up to partially visible position
                transition={{ type: 'spring', stiffness: 50, damping: 20, delay: 1.5 }}
              >
                <p>Congratulations on your big day!</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default WeddingPlannerUI;

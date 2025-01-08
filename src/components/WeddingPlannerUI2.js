import React from "react";
import { motion } from "framer-motion";
import image from "../images/image.png"; // Wedding Decor Image

const WeddingPlannerUI2 = () => {
  return (
    <div style={styles.body}>
      {/* Main Content */}
      <div style={styles.container}>
        {/* Left Section with Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.imageContainer}
        >
          <img src={image} alt="Wedding Decor" style={styles.image} />
        </motion.div>

        {/* Vertical Divider */}
        <div style={styles.divider}></div>

        {/* Right Section with Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.textContainer}
        >
          <h1 style={styles.heading}>
            Anita, let our expert planners craft your special day
          </h1>

          {/* Cards for Text Content */}
          <div style={styles.cards}>
            {/* Card 1 */}
            <motion.div whileHover={{ scale: 1.05 }} style={styles.card}>
              <div style={styles.cardContent}>
                <span style={styles.icon}>🌟</span>
                <div>
                  <h2 style={styles.cardHeading}>
                    Unlock best venues, decors & more
                  </h2>
                  <p style={styles.cardText}>
                    Tell us about your dream day & get a perfect proposal in
                    your budget for FREE
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div whileHover={{ scale: 1.05 }} style={styles.card}>
              <div style={styles.cardContent}>
                <span style={styles.icon}>🌟</span>
                <div>
                  <h2 style={styles.cardHeading}>800+ Flawless Celebrations</h2>
                  <p style={styles.cardText}>
                    Enjoy a perfect, stress-free wedding from the first visit to
                    the final goodbyes
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Centered Button */}
          <div style={styles.buttonWrapper}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={styles.button}
            >
              Get My FREE Proposal
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    paddingTop: "200px",
    minHeight: "100vh",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  container: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    maxWidth: "1200px",
    width: "100%",
    padding: "40px 20px", // Adjusted padding for more spacing
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
  },
  imageContainer: {
    flex: 1.5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  image: {
    width: "100%",
    maxWidth: "400px",
    borderRadius: "15px",
  },
  divider: {
    width: "2px",
    backgroundColor: "#ddd",
    margin: "0 20px",
  },
  textContainer: {
    flex: 1.8, // Reduced flex to make the right section narrower
    padding: "20px",
    maxWidth: "450px", // Added a maximum width to constrain text alignment
    margin: "0 auto", // Center within its flex space
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center", // Center-align the heading
    lineHeight: "1.4", // Adjust line height for better readability
  },
  cards: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginBottom: "30px",
  },
  card: {
    backgroundColor: "#fdfdfd",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    textAlign: "left", // Ensure the text is left-aligned
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  icon: {
    fontSize: "28px",
    color: "#ff4081",
  },
  cardHeading: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: 0,
  },
  cardText: {
    fontSize: "14px",
    color: "#555",
    margin: 0,
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  button: {
    padding: "15px 30px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fff",
    background: "linear-gradient(45deg, #ff4081, #ff7b90)",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    outline: "none",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  },
};

export default WeddingPlannerUI2;

import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import image from "../images/image.png"; // Wedding Decor Image

const WeddingPlannerUI2 = () => {
  return (
    <Body>
      {/* Main Content */}
      <Container>
        {/* Left Section with Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center", // Centers horizontally
            alignItems: "center", // Centers vertically
            padding: "20px",
          }}
        >
          <Image src={image} alt="Wedding Decor" />
        </motion.div>

        {/* Vertical Divider */}
        <Divider />

        {/* Right Section with Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: 1, padding: "20px" }}
        >
          <Heading>Anita, let our expert planners craft your special day</Heading>

          {/* Cards for Text Content */}
          <Cards>
            {/* Card 1 */}
            <motion.div whileHover={{ scale: 1.05 }} style={{ flex: 1 }}>
              <Card>
                <CardContent>
                  <Icon>🌟</Icon>
                  <div>
                    <CardHeading>Unlock best venues, decors & more</CardHeading>
                    <CardText>
                      Tell us about your dream day & get a perfect proposal in your budget for FREE
                    </CardText>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 2 */}
            <motion.div whileHover={{ scale: 1.05 }} style={{ flex: 1 }}>
              <Card>
                <CardContent>
                  <Icon>🌟</Icon>
                  <div>
                    <CardHeading>800+ Flawless Celebrations</CardHeading>
                    <CardText>
                      Enjoy a perfect, stress-free wedding from the first visit to the final goodbyes
                    </CardText>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </Cards>

          {/* Centered Button */}
          <ButtonWrapper>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={buttonStyle}
            >
              Get My FREE Proposal
            </motion.button>
          </ButtonWrapper>
        </motion.div>
      </Container>
    </Body>
  );
};

// Styled Components
const Body = styled.div`
  font-family: Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 15px;
  object-fit: cover;

  @media (max-width: 768px) {
    max-width: 350px;
    margin-left:70px;
    margin-bottom: 20px; // Adds spacing between image and text when stacked vertically
  }
`;

const Divider = styled.div`
  width: 2px;
  background-color: #ddd;
  margin: 0 20px;
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
`;

const Card = styled.div`
  background-color: #fdfdfd;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  align-items: center;
`;

const CardContent = styled.div`
  display: flex;
  gap: 15px;
`;

const Icon = styled.span`
  font-size: 28px;
  color: #ff4081;
`;

const CardHeading = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

const CardText = styled.p`
  font-size: 14px;
  color: #555;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const buttonStyle = {
  padding: "12px 24px",
  fontSize: "16px",
  fontWeight: "bold",
  color: "#fff",
  background: "linear-gradient(45deg, #ff4081, #ff7b90)",
  border: "none",
  borderRadius: "30px",
  cursor: "pointer",
  outline: "none",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
};

export default WeddingPlannerUI2;

import React from "react";
import "./Intro.scss";
import { motion } from "framer-motion";
import { Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
const LearnMoreButton = styled(Button)({
  backgroundColor: "#ec5b53",
  color: "white",
});
const HireMeButton = styled(Button)({
  color: "#464d65",
});
const Intro = () => {
  return (
    <div className="introOuterContainer">
      <Grid container className="introOuterContainer--container">
        <Grid item xs={6}>
          <motion.p
            className="introOuterContainer--container--grid1--firstPara"
            initial={{opacity:0}} animate={{ fontSize: "18px", opacity:1 }}
            transition={{ duration: "0.5" }}
          >
            Get Every Single Solutions
          </motion.p>
          <motion.p
            className="introOuterContainer--container--grid1--secondPara"
            initial={{opacity:0}}
            animate={{opacity:1, fontSize: "70px" }}
            transition={{ duration: "0.5" }}
          >
            I’m Designer
            <br /> Haris F. Watson
          </motion.p>
          <motion.p
            className="introOuterContainer--container--grid1--thirdPara"
            initial={{opacity:0}}
            animate={{ opacity:1, fontSize: "16px" }}
            transition={{ duration: "0.5" }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
            vitae provident! Culpa totam blanditiis autem, ipsum assumenda nulla
            corrupti eligendi!
          </motion.p>
          <div className="introOuterContainer--container--grid1--hiremeAndLearnMore">
            <LearnMoreButton
              component={motion.div}
            
              variant="contained"
              size="large"
              style={{ marginRight: "20px" }}
            >
              Learn More
            </LearnMoreButton>
            <HireMeButton
              component={motion.div}
              whileHover={{}}
              variant="outlined"
              size="large"
            >
              Hire Me
            </HireMeButton>
          </div>
        </Grid>
        <Grid item xs={6}>
          <motion.img
            initial={{ x: "100vh" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            src="images/hero.jpg"
            alt=""
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Intro;

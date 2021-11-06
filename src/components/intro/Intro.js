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
          <p className="introOuterContainer--container--grid1--firstPara">
            Get Every Single Solutions
          </p>
          <h1 className="introOuterContainer--container--grid1--secondPara">
            I’m Designer Haris F. Watson
          </h1>
          <p className="introOuterContainer--container--grid1--thirdPara">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
            vitae provident! Culpa totam blanditiis autem, ipsum assumenda nulla
            corrupti eligendi!
          </p>
          <div className="introOuterContainer--container--grid1--hiremeAndLearnMore">
            <LearnMoreButton
              component={motion.div}
              whileHover={{}}
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
          <img src="images/hero.jpg" alt="" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Intro;

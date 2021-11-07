import React from "react";
import "./Navbar.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const ConsultentButton = styled(Button)({
  backgroundColor: "#ec5b53",
  color: "white",
});
const tabs = ["Home", "About", "Services", "Portfolio", "Page", "Contact"];

const Navbar = () => {
  return (
    <>
      <Grid container spacing={0} className="navbarContainer">
        <Grid xs={4} className="navbarContainer--logoGrid">
          <img
            src="images/logo.webp"
            alt="Portfolio"
          />
        </Grid>
        <Grid className="navbarContainer--tabsGrid" xs={8}>
          {tabs.map((tab) => {
            return (
              <Button
                className="navbarContainer--tabsGrid--tabs"
                variant="text"
              >
                {tab}
              </Button>
            );
          })}

          <ConsultentButton
            component={motion.div}
            whileHover={{
              backgroundColor: "#ffd245",
            }}
            variant="contained"
            size="large"
          >
            Get Free Consultent
          </ConsultentButton>
        </Grid>
      </Grid>
    </>
  );
};

export default Navbar;

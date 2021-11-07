import React from "react";
import "./Navbar.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BrowserRouter as Router, Link } from "react-router-dom";

const ConsultentButton = styled(Button)({
  backgroundColor: "#ec5b53",
  color: "white",
});

const tabs = [
  { tabName: "Home", address: "/" },
  { tabName: "About", address: "/about" },
  { tabName: "Services", address: "/services" },
  { tabName: "Page", address: "/page" },
  { tabName: "Contact", address: "/contact" },
];

const Navbar = () => {
  return (
    <Router>
      <Grid container spacing={0} className="navbarContainer">
        <Grid xs={4} className="navbarContainer--logoGrid">
          <img src="images/logo.webp" alt="Portfolio" />
        </Grid>
        <Grid className="navbarContainer--tabsGrid" xs={8}>
          {tabs.map((tab) => {
            return (
              <Button
                className="navbarContainer--tabsGrid--tabs"
                variant="text"
              >
                <Link
                  className="navbarContainer--tabsGrid--tabs"
                  to={tab.address}
                >
                  {tab.tabName}
                </Link>
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
    </Router>
  );
};

export default Navbar;

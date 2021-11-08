import React from "react";
import "./Navbar.scss";
import Routes from "../Routes";
import {Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

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
    <>
      <Grid container spacing={0} className="navbarContainer" component={motion.div} initial={{y:"-100vh"}} animate={{y:0}} transition={{duration:0.5}}>
        <Grid xs={4} className="navbarContainer--logoGrid">
          <img src="images/logo.webp" alt="Portfolio" />
        </Grid>
        <Grid className="navbarContainer--tabsGrid" xs={8}>
          {tabs.map((tab) => {
            return (
              <Button variant="text">
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
      <Routes />
    </>
  );
};

export default Navbar;

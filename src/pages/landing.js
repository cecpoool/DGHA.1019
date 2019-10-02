import React from "react";
import logo from "../images/logo.png";
import classes from "./landing.module.css";
import { Button } from "reactstrap";
import Navbar from "./navbar";

function Landing(props) {
  return (
    <div className={classes.slide}>
      <Navbar></Navbar>
      <div className={classes.content}>
        <img src={logo} alt="Logo" className={classes.logo} />
        <hr />
        <h2>Dog Guide Handlers Australia Companion App</h2>
        <br />
        <Button className={classes.landingButton}>
          <a
            className={classes.link}
            href="http://dgha.org.au/dgha/membership/"
          >
            Donate
          </a>
        </Button>
        <br />
        <br />
        <Button className={classes.landingButton}>
          <a className={classes.link} href="http://dgha.org.au/dgha/contact/">
            Contact
          </a>
        </Button>
      </div>
    </div>
  );
}

export default Landing;

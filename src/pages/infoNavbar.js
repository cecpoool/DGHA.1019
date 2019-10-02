import React, { useState } from "react";
import classes from "./info.module.css";
import {
  Button,
  ButtonGroup,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { InfoSwiperContext } from "../contexts/InfoSwiperContext";
import { SwiperContext } from "../contexts/SwiperContext";

function InfoNavBar(props) {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropDownOpen(!dropDownOpen);
  };

  return (
    <div>
      <SwiperContext.Consumer>
        {swiperContext => (
          <InfoSwiperContext.Consumer>
            {infoContext => (
              <ButtonGroup className={classes.nav}>
                <Button
                  color="secondary"
                  className={classes.button}
                  onClick={swiperContext.resetIndex}
                >
                  Home
                </Button>
                <Button
                  color="secondary"
                  className={classes.button}
                  onClick={infoContext.prevClick}
                >
                  Prev
                </Button>
                <Button
                  color="secondary"
                  className={classes.button}
                  onClick={infoContext.nextClick}
                >
                  Next
                </Button>
                <ButtonDropdown
                  direction="up"
                  isOpen={dropDownOpen}
                  toggle={toggleDropdown}
                  className={classes.button}
                >
                  <DropdownToggle caret className={classes.button}>
                    Contents
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={swiperContext.resetIndex}>
                      Home
                    </DropdownItem>
                    <DropdownItem divider></DropdownItem>
                    <DropdownItem header>Information</DropdownItem>
                    <DropdownItem
                      data-val={0}
                      onClick={infoContext.contentsClick}
                    >
                      Guide Dog Access Basics
                    </DropdownItem>
                    <DropdownItem
                      data-val={1}
                      onClick={infoContext.contentsClick}
                    >
                      State Legislation
                    </DropdownItem>
                    <DropdownItem
                      data-val={2}
                      onClick={infoContext.contentsClick}
                    >
                      Federal Legislation
                    </DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </ButtonGroup>
            )}
          </InfoSwiperContext.Consumer>
        )}
      </SwiperContext.Consumer>
    </div>
  );
}

export default InfoNavBar;

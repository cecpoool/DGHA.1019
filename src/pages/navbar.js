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

import TRANSLATE_LANGS from "../translate-langs";
import { LanguageContext } from "../contexts/LanguageContext";
import { SwiperContext } from "../contexts/SwiperContext";
import { InfoSwiperContext } from "../contexts/InfoSwiperContext";

function Navbar(props) {
  const [contentsDropDownOpen, setContentsDropDownOpen] = useState(false);
  const [languageDropDownOpen, setLanguageDropDownOpen] = useState(false);

  const toggleContentsDropdown = () => {
    setContentsDropDownOpen(!contentsDropDownOpen);
  };

  const toggleLanguageDropdown = () =>
    setLanguageDropDownOpen(!languageDropDownOpen);

  return (
    <div>
      <ButtonGroup className={classes.nav}>
        <ButtonDropdown
          direction="down"
          isOpen={languageDropDownOpen}
          toggle={toggleLanguageDropdown}
          className={classes.button}
        >
          <DropdownToggle caret className={classes.button}>
            Language
          </DropdownToggle>
          <LanguageContext.Consumer>
            {context => (
              <DropdownMenu>
                {Object.keys(TRANSLATE_LANGS).map(langCode => (
                  <DropdownItem
                    active={langCode === context.currentLang}
                    onClick={() => context.onChangeLang(langCode)}
                  >
                    {TRANSLATE_LANGS[langCode]}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </LanguageContext.Consumer>
        </ButtonDropdown>

        <SwiperContext.Consumer>
          {swiperContext => (
            <Button
              className={classes.button}
              onClick={swiperContext.increaseIndex}
            >
              Access Info
            </Button>
          )}
        </SwiperContext.Consumer>

        <ButtonDropdown
          direction="down"
          isOpen={contentsDropDownOpen}
          toggle={toggleContentsDropdown}
          className={classes.button}
        >
          <DropdownToggle caret className={classes.button}>
            Contents
          </DropdownToggle>
          <SwiperContext.Consumer>
            {swiperContext => (
              <InfoSwiperContext.Consumer>
                {infoContext => (
                  <DropdownMenu>
                    <DropdownItem onClick={swiperContext.resetIndex}>
                      Home
                    </DropdownItem>
                    <DropdownItem divider></DropdownItem>
                    <DropdownItem header>Information</DropdownItem>
                    <DropdownItem
                      data-val={0}
                      onClick={event => {
                        infoContext.contentsClick(event);
                        swiperContext.increaseIndex();
                      }}
                    >
                      Guide Dog Access Basics
                    </DropdownItem>
                    <DropdownItem
                      data-val={1}
                      onClick={event => {
                        infoContext.contentsClick(event);
                        swiperContext.increaseIndex();
                      }}
                    >
                      State Legislation
                    </DropdownItem>
                    <DropdownItem
                      data-val={2}
                      onClick={event => {
                        infoContext.contentsClick(event);
                        swiperContext.increaseIndex();
                      }}
                    >
                      Federal Legislation
                    </DropdownItem>
                  </DropdownMenu>
                )}
              </InfoSwiperContext.Consumer>
            )}
          </SwiperContext.Consumer>
        </ButtonDropdown>
      </ButtonGroup>
    </div>
  );
}

export default Navbar;

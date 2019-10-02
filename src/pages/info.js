import React from "react";
import SwipeableViews from "react-swipeable-views";
import classes from "./info.module.css";
import StateLegislation from "./StateLegislation";
import Translate from "../components/translate";
import InfoNavBar from "./infoNavbar";
import { LanguageContext } from "../contexts/LanguageContext";
import { InfoSwiperContext } from "../contexts/InfoSwiperContext";

function Info(props) {
  return (
    <InfoSwiperContext.Consumer>
      {infoContext => (
        <div>
          <InfoNavBar />
          <SwipeableViews
            enableMouseEvents
            resistance
            index={infoContext.index}
            onChangeIndex={infoContext.handleChangeIndex}
          >
            <div className={classes.slide} axis="x-reverse">
              <div className={classes.content}>
                <LanguageContext.Consumer>
                  {languageContext => (
                    <Translate
                      from={languageContext.defaultLang}
                      to={languageContext.currentLang}
                    >
                      <h1 className={classes.header}>
                        Guide Dog Access Basics
                      </h1>
                      <hr />
                      <h3>
                        Throughout Australia, Guide Dogs are legally allowed to
                        enter all public places, including:
                      </h3>
                      <br />
                      <ul>
                        <li>
                          <h5>shops and supermarkets</h5>
                        </li>
                        <li>
                          <h5>cafes, restaurants and pubs</h5>
                        </li>
                        <li>
                          <h5>hotels and motels</h5>
                        </li>
                        <li>
                          <h5>
                            hospitals, medical practices and dental surgeries
                          </h5>
                        </li>
                        <li>
                          <h5>
                            all forms of public transport, including taxis
                          </h5>
                        </li>
                      </ul>
                    </Translate>
                  )}
                </LanguageContext.Consumer>
              </div>
            </div>
            <div className={classes.slide}>
              <StateLegislation></StateLegislation>
            </div>
            <div className={classes.slide}>
              <div className={classes.content}>
                <LanguageContext.Consumer>
                  {languageContext => (
                    <Translate
                      from={languageContext.defaultLang}
                      to={languageContext.currentLang}
                    >
                      <h1 className={classes.header}>Federal Legislation</h1>
                      <hr />
                      <p>
                        Under the Federal Disability Discrimination Act 1992,
                        Guide and Seeing Eye Dogs are covered by the term
                        "Assistance Animals".
                      </p>
                      <br />
                      <p>
                        While the Disability Discrimination Act includes a
                        section on exemptions to access for assistance animals
                        (Section 54A), it does not explicitly state the types of
                        establishments where assistance animals are not
                        permitted. As a result of precedents that have been
                        established through case law, however, it is generally
                        accepted that dog guides are not permitted in operating
                        theatres, hospital burns units, commercial kitchens and
                        some zoos.
                      </p>
                      <br />
                      <p>
                        When it comes to medical facilities, even solicitors
                        seem to have some confusion in regards to where
                        assistance animals are and are not permitted. This being
                        the case, we have had several members that have been
                        granted access to intensive care units with their dog
                        guides, so this precedent has already been established.
                      </p>
                    </Translate>
                  )}
                </LanguageContext.Consumer>
              </div>
            </div>
          </SwipeableViews>
        </div>
      )}
    </InfoSwiperContext.Consumer>
  );
}

export default Info;

import React, { useState } from "react";
import Landing from "./landing";
import Info from "./info";
import SwipeableViews from "react-swipeable-views";
import Div100vh from "react-div-100vh";
import { SwiperContext } from "../contexts/SwiperContext";
import InfoSwiperWrapper from "../components/InfoSwiperWrapper";

const styles = {
  slide: {
    height: "100vh",
  },
};

function Swiper(props) {
  const [index, setIndex] = useState(0);

  const swiperValues = {
    index: index,
    increaseIndex: () => {
      if (index <= 1) setIndex(index + 1);
    },
    resetIndex: () => setIndex(0),
  };

  const handleChangeIndex = index => {
    setIndex(index);
  };

  //swipe down doesnt work

  return (
    <Div100vh>
      <SwiperContext.Provider value={swiperValues}>
        <SwipeableViews
          index={index}
          onChangeIndex={handleChangeIndex}
          containerStyle={styles.slide}
          axis="y"
          resistance
        >
          <InfoSwiperWrapper>
            <Landing />
            <Info />
          </InfoSwiperWrapper>
        </SwipeableViews>
      </SwiperContext.Provider>
    </Div100vh>
  );
}
export default Swiper;

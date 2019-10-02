import React, { useState } from "react";
import { InfoSwiperContext } from "../contexts/InfoSwiperContext";

function InfoSwiperWrapper(props) {
  const [index, setIndex] = useState(0);

  const swiperValues = {
    index: index,
    prevClick: () => {
      if (index >= 1) setIndex(index - 1);
    },
    nextClick: () => {
      if (index <= 1) setIndex(index + 1);
    },
    resetIndex: () => setIndex(0),
    contentsClick: event => {
      let newIndex = parseInt(event.target.getAttribute("data-val"));
      setIndex(newIndex);
    },
  };

  return (
    <InfoSwiperContext.Provider value={swiperValues}>
      {props.children}
    </InfoSwiperContext.Provider>
  );
}

export default InfoSwiperWrapper;

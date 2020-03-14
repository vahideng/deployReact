import Carousel from "react-bootstrap/Carousel";
import React, { CSSProperties, SetStateAction, useState } from "react";
import classes from "./Carousel.module.css";
import Icon from "../assets/icons/icon";
interface Props {
  carouselStyle?: CSSProperties;
  intervalSec?: number;
  items: any;
}
const CustomCarousel = (props: Props) => {
  const [stateIndex, setStateIndex] = useState(0);

  const handleSelect = (selectedIndex: SetStateAction<number>, _e: any) => {
    setStateIndex(selectedIndex);
  };

  const { items, intervalSec, carouselStyle } = props;

  return (
    <div>
      <Carousel
        // fade={true}
        // slide={false}
        indicators={false}
        activeIndex={stateIndex}
        onSelect={handleSelect}
        style={!!carouselStyle ? carouselStyle : {}}
        interval={!!intervalSec ? intervalSec : null}
        prevIcon={
          <span>
            <Icon icon={"left"} size={30} color={"#FF2626"} />
          </span>
        }
        nextIcon={<Icon icon={"Right1"} size={30} color={"#FF2626"} />}
        wrap={false}
      >
        {items[0].map((item: any, index: any) => {
          return (
            <Carousel.Item key={index} className={classes.CarouselItem}>
              {item.children}
            </Carousel.Item>
          );
        })}
      </Carousel>

      <div className={classes.CarouselIndicDiv}>
        {items[0].map((_item: any, index: any) => {
          return (
            <span
              key={index}
              className={classes.CarouselIndic}
              style={
                stateIndex === index
                  ? { backgroundColor: "#000", padding: ".25rem" }
                  : {}
              }
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default CustomCarousel;

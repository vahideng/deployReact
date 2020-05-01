import React, { CSSProperties, useState } from "react";
import classes from "./Carousel.module.css";
import Icon from "../assets/icons/icon";
interface Props {
  carouselStyle?: CSSProperties;
  intervalSec?: number;
  items: any;
}
const CustomCarousel = (props: Props) => {
  const [stateIndex, setStateIndex] = useState(0);
  const [rightDisable, setRightDisable] = useState(false);
  const [leftDisable, setLeftDisable] = useState(true);

  const { items, carouselStyle } = props;

  const onRightClick = (items: any, index: number) => {
    setStateIndex(stateIndex + 1);
    setLeftDisable(false);
    if (items[0].length - 2 === index) {
      setRightDisable(!rightDisable);
    }
  };
  const onLeftClick = (index: number) => {
    setStateIndex(stateIndex - 1);
    setRightDisable(false);
    if (index === 1) {
      setLeftDisable(true);
    }
  };

  return (
    <div className={classes.MainDiv}>
      <div>
        {items[0].map((item: any, index: any) => {
          return (
            stateIndex === index && (
              <div
                key={index}
                className={classes.CarouselItem}
                style={!!carouselStyle ? carouselStyle : {}}
              >
                <span
                  style={
                    leftDisable ? { pointerEvents: "none", opacity: 0.4 } : {}
                  }
                  onClick={() => onLeftClick(index)}
                  className={classes.Chevrons}
                >
                  <Icon icon="left" color="#FF2626" size={32} />
                </span>
                <div className={classes.Children}>{item.children}</div>
                <span
                  style={
                    rightDisable ? { pointerEvents: "none", opacity: 0.4 } : {}
                  }
                  onClick={() => onRightClick(items, index)}
                  className={classes.Chevrons}
                >
                  <Icon icon="Right1" color="#FF2626" size={32} />
                </span>
              </div>
            )
          );
        })}
      </div>

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

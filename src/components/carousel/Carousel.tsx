import React, { CSSProperties, useState, useRef, useEffect } from "react";
import classes from "./Carousel.module.css";
import Icon from "../assets/icons/icon";
interface Props {
  type?: "wide" | "default";
  carouselStyle?: CSSProperties;
  intervalSec?: number;
  items: any;
}

const CustomCarousel = (props: Props) => {
  const { items, carouselStyle, type } = props;

  const RenderDefault = () => {
    const [stateIndex, setStateIndex] = useState(0);
    const [rightDisable, setRightDisable] = useState(false);
    const [leftDisable, setLeftDisable] = useState(true);
    const [childrenClasses, setChildrenClasses] = useState(
      `${classes.Children}`
    );

    const onRightClick = (items: any, index: number) => {
      setChildrenClasses(`${classes.Children}`);
      setStateIndex(stateIndex + 1);
      setLeftDisable(false);
      if (items[0].length - 2 === index) {
        setRightDisable(!rightDisable);
      }
    };
    const onLeftClick = (index: number) => {
      setChildrenClasses(`${classes.Children} ${classes.leftAnimation}`);
      setStateIndex(stateIndex - 1);
      setRightDisable(false);
      if (index === 1) {
        setLeftDisable(true);
      }
    };
    return (
      <>
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
                  <div className={childrenClasses}>{item.children}</div>
                  <span
                    style={
                      rightDisable
                        ? { pointerEvents: "none", opacity: 0.4 }
                        : {}
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
                onClick={() => setStateIndex(index)}
              ></span>
            );
          })}
        </div>
      </>
    );
  };

  const RenderWide = () => {
    const [stateIndex, setStateIndex] = useState(0);
    const CarouselScroller = useRef(null);
    const CarouselItem = useRef(null);

    useEffect(() => {
      if (
        CarouselScroller &&
        CarouselScroller.current &&
        CarouselItem &&
        CarouselItem.current
      ) {
        CarouselScroller.current.scrollLeft =
          stateIndex * (CarouselItem.current.clientWidth + 16);
      }
    }, [stateIndex]);

    return (
      <>
        <div className={classes.InnerWide} ref={CarouselScroller}>
          {items[0].map((item: any, index: any) => {
            return (
              <div
                key={index}
                ref={CarouselItem}
                className={classes.CarouselItemWide}
                style={!!carouselStyle ? carouselStyle : {}}
              >
                <div className={classes.ChildrenWide}>{item.children}</div>
              </div>
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
                onClick={() => setStateIndex(index)}
              ></span>
            );
          })}
        </div>
      </>
    );
  };

  const Controller = () => {
    switch (type) {
      case "wide":
        return <RenderWide />;
      default:
        return <RenderDefault />;
    }
  };

  return (
    <div className={classes.MainDiv}>
      <Controller />
    </div>
  );
};

export default CustomCarousel;

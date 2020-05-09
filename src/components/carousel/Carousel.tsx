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
    const [rightDisable, setRightDisable] = useState(null);
    const [leftDisable, setLeftDisable] = useState(null);
    const [singleItem, setSingleItem] = useState(null);

    const onRightClick = () => {
      setStateIndex(stateIndex + 1);
    };

    const onLeftClick = () => {
      setStateIndex(stateIndex - 1);
    };
    const dataLength = items[0].length;
    let singleItemClass: string = null;
    if (singleItem) {
      singleItemClass = classes.SingleItemClass;
    }

    useEffect(() => {
      if (items[0].length - 1 === stateIndex) {
        setRightDisable(true);
        setLeftDisable(false);
      } else if (stateIndex === 0) {
        setLeftDisable(true);
        setRightDisable(false);
      } else {
        setLeftDisable(false);
        setRightDisable(false);
      }
    }, [stateIndex]);

    useEffect(() => {
      if (dataLength === 1) {
        setSingleItem(true);
      }
    }, []);

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
                    onClick={onLeftClick}
                    className={`${classes.Chevrons} ${singleItemClass}`}
                  >
                    <Icon icon="left" color="#FF2626" size={32} />
                  </span>
                  <div className={`${classes.Children} `}>{item.children}</div>
                  <span
                    style={
                      rightDisable
                        ? { pointerEvents: "none", opacity: 0.4 }
                        : {}
                    }
                    onClick={onRightClick}
                    className={`${classes.Chevrons} ${singleItemClass}`}
                  >
                    <Icon icon="Right1" color="#FF2626" size={32} />
                  </span>
                </div>
              )
            );
          })}
        </div>
        <div className={`${classes.CarouselIndicDiv}  ${singleItemClass}`}>
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

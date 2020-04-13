import React from "react";
import CustomCarousel from "../Carousel";
import Tag from "src/components/tags/Tag";
import Paragraphs from "../../assets/typography";
import classes from "./BoxSlider.module.css";
const { B_20_BLACK, R_17_BLACK } = Paragraphs;
interface Props {
  sliderItems?: {
    tagText?: string;
    title?: string;
    descriptions?: string;
    readMore?: { text: string; onReadClick: () => void };
  }[];
}

const BoxSlider = (props: Props) => {
  return (
    <>
      <CustomCarousel
        carouselStyle={{
          minHeight: "20.12rem"
        }}
        items={[
          props.sliderItems?.map((item: any, index: any) => {
            return {
              children: (
                <div key={index} className={classes.Container}>
                  <Tag
                    text={item.tagText}
                    textStyles={{
                      fontSize: ".68rem",
                      fontWeight: 600,
                      lineHeight: "15px",
                      letterSpacing: ".8px",
                      textTransform: "uppercase"
                    }}
                    styles={{
                      backgroundColor: "#333333",
                      padding: ".3rem 1rem"
                    }}
                  />
                  <div className={classes.BoxTitle}>
                    <B_20_BLACK>
                      {item.title.substring(0, 240)}{" "}
                      {item.title.length >= 240 && <span>...</span>}
                    </B_20_BLACK>
                  </div>
                  <R_17_BLACK className={classes.descriptions}>
                    {item.descriptions}

                    {!!item.readMore && (
                      <>
                        <span>...</span>
                        <span
                          className={classes.ReadMore}
                          onClick={item.readMore.onReadClick}
                        >
                          {item.readMore.text}
                        </span>
                      </>
                    )}
                  </R_17_BLACK>
                </div>
              )
            };
          })
        ]}
      />
    </>
  );
};

export default BoxSlider;

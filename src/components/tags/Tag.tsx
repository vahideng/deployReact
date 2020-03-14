import React, { CSSProperties } from "react";
import classes from "./Tag.module.css";
import Paragraphs from "../assets/typography";
import images from "src/assets";

const { B_17_WHITE } = Paragraphs;
interface Props {
  testId?: string;
  text?: string;
  image?: { src: string };
  styles?: CSSProperties;
  textStyles?: CSSProperties;
}

const Tag: React.FC<Props> = props => {
  const { text, image, testId, styles, textStyles } = props;
  return (
    <div className={classes.TagMainDiv} id={testId} style={styles}>
      <div className={classes.TagChildDiv}>
        {!!image && (
          <img
            src={!!image ? image.src : images.common.amyIcon}
            className={classes.TagImage}
            alt={"amy-tag"}
          />
        )}
        <B_17_WHITE style={textStyles}>{text}</B_17_WHITE>
      </div>
    </div>
  );
};

export default Tag;

import React from "react";
import classes from "./Tag.module.css";
import Paragraphs from "../assets/typography";
import images from "src/assets";
const { B_17_WHITE } = Paragraphs;
interface Props {
  text: string;
  image?: { src: string };
}

const Tag: React.FC<Props> = props => {
  const { text, image } = props;
  return (
    <div className={classes.TagMainDiv}>
      <div className={classes.TagChildDiv}>
        <div>
          <img
            src={!!image ? image.src : images.common.amyIcon}
            className={classes.TagImage}
            alt={"amy-tag"}
          />
        </div>

        <B_17_WHITE>{text}</B_17_WHITE>
      </div>
    </div>
  );
};

export default Tag;

import React from "react";

import classes from "./FirstBanner.module.css";
import { CSSProperties } from "styled-components";

interface Props {
  content: string;
  image: string;
  onClick?: () => void;
  style?: CSSProperties;
  tag: string;
  testId?: string;
  title: string;
}

const FirstBanner: React.FC<Props> = ({
  content,
  image,
  style,
  tag,
  testId,
  title
}: Props) => {
  return (
    <div className={classes.Container} id={`${testId}`} style={style}>
      <div className={classes.Overlay}>
        <div className={classes.ImageOverlay} />
        <img className={classes.ImageContainer} src={image} />
        <div className={classes.Details}>
          <div className={classes.Tag}>
            <p className={classes.TagText}>{tag}</p>
          </div>
          <p className={classes.Title}>{title}</p>
          <p className={classes.Content}>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default FirstBanner;

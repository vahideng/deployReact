import React from "react";

import classes from "./SecondBanner.module.css";

interface Props {
  content: string;
  image: string;
  onClick?: () => void;
  testId?: string;
  title: string;
}

const SecondBanner: React.FC<Props> = ({
  content,
  image,
  testId,
  title
}: Props) => {
  return (
    <div className={classes.Container} id={`${testId}`}>
      <div className={classes.Overlay}>
        <img className={classes.ImageContainer} src={image} />
        <div className={classes.Details}>
          <p className={classes.Title}>{title}</p>
          <p className={classes.Content}>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;

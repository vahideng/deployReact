import React from "react";
import classes from "./SecureImage.module.css";
import Paragraphs from "../../components/assets/typography";
const { B_15_BLACK } = Paragraphs;
interface Props {
  testId?: string;
  mainImage?: string;
  image: string;
  label?: string;
}

const SecureImage: React.FC<Props> = props => {
  const { image, label, testId, mainImage } = props;
  return (
    <div className={classes.SecureImageContainer} id={testId}>
      {!!label && (
        <B_15_BLACK className={classes.SecureImageTitle}>{label}</B_15_BLACK>
      )}
      <div className={classes.SecureImageMain}>
        <div
          style={{
            backgroundImage: `url(${mainImage || image})`
          }}
          className={classes.SecureImageBG}
        ></div>
        {!!image && (
          <img src={image} alt="Logo" className={classes.SecureImageImg} />
        )}
      </div>
      <div className={classes.SecureImageCircle}>
        <div className={classes.CircleCenterWrapper}>
          <img
            className={classes.CircleCenterImage}
            alt="Secure Picture"
            src={image}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default SecureImage;

import React from "react";
import classes from "./SecureImage.module.css";

interface Props {
  image: string;
}

const SecureImage: React.FC<Props> = props => {
  const { image } = props;
  return (
    <div className={classes.SecureImageMain}>
      <div
        style={{
          backgroundImage: `url(${image})`
        }}
        className={classes.SecureImageBG}
      ></div>
      <div>
        {!!image && (
          <img src={image} alt="Logo" className={classes.SecureImageImg} />
        )}
      </div>
    </div>
  );
};

export default SecureImage;

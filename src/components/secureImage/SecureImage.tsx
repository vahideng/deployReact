import React from "react";
import classes from "./SecureImage.module.css";
import Paragraphs from "../../components/assets/typography";
const { B_15_BLACK } = Paragraphs;
interface Props {
  testId?: string;
  image: string;
  label?: string;
}

const SecureImage: React.FC<Props> = props => {
  const { image, label, testId } = props;
  return (
    <div id={testId}>
      <B_15_BLACK className={classes.SecureImageTitle}>{label}</B_15_BLACK>
      <div className={classes.SecureImageMain}>
        <div
          style={{
            backgroundImage: `url(${image})`
          }}
          className={classes.SecureImageBG}
        ></div>

        {!!image && (
          <img src={image} alt="Logo" className={classes.SecureImageImg} />
        )}
      </div>
    </div>
  );
};

export default SecureImage;

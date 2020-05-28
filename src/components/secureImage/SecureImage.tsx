import React from "react";
import classes from "./SecureImage.module.css";
import Paragraphs from "../../components/assets/typography";
const { B_15_BLACK } = Paragraphs;
interface Props {
  testId?: string;
  mainImage?: string;
  image: string;
  label?: string;
  type?: "wide" | "default";
  responsive?: boolean;
}

const SecureImage: React.FC<Props> = (props) => {
  const { image, label, testId, mainImage, type, responsive } = props;
  let backgroundCls = classes.SecureImageMain;
  if (responsive) {
    backgroundCls = `${classes.SecureImageMain} ${classes.SecureImageMainRes}`;
  }

  const DefaultType = () => {
    return (
      <div id={testId}>
        <B_15_BLACK className={classes.SecureImageTitle}>{label}</B_15_BLACK>
        <div className={backgroundCls}>
          <div
            style={{
              backgroundImage: `url(${image})`,
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

  const WideType = () => {
    return (
      <div className={classes.SecureImageContainerWide} id={testId}>
        {!!label && (
          <B_15_BLACK className={classes.SecureImageTitleWide}>
            {label}
          </B_15_BLACK>
        )}
        <div className={classes.SecureImageMainWide}>
          <div
            style={{
              backgroundImage: `url(${mainImage || image})`,
            }}
            className={classes.SecureImageBGWide}
          ></div>
          {!!image && (
            <img
              src={image}
              alt="Logo"
              className={classes.SecureImageImgWide}
            />
          )}
        </div>
        <div className={classes.SecureImageCircleWide}>
          <div className={classes.CircleCenterWrapperWide}>
            <img
              className={classes.CircleCenterImageWide}
              alt="Secure Picture"
              src={image}
            ></img>
          </div>
        </div>
      </div>
    );
  };

  const Controller = () => {
    switch (type) {
      case "wide":
        return <WideType />;
      default:
        return <DefaultType />;
    }
  };

  return <Controller />;
};

export default SecureImage;

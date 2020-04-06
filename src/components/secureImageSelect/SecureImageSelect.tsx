import React from "react";
import classes from "./SecureImageSelect.module.css";
import Icon from "../assets/icons/icon";
import Paragraphs from "../assets/typography";
const { B_15_BLACK } = Paragraphs;

declare type SecureImage = {
  uri?: string;
  id?: string;
  alt?: string;
};

interface Props {
  testId?: string;
  disabled?: boolean;
  label?: string;
  images: SecureImage[];
  iconRefresh?: string;
  onSelect?: (secureImage: SecureImage) => void;
  onRefresh?: (secureImageIds?: string[]) => void;
}

const SecureImageSelect: React.FC<Props> = (props) => {
  const {
    disabled = false,
    label,
    testId,
    images,
    iconRefresh,
    onSelect = (image: SecureImage) => {
      window.alert(`secure image ${image.uri} selected`);
    },
    onRefresh = () => {
      window.alert("refresh new image options");
    },
  } = props;

  const handleSelectImage = (image: SecureImage) => {
    if (onSelect && !disabled) {
      onSelect(image);
    }
  };

  const handleRefreshOptions = () => {
    if (onRefresh && !disabled) {
      onRefresh();
    }
  };

  return (
    <div className={classes.SecureImageSelectContainer} id={testId}>
      {!!label && <B_15_BLACK className={classes.Title}>{label}</B_15_BLACK>}
      <div className={classes.Options}>
        {images.map((image: SecureImage, index: number) => {
          const { uri, alt } = image;
          return (
            <div className={classes.OptionWrapper} key={index}>
              <img
                className={classes.Option}
                src={uri}
                alt={alt}
                onClick={() => handleSelectImage(image)}
              />
            </div>
          );
        })}
        <div className={classes.ActionWrapper}>
          {iconRefresh ? (
            <img
              onClick={handleRefreshOptions}
              className={classes.Action}
              src={iconRefresh}
              alt="refresh"
            />
          ) : (
            <div onClick={handleRefreshOptions}>
              <Icon className={classes.Action} icon="Security2" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecureImageSelect;

import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import classes from "./ImageModal.module.css";
import PrimaryButton from "src/components/buttons/primaryButton/PrimaryButton";
import Paragraphs from "../../assets/typography";

const { B_20_BLACK, R_15_BLACK } = Paragraphs;

interface Props {
  testId?: string;
  modalIsOpen: boolean;
  imgSrc: any;
  title: string;
  message: string;
  buttonLabel: string;
  buttonLabelColor?: string;
  buttonColor?: {
    top: string;
    bottom: string;
  };
  onButtonClick: () => void;
  leftButtonLabel?: string;
  leftButtonLabelColor?: string;
  leftButtonColor?: {
    top: string;
    bottom: string;
  };
  onLeftButtonClick?: () => void;
  rightButtonLabel?: string;
  rightButtonLabelColor?: string;
  rightButtonColor?: {
    top: string;
    bottom: string;
  };
  onRightButtonClick?: () => void;
  onRequestClose?: () => void;
}
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "transparent",
    border: "none"
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "multiply"
  }
};

const ImageModal: React.FC<Props> = ({
  testId,
  modalIsOpen,
  imgSrc,
  title,
  message,
  buttonLabel,
  buttonLabelColor,
  buttonColor,
  onButtonClick,
  onRequestClose,
  leftButtonLabel,
  leftButtonLabelColor,
  leftButtonColor,
  onLeftButtonClick,
  rightButtonColor,
  rightButtonLabel,
  rightButtonLabelColor,
  onRightButtonClick
}) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(modalIsOpen);
  }, [modalIsOpen]);

  const handleCloseModal = () => {
    if (onRequestClose) {
      onRequestClose();
    } else {
      setShow(false);
    }
  };
  return (
    <div id={testId}>
      <Modal
        isOpen={show}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <div className={classes.container}>
          <img src={imgSrc} className={classes.imageContainer} />
          <div className={classes.titleContainer}>
            <B_20_BLACK className={classes.title}>{title}</B_20_BLACK>
          </div>
          <div className={classes.messageContainer}>
            <R_15_BLACK className={classes.message}>{message}</R_15_BLACK>
          </div>
          {!leftButtonColor &&
          !onLeftButtonClick &&
          !rightButtonColor &&
          !onRightButtonClick ? (
            <div className={classes.buttonContainer}>
              <PrimaryButton
                title={buttonLabel}
                onButtonClick={onButtonClick}
                width={"25rem"}
                titleColor={buttonLabelColor}
                buttonColor={
                  buttonColor
                    ? buttonColor
                    : { top: "#FD8585", bottom: "#FF2222" }
                }
              />
            </div>
          ) : (
            <div className={classes.twoButtonContainer}>
              <PrimaryButton
                title={leftButtonLabel}
                onButtonClick={onLeftButtonClick}
                width={"14.6875rem"}
                titleColor={leftButtonLabelColor}
                buttonColor={
                  leftButtonColor
                    ? leftButtonColor
                    : { top: "#F6F6F3", bottom: "#EAE9E3" }
                }
              />
              <PrimaryButton
                title={rightButtonLabel}
                onButtonClick={onRightButtonClick}
                titleColor={rightButtonLabelColor}
                width={"14.6875rem"}
                buttonColor={
                  rightButtonColor
                    ? rightButtonColor
                    : { top: "#FD8585", bottom: "#FF2222" }
                }
              />
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;

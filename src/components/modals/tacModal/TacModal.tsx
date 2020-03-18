import React, { useState, useEffect, ReactNode } from "react";
import Modal from "react-modal";
import InputField from "../../inputs/inputFields/InputFields";
import Paragraphs from "../../assets/typography";
import FullButton from "../../buttons/primaryButton/PrimaryButton";
import classes from "./TacModal.module.css";
import Icon from "src/components/assets/icons/icon";

const { R_15_GREY444, B_15_BLACK, R_14_BLACK, B_15_ORANGE_463 } = Paragraphs;

interface Props {
  testId?: string;
  content?: string;
  link?: { text: string; onLinkClick: () => void };
  modalIsOpen?: boolean;
  handleChange?: any;
  label?: string;
  value?: string;
  notValid?: boolean;
  errorMessage?: {
    testId?: string;
    errorText: string;
    subText: string;
  };
  buttonTitle?: string;
  onButtonClick?: any;
  buttonColor?: any;
  inActive?: boolean;
  inActiveIcon?: { name?: string; color?: string; size?: number };
  inActiveMessage?: { title: string; text: string };
  clearIcon?: boolean;
  activeStatus?: boolean;
  activeStatusChild?: ReactNode;
  clearClickHandler?: () => void;
  onCloseClick?: () => void;
}

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
const customStyles = {
  content: {
    top: "auto",
    right: "auto",
    bottom: "0",
    marginRight: "-50%",
    width: "100%",
    left: " 0px"
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "multiply"
  }
};
const TacModal: React.FC<Props> = ({
  modalIsOpen,
  handleChange,
  label,
  value,
  notValid,
  errorMessage,
  content,
  buttonTitle,
  onButtonClick,
  buttonColor,
  testId,
  inActive,
  inActiveIcon,
  inActiveMessage,
  clearIcon,
  clearClickHandler,
  activeStatus,
  activeStatusChild,
  link,
  onCloseClick
}) => {
  const [modalStatus, setModalStatus] = useState(modalIsOpen);
  useEffect(() => {
    setModalStatus(modalIsOpen);
  }, [modalIsOpen]);
  return (
    <>
      <Modal isOpen={!!modalStatus && modalStatus} style={customStyles}>
        <div id={testId} className={classes.TacMainDiv}>
          {!!activeStatus ? (
            <>{activeStatusChild}</>
          ) : (
            <div id={testId} className={classes.TacMainInnerDiv}>
              {!!inActive ? (
                <div className={classes.TacInActiveIcon}>
                  {!!inActiveIcon ? (
                    <Icon
                      icon={inActiveIcon.name}
                      color={inActiveIcon.color}
                      size={inActiveIcon.size}
                    />
                  ) : (
                    <Icon icon={"Amy1"} color={"#A9A9A9"} size={60} />
                  )}

                  <div className={classes.TacInActiveIconText}>
                    <B_15_BLACK>{inActiveMessage.title}</B_15_BLACK>
                    <R_14_BLACK>{inActiveMessage.text}</R_14_BLACK>
                  </div>
                </div>
              ) : (
                <div className={classes.TacInputField}>
                  <form>
                    <InputField
                      clearIcon={clearIcon}
                      clearClickHandler={clearClickHandler}
                      testId={`${testId}-0`}
                      handleChange={handleChange}
                      type="password"
                      label={label}
                      icon={{ name: "TAC" }}
                      value={value}
                      notValid={notValid}
                      errorMessage={errorMessage}
                    />
                    <div className={classes.TacInputFieldContent}>
                      <R_15_GREY444>{content}</R_15_GREY444>
                      {!!link && (
                        <B_15_ORANGE_463
                          onClick={link.onLinkClick}
                          className={classes.TacInputFieldLink}
                        >
                          {link.text}
                        </B_15_ORANGE_463>
                      )}
                    </div>
                  </form>
                </div>
              )}

              <div className={classes.TacButton}>
                <FullButton
                  testId={`${testId}-1`}
                  buttonColor={{
                    top: buttonColor.top,
                    bottom: buttonColor.bottom
                  }}
                  title={buttonTitle}
                  onButtonClick={!!onButtonClick && onButtonClick}
                />
              </div>
              <span
                className={classes.TacCrossButton}
                onClick={() => {
                  setModalStatus(false);
                  onCloseClick();
                }}
              >
                <Icon icon={"Fail-2"} size={15} />
              </span>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default TacModal;

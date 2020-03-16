import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import InputField from "../../inputs/inputFields/InputFields";
import Paragraphs from "../../assets/typography";
import FullButton from "../../buttons/primaryButton/PrimaryButton";
import classes from "./TacModal.module.css";
import Icon from "src/components/assets/icons/icon";

const { R_15_GREY444 } = Paragraphs;

interface Props {
  testId?: string;
  content?: string;
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
  buttonColorDown?: string;
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
  testId
}) => {
  const [modalStatus, setModalStatus] = useState(modalIsOpen);
  useEffect(() => {
    setModalStatus(modalIsOpen);
  }, [modalIsOpen]);
  return (
    <>
      <Modal isOpen={!!modalStatus && modalStatus} style={customStyles}>
        <div id={testId} className={classes.TacMainDiv} style={{}}>
          <div id={testId} className={classes.TacMainInnerDiv} style={{}}>
            <form>
              <InputField
                testId={`${testId}-0`}
                handleChange={handleChange}
                type="password"
                label={label}
                icon={{ name: "TAC" }}
                value={value}
                notValid={notValid}
                errorMessage={errorMessage}
              />
              <R_15_GREY444
                style={{
                  width: "34.6rem",
                  paddingTop: "16px",
                  paddingLeft: " 20px"
                }}
              >
                {content}
              </R_15_GREY444>
            </form>
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
              }}
            >
              <Icon icon={"Fail-2"} size={15} />
            </span>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TacModal;

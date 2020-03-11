import React from "react";

import Modal from "react-modal";

import InputField from "../../inputs/inputFields/InputFields";
import Paragraphs from "../../assets/typography";
import FullButton from "../../buttons/primaryButton/PrimaryButton";

const { R_15_GREY444 } = Paragraphs;

interface Props {
  testId?: string;
  content?: string;
  modalIsOpen?: boolean;
  handleChange?: any;
  label?: string;
  value?: string;
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
  content,
  buttonTitle,
  onButtonClick,
  buttonColor,
  testId
}) => {
  return (
    <div>
      <Modal
        isOpen={!!modalIsOpen && modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="row" id={testId}>
          <div
            style={{ display: "flex", justifyContent: "center", width: "80%" }}
            className="col-lg-8"
          >
            <form>
              <InputField
                testId={`${testId}-0`}
                handleChange={handleChange}
                type="text"
                label={label}
                icon={{ name: "TAC" }}
                value={value}
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
          </div>
          <div
            style={{ alignSelf: "center", paddingBottom: "26px" }}
            className="col-lg-4"
          >
            <FullButton
              testId={`${testId}-1`}
              buttonColor={{ top: buttonColor.top, bottom: buttonColor.bottom }}
              title={buttonTitle}
              onButtonClick={!!onButtonClick && onButtonClick}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TacModal;
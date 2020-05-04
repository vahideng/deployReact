import React, { Component, ReactNode } from "react";

import Modal from "react-modal";

import Paragraphs from "../../assets/typography";
import classes from "./StickyTimer.module.css";
import LocalImages from "src/components/assets/images";
import Icon from "src/components/assets/icons/icon";
const { R_17_BLACK, B_17_BLACK, R_15_BLACK } = Paragraphs;

const customStyles = {
  content: {
    top: "auto",
    right: "auto",
    bottom: "0",
    marginRight: "-50%",
    width: "100%",
    left: " 0px",
    padding: "0px",
    zIndex: 1000000000,
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "multiply",
    zIndex: 1000000000,
  },
};
interface Props {
  testId?: string;
  modalIsOpen: boolean;
  expirationTime: string;
  expirationText?: string;
  text?: string;
  closeTimeoutMS?: number;
  contentLabel?: string;
  textBefore?: string;
  children?: ReactNode;
  onCLoseButtonCLick?: () => void;
  showCrossIcon: boolean;
}
interface State {
  seconds: string;
  closeModal: boolean;
}

class StickyTimer extends Component<Props, State> {
  state = {
    seconds: this.props.expirationTime,
    closeModal: this.props.modalIsOpen,
  };

  render() {
    const {
      text,
      testId,
      textBefore,
      expirationTime,
      modalIsOpen,
      closeTimeoutMS,
      contentLabel,
      onCLoseButtonCLick,
      children,
      showCrossIcon
    } = this.props;

    return (
      <>
        <Modal
          isOpen={modalIsOpen}
          closeTimeoutMS={closeTimeoutMS}
          style={customStyles}
          contentLabel={contentLabel ? contentLabel : "Example Modal"}
        >
          <div id={testId}>
            <div className={classes.StickyTimerTopDiv}>
              <img src={LocalImages.common.amSecure} alt="amSecure" />
              <div className={classes.StickyTimerExp}>
                {!!textBefore && <R_17_BLACK>{textBefore}</R_17_BLACK>}
                <B_17_BLACK className={classes.StickyTimerExpTime}>
                  {expirationTime}
                </B_17_BLACK>
                  {showCrossIcon &&
                    <div
                      style={{
                        padding: "1rem",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        onCLoseButtonCLick && onCLoseButtonCLick();
                      }}
                    >
                      <Icon icon="Fail" size={25} />
                    </div>
                  }
              </div>
            </div>
            <div className={classes.StickyTimerBottomDiv}>
              {children ? children : <R_15_BLACK>{text}</R_15_BLACK>}
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default StickyTimer;

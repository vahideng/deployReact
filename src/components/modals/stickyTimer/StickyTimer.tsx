import React, { Component } from "react";

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
    padding: "0px"
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "multiply"
  }
};
interface Props {
  testId?: string;
  modalIsOpen: boolean;
  expirationTime: number;
  expirationText?: string;
  text?: string;
  closeTimeoutMS ?: number;
  contentLabel ?: string;
  textBefore ?: string;
  onCLoseButtonCLick ?: ()=> void
}
interface State {
  seconds: number;
  closeModal: boolean;
}

class StickyTimer extends Component<Props, State> {
  state = {
    seconds: this.props.expirationTime,
    closeModal: this.props.modalIsOpen
  };

  // componentDidMount() {
  //   myTimer = setInterval(() => {
  //     this.setState({ seconds: this.state.seconds - 1 });
  //   }, 1000);
  // }

  // componentDidUpdate(prevProps: any, prevState: any) {
  //   if (this.state.seconds !== prevState.seconds && this.state.seconds === 0) {
  //     this.setState({ closeModal: false }, () => {
  //       clearInterval(myTimer);
  //     });
  //   }

  //   if (this.props.modalIsOpen !== prevProps.modalIsOpen) {
  //     this.setState({ closeModal: this.props.modalIsOpen });
  //   }
  // }

  render() {
    const { text, testId,textBefore, expirationTime, modalIsOpen, closeTimeoutMS, contentLabel, onCLoseButtonCLick } = this.props;


    return (
      <>
        <Modal
          isOpen={modalIsOpen}
          closeTimeoutMS={closeTimeoutMS}
          style={customStyles}
          contentLabel= {contentLabel ? contentLabel : "Example Modal"}
        >
          <div id={testId}>
            <div className={classes.StickyTimerTopDiv}>
              <img src={LocalImages.common.amSecure} alt="amSecure" />
              <div className={classes.StickyTimerExp}>
                <R_17_BLACK> {textBefore ? textBefore : "Transaction will expire in"}</R_17_BLACK>
                <B_17_BLACK className={classes.StickyTimerExpTime}>
                {expirationTime}
                </B_17_BLACK>
                <div
                  style={{
                    padding: "1rem",
                    cursor: "pointer"
                  }}
                  onClick={() => {
                    onCLoseButtonCLick()
                  }}
                >
                  <Icon icon="Fail" size={25} />
                </div>
              </div>
            </div>
            <div className={classes.StickyTimerBottomDiv}>
              <R_15_BLACK>{text}</R_15_BLACK>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default StickyTimer;

import React, { Component } from "react";

import Modal from "react-modal";

import Paragraphs from "../../assets/typography";
import classes from "./StickyTimer.module.css";
import LocalImages from "src/components/assets/images";
const { R_17_BLACK, B_17_BLACK, R_15_BLACK } = Paragraphs;

let myTimer: any;

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
  modalIsOpen: boolean;
  expirationTime: number;
  text?: string;
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

  componentDidMount() {
    myTimer = setInterval(() => {
      this.setState({ seconds: this.state.seconds - 1 });
    }, 1000);
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if (this.state.seconds !== prevState.seconds && this.state.seconds === 0) {
      this.setState({ closeModal: false }, () => {
        clearInterval(myTimer);
      });
    }

    if (this.props.modalIsOpen !== prevProps.modalIsOpen) {
      this.setState({ closeModal: this.props.modalIsOpen });
    }
  }

  render() {
    const { text } = this.props;
    const { seconds, closeModal } = this.state;
    return (
      <>
        <Modal
          isOpen={closeModal}
          closeTimeoutMS={1000}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>
            <div className={classes.StickyTimerTopDiv}>
              <img src={LocalImages.common.amSecure} alt="amSecure" />
              <div className={classes.StickyTimerExp}>
                <R_17_BLACK>Transaction will expire in</R_17_BLACK>
                <B_17_BLACK className={classes.StickyTimerExpTime}>
                  {seconds}
                </B_17_BLACK>
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

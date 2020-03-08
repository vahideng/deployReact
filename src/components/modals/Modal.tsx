import React from "react";
import Modal from "react-modal";

interface Props {}
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const AmModal: React.FC<Props> = () => {
  return (
    <div>
      <Modal
        isOpen={false}
        //   onAfterOpen={this.afterOpenModal}
        //   onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
};

export default AmModal;

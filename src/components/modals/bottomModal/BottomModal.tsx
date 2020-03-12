import React, { ReactNode, useState, useEffect } from "react";
import Modal from "react-modal";
interface Props {
  testId?: string;
  modalChildren?: ReactNode;
  modalIsOpen: boolean;
}

const customStyles = {
  content: {
    top: "auto",
    bottom: "0",
    // marginRight: "-50%",
    width: "100%",
    left: "0",
    padding: "0 0 1rem 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "multiply"
  }
};
const BottomModal: React.FC<Props> = ({
  modalIsOpen,
  modalChildren,
  testId
}) => {
  const [show, setShow] = useState(modalIsOpen);
  useEffect(() => {
    setShow(modalIsOpen);
  }, [modalIsOpen]);
  const handleCloseModal = () => {
    setShow(false);
  };
  return (
    <div id={testId}>
      <Modal
        isOpen={show}
        style={customStyles}
        onRequestClose={handleCloseModal}
      >
        <div>{modalChildren}</div>
      </Modal>
    </div>
  );
};

export default BottomModal;

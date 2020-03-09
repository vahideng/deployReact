import React, { ReactNode, useState, useEffect } from "react";
import Modal from "react-modal";

interface Props {
  modalChildren: ReactNode;
  modalIsOpen: boolean;
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

const AmModal: React.FC<Props> = ({ modalChildren, modalIsOpen }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(modalIsOpen);
  }, [modalIsOpen]);

  const handleCloseModal = () => {
    setShow(false);
  };
  return (
    <div>
      <Modal
        isOpen={show}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        {modalChildren}
      </Modal>
    </div>
  );
};

export default AmModal;

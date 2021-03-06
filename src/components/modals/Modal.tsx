import React, { ReactNode, useState, useEffect } from "react";
import Modal from "react-modal";

interface Props {
  testId?: string;
  modalChildren: ReactNode;
  modalIsOpen: boolean;
  onRequestClose?: () => void;
  zIndex?: number;
}
const customStyles = (props: React.PropsWithChildren<Props>) => ({
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "transparent",
    border: "none",
    width: "100%",
    zIndex: props.zIndex ? props.zIndex : 1000000000,
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "multiply",
    zIndex: props.zIndex ? props.zIndex : 1000000000,
  },
});

const AmModal: React.FC<Props> = (props) => {
  const { modalChildren, modalIsOpen, testId, onRequestClose } = props;
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
        style={customStyles(props)}
      >
        {modalChildren}
      </Modal>
    </div>
  );
};

export default AmModal;

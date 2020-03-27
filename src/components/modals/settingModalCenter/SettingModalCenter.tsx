import React, { ReactNode } from "react";
import AmModal from "../Modal";

interface Props {
  testId?: string;
  modalIsOpen: boolean;
  modalChildren?: ReactNode;
  onRequestClose?: ()=> void;
}

const SettingModalCenter = (props: Props) => {
  const { modalChildren, testId, modalIsOpen, onRequestClose } = props;
  return (
    <div id={testId}>
      <AmModal
      onRequestClose ={onRequestClose}
        modalChildren={modalChildren}
        testId={testId}
        modalIsOpen={modalIsOpen}
      />
    </div>
  );
};

export default SettingModalCenter;

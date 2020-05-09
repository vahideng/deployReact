import React, { ReactNode } from "react";
import AmModal from "../Modal";

interface Props {
  testId?: string;
  modalIsOpen: boolean;
  modalChildren?: ReactNode;
  onRequestClose?: () => void;
  zIndex?: number;
}

const SettingModalCenter = (props: Props) => {
  const { modalChildren, testId, modalIsOpen, onRequestClose, zIndex } = props;
  return (
    <div id={testId}>
      <AmModal
        onRequestClose={onRequestClose}
        modalChildren={modalChildren}
        testId={testId}
        modalIsOpen={modalIsOpen}
        zIndex={zIndex}
      />
    </div>
  );
};

export default SettingModalCenter;

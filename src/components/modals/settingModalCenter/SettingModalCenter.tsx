import React, { ReactNode } from "react";
import AmModal from "../Modal";

interface Props {
  testId?: string;
  modalIsOpen: boolean;
  modalChildren?: ReactNode;
}

const SettingModalCenter = (props: Props) => {
  const { modalChildren, testId, modalIsOpen } = props;
  return (
    <div id={testId}>
      <AmModal
        modalChildren={modalChildren}
        testId={testId}
        modalIsOpen={modalIsOpen}
      />
    </div>
  );
};

export default SettingModalCenter;

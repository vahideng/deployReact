import React, { ReactNode } from "react";
import Paragraphs from "../assets/typography";
import StatusFormContainer from "../wrappers/statusFormContainer/StatusFormContainer";
import styled, { CSSProperties } from "styled-components";
import ConfirmNotes from "../confirmNotes/ConfirmNotes";
import PrimaryButton from "../buttons/primaryButton/PrimaryButton";
const { R_15_BLACK } = Paragraphs;

interface TransactionWithNoteProps {
  testId: string;
  formContainerchildren: ReactNode;
  responsive?: boolean;
  confirmNotesBody: {
    content: string;
    style: {};
  }[];
  confirmNotesTitle?: {
    content: string;
    style: {};
  };
  statusIcon?: {
    testId?: string;
    iconColor: {
      top: string;
      bottom: string;
    };
    outerIconColor: string;
    icon?: { name?: string; color?: string; size?: number };
    image?: { src: string; alt?: string };
  };

  confirmNotesdisabled?: boolean;
  confirmNoteswidth?: string;
  Btntitle?: string;
  BtntitleColor?: string;
  BtntitleStyle?: CSSProperties;
  buttonColor?: { top: string; bottom: string };
  Btnheight?: number | string;
  Btnwidth?: number | string;
  onButtonClick: () => void;
  Btnsmall?: boolean;
  Btnicon?: { name: string; color: string; size?: number };
  shadowed?: boolean;
  statusText?: string;
  statusNumber?: string
}

const CenteredDiv = styled.div`
  display: flex;
  flexdirection: row;
  justify-content: center;
  padding: 2rem 0;
`;

const CenteredCol = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TransactionWithNote: React.FC<TransactionWithNoteProps> = ({
  testId,
  formContainerchildren,
  confirmNotesBody,
  statusIcon,
  confirmNotesTitle,
  confirmNoteswidth,
  Btntitle,
  Btnwidth,
  onButtonClick,
  responsive,
  statusText,
  statusNumber
}) => {
  return (
    <div id={testId}>
      <StatusFormContainer
        responsive={responsive}
        statusIcon={statusIcon}
        children={formContainerchildren}
      />

      <CenteredDiv style={{ flexDirection: "column", alignItems: "center" }}>
        <div style={{ maxWidth: "36.3rem" }}>
          <ConfirmNotes
            testId="sprint_4_confirm_notes"
            title={confirmNotesTitle}
            width={confirmNoteswidth}
            responsive={responsive}
            body={confirmNotesBody}
          />
        </div>

        <CenteredCol>
          <R_15_BLACK style={{ marginBottom: "1.5rem" }}>
            {statusText} <strong>{statusNumber}</strong>
          </R_15_BLACK>
          <PrimaryButton
            responsive={responsive}
            title={Btntitle}
            width={Btnwidth || "25rem"}
            onButtonClick={onButtonClick}
          />
        </CenteredCol>
      </CenteredDiv>
    </div>
  );
};

export default TransactionWithNote;

TransactionWithNote.defaultProps = {
  responsive: false,
};

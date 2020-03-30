import React from "react";

import Paragraphs from "../../assets/typography";
import styled from "styled-components";
const { B_24_BLACK, R_15_BLACK } = Paragraphs;
interface Props {
  backgroundColor?: string;
  subtitle?: string;
  testId?: string;
  title: string;
}

const CenterMessage: React.FC<Props> = ({
  backgroundColor,
  subtitle,
  testId,
  title
}) => {
  const defaultBackgroundColor =
    backgroundColor !== undefined ? backgroundColor : "#EEEEEE";
  const StyledDiv = styled.div`
    background-color: ${defaultBackgroundColor};
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  `;
  return (
    <StyledDiv id={testId}>
      <B_24_BLACK style={{ paddingBottom: "0.5rem" }}>{title}</B_24_BLACK>
      <R_15_BLACK>{subtitle}</R_15_BLACK>
    </StyledDiv>
  );
};

export default CenterMessage;

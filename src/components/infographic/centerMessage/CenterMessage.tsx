import React from "react";

import Paragraphs from "../../assets/typography";
import styled, { CSSProperties } from "styled-components";
const { B_24_BLACK, R_15_BLACK } = Paragraphs;
interface Props {
  backgroundColor?: string;
  subtitle?: string;
  testId?: string;
  title: string
  show ?: boolean ;
  style ?: CSSProperties 
}

const CenterMessage: React.FC<Props> = ({
  backgroundColor,
  subtitle,
  testId,
  title,
  show,
  style
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

  if(show){
    return (
      <StyledDiv id={testId} style={style}>
        <B_24_BLACK>{title}</B_24_BLACK>
        <R_15_BLACK>{subtitle}</R_15_BLACK>
      </StyledDiv>
    );
  }else return null
  
};

export default CenterMessage;

import React, { CSSProperties } from "react";
import { Row } from "react-bootstrap";

import classes from "./PortfolioListContent.module.css";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";

import Paragraphs from "../assets/typography";
const { R_13_GREY969, B_13_BLACK, B_15_BLACK } = Paragraphs;
interface Content {
  leftLabel: string;
  leftLabelStyle?: CSSProperties;
  middleLabel?: string;
  middleLabelStyle?: CSSProperties;
  rightLabel?: any;
  rightLabelStyle?: CSSProperties;
}

interface Props {
  buttonText?: string;
  data: Content[];
  borderColor: string;
  onClickButton?: () => void;
  testId?: string;
  containerStyle ?: CSSProperties;
  buttonStyle ?: CSSProperties
  buttonTextStyle ?:CSSProperties; 
}

const PortfolioListContent: React.FC<Props> = ({
  buttonText,
  data,
  borderColor,
  onClickButton,
  testId,
  containerStyle,
  buttonStyle,
  buttonTextStyle
}) => {
  const StyledDiv = styled.div`
    background-color: #f1f1f1;
    border-left: 0.375rem ${borderColor} solid;
  `;

  return (
    <StyledDiv style={containerStyle ?containerStyle : null } id={`${testId}`}>
      {data.map((item: Content, index: number) => (
        <Row className={classes.Item} id={`${testId}-${index}`} key={index}>
          <R_13_GREY969 style={item.leftLabelStyle}>
            {item.leftLabel}
          </R_13_GREY969>
          <B_13_BLACK style={item.middleLabelStyle}>
            {item.middleLabel}
          </B_13_BLACK>
          <B_13_BLACK style={item.rightLabelStyle}>
            {item.rightLabel}
          </B_13_BLACK>
        </Row>
      ))}
      {buttonText === undefined || onClickButton === undefined ? null : (
        <div className={classes.ButtonContainer}>
          <button className={classes.Button} style = {buttonStyle ? buttonStyle : null}  onClick={onClickButton}>
            <B_15_BLACK style={buttonTextStyle? buttonTextStyle :null}> {buttonText}</B_15_BLACK>
          </button>
        </div>
      )}
    </StyledDiv>
  );
};
export default PortfolioListContent;

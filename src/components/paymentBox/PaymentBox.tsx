import React, { CSSProperties, ReactNode } from "react";
import { Col, Row } from "react-bootstrap";
import Paragraphs from "../assets/typography";
import classes from "./PaymentBox.module.css";

const { B_14_WHITE, B_15_ORANGE_463 } = Paragraphs;

interface HeaderProps {
  onClick?: () => void;
  style?: CSSProperties;
  title: string;
}

interface Props {
  children?: ReactNode;
  containerStyle?: CSSProperties;
  leftHeader?: HeaderProps;
  rightHeader?: HeaderProps;
  testId?: string;
}

const PaymentBox: React.FC<Props> = ({
  children,
  leftHeader,
  rightHeader,
  containerStyle,
  testId
}: Props) => {
  const leftHeaderPointer: CSSProperties =
    leftHeader !== undefined && leftHeader.onClick !== undefined
      ? { cursor: "pointer" }
      : {};

  const rightHeaderPointer: CSSProperties =
    rightHeader !== undefined && rightHeader.onClick !== undefined
      ? { cursor: "pointer" }
      : {};

  return (
    <Col id={`${testId}`} className={classes.Container} style={containerStyle}>
      <Row className={classes.Header}>
        {leftHeader === undefined ? null : (
          <B_14_WHITE
            onClick={leftHeader.onClick}
            style={{ ...leftHeaderPointer, ...leftHeader.style }}
          >
            {leftHeader.title}
          </B_14_WHITE>
        )}
        {rightHeader === undefined ? null : (
          <B_15_ORANGE_463
            onClick={rightHeader.onClick}
            style={{ ...rightHeaderPointer, ...rightHeader.style }}
          >
            {rightHeader.title}
          </B_15_ORANGE_463>
        )}
      </Row>
      {children}
    </Col>
  );
};

export default PaymentBox;

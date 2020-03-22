import React, { ReactNode, CSSProperties } from "react";
import Paragraphs from "../../assets/typography";
import classes from "./TextWithDetails.module.css";
import { Row, Col } from "react-bootstrap";

const { R_11_BLACK, B_13_BLACK } = Paragraphs;
interface Props {
  content?: string[];
  contentStyle?: CSSProperties;
  left?: ReactNode;
  testId?: string;
  title: string;
  titleStyle?: CSSProperties;
}

const TextWithDetails: React.FC<Props> = ({
  content,
  contentStyle,
  testId,
  left,
  title,
  titleStyle
}) => {
  return (
    <Row className={classes.Row} id={testId}>
      <div>{left !== undefined ? left : null}</div>
      <Col className={classes.Col}>
        <B_13_BLACK style={titleStyle}>{title}</B_13_BLACK>
        {content === undefined
          ? null
          : content.map((subtitle: string, index: number) => (
              <R_11_BLACK key={index} style={contentStyle}>
                {subtitle}
              </R_11_BLACK>
            ))}
      </Col>
    </Row>
  );
};

export default TextWithDetails;

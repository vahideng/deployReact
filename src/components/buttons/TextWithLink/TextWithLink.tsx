import React, { CSSProperties } from "react";
import Paragraphs from "../../assets/typography";
import classes from "./TextWithLink.module.css";

const { B_13_ORANGE_463, R_13_BLACK } = Paragraphs;
interface Props {
  testId?: string;
  label: string;
  labelStyle?: CSSProperties;
  textWithLink: string;
  textWithLinkStyle?: CSSProperties;
  onClick: (testId: string) => void;
}

const TextWithLink: React.FC<Props> = props => {
  const {
    label,
    labelStyle,
    textWithLink,
    textWithLinkStyle,
    onClick,
    testId
  } = props;

  return (
    <div>
      <R_13_BLACK
        className={classes.label}
        style={labelStyle ? labelStyle : { marginRight: 4 }}
      >
        {label}
      </R_13_BLACK>
      <B_13_ORANGE_463
        className={classes.textButton}
        id={testId}
        onClick={() => {
          onClick(testId!);
        }}
        style={textWithLinkStyle ? textWithLinkStyle : {}}
      >
        {textWithLink}
      </B_13_ORANGE_463>
    </div>
  );
};

export default TextWithLink;

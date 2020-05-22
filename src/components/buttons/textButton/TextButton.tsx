import React, { CSSProperties } from "react";
import Paragraphs from "../../assets/typography";
import classes from "./TextButton.module.css";

const { B_13_ORANGE_463 } = Paragraphs;
interface Props {
  testId?: string;
  buttonText: string;
  buttonStyles?: CSSProperties;
  onTextClick: (testId: string) => void;
}

const TextButton: React.FC<Props> = props => {
  const { buttonText, buttonStyles, onTextClick, testId } = props;

  return (
    <div style= {{width:"100%"}}>
      <B_13_ORANGE_463
        className={classes.textButton}
        id={testId}
        onClick={() => {
          onTextClick(testId!);
        }}
        style={!!buttonStyles ? buttonStyles : {}}
      >
        {buttonText}
      </B_13_ORANGE_463>
    </div>
  );
};

export default TextButton;

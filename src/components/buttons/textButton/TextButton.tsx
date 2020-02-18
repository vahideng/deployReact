import React from "react";
import Paragraphs from "../../assets/typography";
import "./TextButton.scss";

const { B_13_ORANGE_463 } = Paragraphs;
interface Props {
  testId?: string;
  buttonText: string;
  buttonStyles?: {};
  onTextClick: (testId: string) => void;
}

const TextButton: React.FC<Props> = props => {
  const { buttonText, buttonStyles, onTextClick, testId } = props;

  return (
    <div>
      <B_13_ORANGE_463
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

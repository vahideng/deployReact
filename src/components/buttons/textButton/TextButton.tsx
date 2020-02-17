import React from "react";
import Paragraphs from "../../assets/typography";
import "./TextButton.scss";

const { B_13_ORANGE_463 } = Paragraphs;
interface Props {
  buttonText: string;
  buttonStyles?: {};
  onTextClick: () => void;
}

const TextButton: React.FC<Props> = props => {
  const { buttonText, buttonStyles, onTextClick } = props;

  return (
    <>
      <B_13_ORANGE_463
        onClick={onTextClick}
        style={!!buttonStyles ? buttonStyles : {}}
      >
        {buttonText}
      </B_13_ORANGE_463>
    </>
  );
};

export default TextButton;

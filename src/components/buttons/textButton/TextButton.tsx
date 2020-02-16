import React from "react";
import Paragraphs from "../../assets/typography";
import "./TextButton.scss";

const { B_13_ORANGE_463 } = Paragraphs;
interface Props {
  buttonText: string;
}

const TextButton: React.FC<Props> = props => {
  const { buttonText } = props;

  return (
    <>
      <B_13_ORANGE_463>{buttonText}</B_13_ORANGE_463>
    </>
  );
};

export default TextButton;

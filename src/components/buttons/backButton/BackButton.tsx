import React from "react";
import Paragraphs from "../../assets/typography";
import Icon from "src/components/assets/icons/icon";

const { B_16_BLACK } = Paragraphs;

interface Props {
  testId?: string;
  buttonText: string;
  onButtonClick: () => void;
}

const BackButton: React.FC<Props> = ({ buttonText, onButtonClick, testId }) => {
  return (
    <div
      id={testId}
      className="container row"
      onClick={onButtonClick}
      style={{ cursor: "pointer" }}
    >
      <Icon
        icon="left"
        color="#000000"
        size={25}
        style={{ marginRight: -3, marginLeft: -7 }}
      />
      <B_16_BLACK>{buttonText}</B_16_BLACK>
    </div>
  );
};

export default BackButton;

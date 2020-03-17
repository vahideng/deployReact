import React from "react";
import StatusIcon from "src/components/assets/icons/statusIcon/StatusIcon";
import Paragraphs from "../../assets/typography";
import classes from "./Prompt.module.css";
const { B_17_BLACK } = Paragraphs;
interface Props {
  testId?: string;
  text: string;
  iconColor: any;
  icon: any;
  image?: any;
}

const Prompt: React.FC<Props> = ({ iconColor, image, testId, icon, text }) => {
  return (
    <div className={classes.promptRow} id={testId}>
      <StatusIcon
        iconColor={{ top: iconColor.top, bottom: iconColor.bottom }}
        icon={icon}
        image={image}
      />
      <B_17_BLACK className={classes.promptText}>{text}</B_17_BLACK>
    </div>
  );
};

export default Prompt;

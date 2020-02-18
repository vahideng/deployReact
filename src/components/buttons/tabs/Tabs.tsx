import React from "react";
import Paragraphs from "../../assets/typography";
import classes from "./Tabs.module.css";
const { B_17_BLACK } = Paragraphs;
interface Props {
  testId?: string;
  titles: string[];
  selected: number;
}

const Tabs: React.FC<Props> = props => {
  const { titles, testId } = props;
  return (
    <div className={classes.row}>
      {titles.map((title, index) => {
        return (
          <div className={classes.buttons} key={index} id={`${testId}`}>
            <B_17_BLACK id={`${testId}-1`}>{title}</B_17_BLACK>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;

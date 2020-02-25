import React from "react";
import classes from "./DetailList.module.css";
import Paragraphs from "../../assets/typography";
const { B_13_GREY393, R_15_BLACK, B_15_BLACK } = Paragraphs;
interface Props {
  title?: string;
  list?: {
    leftText: string;
    rightText: string;
  }[];
}

const DetailList: React.FC<Props> = ({ list, title }) => {
  return (
    <div className={classes.DetailListMainDiv}>
      {!!title && (
        <div className={classes.DetailListTitle}>
          <B_13_GREY393 id={classes.title}>{title}</B_13_GREY393>
        </div>
      )}

      {!!list &&
        list.map((item, index) => {
          return (
            <div key={index} className={classes.DetailListRows}>
              <R_15_BLACK>{item.leftText}</R_15_BLACK>
              <B_15_BLACK>{item.rightText}</B_15_BLACK>
            </div>
          );
        })}
    </div>
  );
};

export default DetailList;

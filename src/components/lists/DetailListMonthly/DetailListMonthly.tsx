import React from "react";
import classes from "./DetailListMonthly.module.css";
import Paragraphs from "../../assets/typography";
import Icon from "src/components/assets/icons/icon";
const {
  R_15_BLACK,
  B_15_BLACK,

  B_16_BLACK
} = Paragraphs;
interface Props {
  selected?: number;
  list?: {
    date: string;
    content: { leftText: string; rightText: string }[];
  }[];
}

const DetailListMonthly: React.FC<Props> = ({ list, selected }) => {
  return (
    <div className={classes.DetailListMonthDiv}>
      {!!list &&
        list.map((item, index) => {
          return (
            <div key={index}>
              {selected === index && (
                <div className={classes.DetailListMonthTitle} key={index}>
                  <div onClick={() => alert("clicked")}>
                    <Icon icon="left" size={26} />
                  </div>
                  <B_16_BLACK id={classes.title}>{item.date}</B_16_BLACK>
                  <div onClick={() => alert("clicked")}>
                    <Icon icon="Right1" size={26} />
                  </div>
                </div>
              )}
            </div>
          );
        })}

      {!!list &&
        list.map((item, index) => {
          return (
            index === selected && (
              <div key={index}>
                {item.content.map((list, index) => {
                  return (
                    <div key={index} className={classes.DetailListRows}>
                      <R_15_BLACK>{list.leftText}</R_15_BLACK>
                      <B_15_BLACK>{list.rightText}</B_15_BLACK>
                    </div>
                  );
                })}
              </div>
            )
          );
        })}
    </div>
  );
};

export default DetailListMonthly;

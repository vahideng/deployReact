import React from "react";
import classes from "./TransactionLimitList.module.css";
import Paragraphs from "../../assets/typography";
import Icon from "src/components/assets/icons/icon";

const { R_15_BLACK } = Paragraphs;

interface ITransactionLimitList {
  label: string;
  onClick: () => void;
}

interface Props {
  list: ITransactionLimitList[];
  testId?: string;
}

const TransactionLimitList: React.FC<Props> = ({ list, testId }: Props) => {
  return (
    <div className={classes.ListContainer} id={`${testId}`}>
      {list &&
        list.map((item, index) => (
          <div
            className={classes.ItemContainer}
            id={`${testId}-${index}`}
            key={index}
            onClick={item.onClick}
          >
            <R_15_BLACK>{item.label}</R_15_BLACK>
            <Icon icon="Right1" color="#000" size={28} />
          </div>
        ))}
    </div>
  );
};

export default TransactionLimitList;

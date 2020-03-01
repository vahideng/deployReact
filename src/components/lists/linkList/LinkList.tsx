import React, { ReactNode } from "react";
import classes from "./LinkList.module.css";
import Icon from "src/components/assets/icons/icon";
import Paragraphs from "../../assets/typography";
import { Link } from "react-router-dom";

const { SB_15_BLACK } = Paragraphs;
interface Props {
  testId?: string;

  list?: {
    label: string;
    link: string;
    rightItem?: ReactNode;
  }[];
}

const LinkList: React.FC<Props> = ({ testId, list }) => {
  return (
    <div id={testId}>
      {!!list &&
        list.map((item, index) => {
          return (
            <Link
              to={item.link}
              style={{
                textDecorationLine: "none"
              }}
            >
              <div key={index} className={classes.LinkListItemsDiv}>
                <SB_15_BLACK>{item.label}</SB_15_BLACK>
                <div>
                  {!!item.rightItem ? (
                    item.rightItem
                  ) : (
                    <div key={index} className={classes.LinkListIcon}>
                      <Icon icon="Right1" color="#000000" size={27} />
                    </div>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default LinkList;

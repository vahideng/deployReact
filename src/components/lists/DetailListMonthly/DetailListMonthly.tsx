import React, { useState } from "react";
import classes from "./DetailListMonthly.module.css";
import Paragraphs from "../../assets/typography";
import Icon from "src/components/assets/icons/icon";
import Tooltip from "src/components/tooltip/Tooltip";
const { R_15_BLACK, B_15_BLACK, B_16_BLACK } = Paragraphs;
interface Props {
  testId?: string;
  selected?: number;
  tipChildren?: any;
  list?: {
    date: string;
    content: { leftText: string; rightText: string; tipChildren?: any }[];
  }[];
}

const DetailListMonthly: React.FC<Props> = ({
  list,
  selected,
  tipChildren,
  testId
}) => {
  const [click, setClick] = useState(!!selected ? selected : 0);
  return (
    <div className={classes.DetailListMonthDiv} id={testId}>
      {!!list &&
        list.map((item, index) => {
          return (
            <div key={index} id={`${testId}-${index}`}>
              {index === click && (
                <div className={classes.DetailListMonthTitle} key={index}>
                  <div
                    onClick={() => {
                      setClick(click - 1);
                    }}
                    style={
                      index <= 0 ? { opacity: 0, pointerEvents: "none" } : {}
                    }
                  >
                    <Icon icon="left" size={26} />
                  </div>
                  <B_16_BLACK id={classes.title}>{item.date}</B_16_BLACK>
                  <div
                    style={
                      index === list.length - 1
                        ? { opacity: 0, pointerEvents: "none" }
                        : {}
                    }
                    onClick={() => {
                      setClick(click + 1);
                    }}
                  >
                    <Icon icon="Right1" size={26} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      <div className={classes.DetailListMonthTopTool}>
        {!!tipChildren && <Tooltip tipChildren={tipChildren} />}
      </div>

      {!!list &&
        list.map((item, index) => {
          return (
            index === click && (
              <div key={index} id={`${testId}-0-${index}`}>
                {item.content.map((contentList, index) => {
                  return (
                    <div
                      key={index}
                      className={classes.DetailListRows}
                      id={`${testId}-1-${index}`}
                    >
                      <R_15_BLACK>{contentList.leftText}</R_15_BLACK>
                      <div className={classes.DetailListMonthTool}>
                        <B_15_BLACK>{contentList.rightText}</B_15_BLACK>
                        {!!contentList.tipChildren && (
                          <div
                            className={classes.DetailListToolIcon}
                            id={`${testId}-2-${index}`}
                          >
                            <Tooltip
                              tipChildren={contentList.tipChildren}
                              testId={testId}
                            />
                          </div>
                        )}
                      </div>
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

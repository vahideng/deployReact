import React, { CSSProperties }  from "react";
import classes from "./TransactionLimitList.module.css";
import Paragraphs from "../../assets/typography";
import Icon from "src/components/assets/icons/icon";

import { Notify } from "../../assets/common/notification";
import PrimaryButton from "src/components/buttons/primaryButton/PrimaryButton";
const { B_15_BLACK, R_12_BLACK } = Paragraphs;

interface ITransactionLimitList {
  label: string;
  subDetail?: string;
  onClick: (item: ITransactionLimitList, index: number) => void;
  icon?: { name: string; size: number; color: string };
  rightLabelColor?: string;
  rightLabel?: string;
  notify?: boolean;
  notifyStyle ?: CSSProperties;
  cardImg?: string;
  cardImgStyle?: {
    height: number;
    width: number;
  };
  hidden?: boolean;
  onHiddenButtonClick?: () => void;
  hiddenBtnLabel?: string;
}

interface Props {
  list: ITransactionLimitList[];
  testId?: string;
}

const TransactionLimitList: React.FC<Props> = ({ list, testId }: Props) => {
  return (
    <div className={classes.ListContainer} id={`${testId}`}>
      {list &&
        list.map((item, index) =>
          item.hidden ? (
            <div
              className={classes.ItemContainer}
              id={`${testId}-${index}`}
              key={index}
              onClick={() => item.onClick(item, index)}
            >
              <div style={{ opacity: "0.5" }}>
                <div className={classes.ImageContainer}>
                  {!!item.cardImg && (
                    <img
                      src={item.cardImg}
                      alt="CardImage"
                      style={item.cardImgStyle}
                      className={classes.TransactionImg}
                    />
                  )}

                  <div className={classes.TextContainer}>
                    <B_15_BLACK>{item.label}</B_15_BLACK>
                    {item.notify && 
                    <Notify   className={classes.notify} style={item.notifyStyle? item.notifyStyle: null }/>}
                    {item.subDetail && (
                      <R_12_BLACK style={{ marginTop: 5 }}>
                        {item.subDetail}
                      </R_12_BLACK>
                    )}
                  </div>
                </div>
              </div>

              <PrimaryButton
                testId={`${testId}-1`}
                title={item.hiddenBtnLabel ? item.hiddenBtnLabel : "Show"}
                titleStyle={{
                  color: "#000000",
                  fontSize: "11px",
                  margin: "2px 0 0 3px",
                }}
                onButtonClick={item.onHiddenButtonClick}
                icon={{ name: "field-open-eye", size: 15, color: "#000000" }}
                buttonColor={{ top: "#F6F6F3", bottom: "#EAE9E3" }}
                width={"7.4rem"}
                height="2rem"
              />
            </div>
          ) : (
            <div
              className={classes.ItemContainer}
              id={`${testId}-${index}`}
              key={index}
              onClick={() => item.onClick(item, index)}
            >
              <div className={classes.ImageContainer}>
                {!!item.cardImg && (
                  <img
                    src={item.cardImg}
                    alt="CardImage"
                    style={item.cardImgStyle}
                    className={classes.TransactionImg}
                  />
                )}

                <div className={classes.TextContainer}>
                  <B_15_BLACK>
                    {item.label}
                    {item.notify && <Notify className={classes.notify} />}
                  </B_15_BLACK>

                  {item.subDetail && (
                    <R_12_BLACK style={{ marginTop: 5 }}>
                      {item.subDetail}
                    </R_12_BLACK>
                  )}
                </div>
              </div>
              <div className={classes.rightLabelDiv}>
                {item.rightLabel && (
                  <B_15_BLACK style={{ color: item.rightLabelColor }}>
                    {item.rightLabel}
                  </B_15_BLACK>
                )}

                {<Icon icon="Right1" color="#000" size={28} />}
              </div>
            </div>
          )
        )}
    </div>
  );
};

export default TransactionLimitList;

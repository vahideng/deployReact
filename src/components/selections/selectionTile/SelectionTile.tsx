import React, { ReactNode, CSSProperties } from "react";
import classes from "./SelectionTile.module.css";
import Paragraphs from "../../assets/typography";
import Profile from "src/components/headers/profile/Profile";

const { B_16_BLACK, R_14_BLACK, B_15_BLACK } = Paragraphs;
interface Props {
  rowStyle?: CSSProperties;
  tileStyle?: CSSProperties;
  onTileClick: (item: any, index: number) => void;
  centered?: boolean;
  testId?: string;
  selected?: number;
  list: {
    centeredText?: string;
    centeredChild?: ReactNode;
    avatar?: {
      name: string;
      src?: string;
      initials?: string;
      initialsBg?: string;
    };
    accountTitle?: string;
    accountNumber?: string;
    amount?: string;
    children?: ReactNode;
  }[];
}

const SelectionTile: React.FC<Props> = ({
  list,
  selected,
  onTileClick,
  testId,
  centered,
  rowStyle,
  tileStyle,
}) => {
  function BorderClass(index: number) {
    if (selected === index) {
      return classes.SelectedBorder;
    } else {
      return null;
    }
  }
  return !centered ? (
    <div className={classes.SelectionTileRow} id={testId} style={rowStyle}>
      {!!list &&
        list.map((item, index) => {
          return (
            <div
              id={`${testId}-${index}`}
              onClick={() => onTileClick(item, index)}
              className={`${classes.SelectionTileWrapper} ${BorderClass(
                index
              )}`}
              key={index}
              style={tileStyle}
            >
              <div
                className={classes.SelectionTileSelector}
                style={{
                  justifyContent: item.children ? "center" : "flex-start",
                }}
              >
                {item.children ? (
                  <>{item.children}</>
                ) : !!item.avatar ? (
                  <div>
                    <Profile
                      initials={item.avatar.initials}
                      initialsBg={item.avatar.initialsBg}
                      greeting={item.avatar.name}
                      alt="AVATAR"
                      src={item.avatar.src}
                    />
                  </div>
                ) : (
                  <div id={`${testId}-0${index}`}>
                    {!!item.accountTitle && (
                      <div className={classes.SelectionTileTDiv}>
                        <B_16_BLACK
                        x-ms-format-detection="none" 
                        className={classes.SelectionTileTitle}>
                          {item.accountTitle}
                        </B_16_BLACK>
                      </div>
                    )}
                    {!!item.accountNumber && (
                      <R_14_BLACK   
                       x-ms-format-detection="none" 
                       >{item.accountNumber}</R_14_BLACK>
                    )}
                    {!!item.amount && (
                      <B_16_BLACK className={classes.SelectionTAmount}
                      x-ms-format-detection="none" 
                      >
                        {item.amount}
                      </B_16_BLACK>
                    )}
                  </div>
                )}
              </div>
              <div
                className={
                  selected === index
                    ? `${classes.borderBottomSelected} ${classes.borderBottom}`
                    : classes.borderBottom
                }
              ></div>
            </div>
          );
        })}
    </div>
  ) : (
    <div className={classes.SelectionTileRow} id={testId} style={rowStyle}>
      {!!list &&
        list.map((item, index) => {
          return (
            <div
              id={`${testId}-${index}`}
              onClick={() => onTileClick(item, index)}
              className={`${classes.CenteredDiv} ${BorderClass(index)}`}
              key={index}
              style={tileStyle}
            >
              <div className={classes.CenteredSelector}>
                {item.centeredText && (
                  <B_15_BLACK
                    style={
                      selected !== index
                        ? {
                            fontWeight: "normal",
                          }
                        : {}
                    }
                  >
                    {item.centeredText}
                  </B_15_BLACK>
                )}
                {!!item.centeredChild && item.centeredChild}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SelectionTile;

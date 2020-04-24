import React, { ReactNode } from "react";
import classes from "./SelectionTile.module.css";
import Paragraphs from "../../assets/typography";
import Profile from "src/components/headers/profile/Profile";
const { B_16_BLACK, R_14_BLACK } = Paragraphs;
interface Props {
  onTileClick: (item: any, index: number) => void;
  testId?: string;
  selected?: number;
  list: {
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
  testId
}) => {
  return (
    <div className={classes.SelectionTileRow} id={testId}>
      {!!list &&
        list.map((item, index) => {
          return (
            <div
              id={`${testId}-${index}`}
              onClick={() => onTileClick(item, index)}
              className={classes.SelectionTileWrapper}
              key={index}
              style={
                selected === index
                  ? {
                      borderBottomColor: "#ff2626",
                      justifyContent: item.children ? "center" : "flex-start"
                    }
                  : { justifyContent: item.children ? "center" : "flex-start" }
              }
            >
              <div className={classes.SelectionTileSelector}>
                {item.children ? (
                  <div className={classes.SelectionTileChild}>
                    {item.children}
                  </div>
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
            </div>
          );
        })}
    </div>
  );
};

export default SelectionTile;

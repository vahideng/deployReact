import React from "react";
import classes from "./SelectionTile.module.css";
import Paragraphs from "../../assets/typography";
import Profile from "src/components/headers/profile/Profile";
const { B_16_BLACK, R_14_BLACK } = Paragraphs;
interface Props {
  onTileClick: (item: any, index: number) => void;

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
  }[];
}

const SelectionTile: React.FC<Props> = ({ list, selected, onTileClick }) => {
  return (
    <div className={classes.SelectionTileRow}>
      {!!list &&
        list.map((item, index) => {
          return (
            <div
              onClick={() => onTileClick(item, index)}
              className={classes.SelectionTileWrapper}
              key={index}
              style={selected === index ? { borderBottomColor: "#ff2626" } : {}}
            >
              {!!item.avatar ? (
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
                <div>
                  {!!item.accountTitle && (
                    <div className={classes.SelectionTileTDiv}>
                      <B_16_BLACK className={classes.SelectionTileTitle}>
                        {item.accountTitle}
                      </B_16_BLACK>
                    </div>
                  )}
                  {!!item.accountNumber && (
                    <R_14_BLACK>{item.accountNumber}</R_14_BLACK>
                  )}
                  {!!item.amount && (
                    <B_16_BLACK className={classes.SelectionTAmount}>
                      {item.amount}
                    </B_16_BLACK>
                  )}
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default SelectionTile;

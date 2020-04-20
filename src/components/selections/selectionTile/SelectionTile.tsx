import React, { ReactNode, CSSProperties } from "react";
import classes from "./SelectionTile.module.css";
import Paragraphs from "../../assets/typography";
import Profile from "src/components/headers/profile/Profile";
import Icon from "src/components/assets/icons/icon";

const { B_16_BLACK, R_14_BLACK, B_15_BLACK } = Paragraphs;
interface Props {
  responsive?: boolean;
  rowStyle?: CSSProperties;
  onTileClick: (item: any, index: number) => void;
  centered?: boolean;
  testId?: string;
  selected?: number;
  list: {
    icon?: { name: string; color: string; size: number };
    image?: any;
    imageStyle?: CSSProperties;
    iconLabel?: string;
    centeredText?: string;
    centeredChild?: ReactNode;
    disable ?: boolean;
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
  responsive
}) => {
  let selectionTileRowCls = classes.SelectionTileRow;
  let selectionTileWrapperCls = classes.SelectionTileWrapper;
  if (responsive) {
    selectionTileWrapperCls = `${selectionTileWrapperCls} ${classes.SelectionTileWrapperResponsive}`;
    selectionTileRowCls = `${selectionTileRowCls} ${classes.SelectionTileRowResponsive}`;
  }
 

  
  return !centered ? (
    <div  className={selectionTileRowCls} id={testId} style={rowStyle}>
      {!!list &&
        list.map((item, index) => {

          
         let disable = null
          if(item.disable){
            disable = `${classes.Disable}`
          }
          return (
            <div
              id={`${testId}-${index}`}
              onClick={!disable ? () => onTileClick(item, index) : null}
              className={`${selectionTileWrapperCls} ${disable}` }
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
              <div
                className={classes.SelectionTileSelector}
                style={{
                  justifyContent: item.iconLabel ? "center" : "flex-start"
                }}
              >
                {item.iconLabel ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <B_15_BLACK
                      className={classes.SelectionTileTitle}
                      style={
                        selected !== index
                          ? {
                              fontWeight: "normal"
                            }
                          : {}
                      }
                    >
                      {item.iconLabel}
                    </B_15_BLACK>
                    {item.image && (
                      <div style={item.imageStyle}>
                        <img src={item.image} />
                      </div>
                    )}
                    {item.icon && (
                      <div style={{ marginLeft: 8 }}>
                        <Icon
                          icon={item.icon.name}
                          size={item.icon.size}
                          color={item.icon.color}
                        />
                      </div>
                    )}
                  </div>
                ) : item.children ? (
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
            </div>
          );
        })}
    </div>
  ) : (
    <div className={classes.SelectionTileRow} id={testId}>
      {!!list &&
        list.map((item, index) => {
          return (
            <div
              id={`${testId}-${index}`}
              onClick={() => onTileClick(item, index)}
              className={classes.CenteredDiv}
              key={index}
              style={
                selected === index
                  ? {
                      borderBottomColor: "#ff2626"
                    }
                  : {}
              }
            >
              <div className={classes.CenteredSelector}>
                {item.centeredText && (
                  <B_15_BLACK
                    style={
                      selected !== index
                        ? {
                            fontWeight: "normal"
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

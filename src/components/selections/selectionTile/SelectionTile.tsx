import React, { ReactNode, CSSProperties } from "react";
import classes from "./SelectionTile.module.css";
import Paragraphs from "../../assets/typography";
import Profile from "src/components/headers/profile/Profile";
import Icon from "src/components/assets/icons/icon";

const { R_14_BLACK, B_15_BLACK } = Paragraphs;
interface Props {
  responsive?: boolean;
  rowStyle?: CSSProperties;
  tileStyle?: CSSProperties;
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
    disable?: boolean;
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
  responsive,
  tileStyle,
}) => {
  let selectionTileRowCls = classes.SelectionTileRow;
  let selectionTileWrapperCls = classes.SelectionTileWrapper;
  if (responsive) {
    selectionTileWrapperCls = `${selectionTileWrapperCls} ${classes.SelectionTileWrapperResponsive}`;
    selectionTileRowCls = `${selectionTileRowCls} ${classes.SelectionTileRowResponsive}`;
  }

  let sectionClass = "";
  !!list && list.find((item) => !item.amount ? sectionClass = classes.CenterSection : null)



  return !centered ? (
    <div className={selectionTileRowCls} id={testId} style={rowStyle}>
      {!!list &&
        list.map((item, index) => {
          let disable = null;
          if (item.disable) {
            disable = `${classes.Disable}`;
          }
          return (
            <div
              id={`${testId}-${index}`}
              onClick={!disable ? () => onTileClick(item, index) : null}
              className={`${selectionTileWrapperCls} ${disable}`}
              key={index}
              style={tileStyle}
            >
              <div
                className={classes.SelectionTileSelector}
                style={{
                  justifyContent: item.iconLabel ? "center" : "flex-start",
                }}
              >
                {item.iconLabel ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <B_15_BLACK
                      className={classes.SelectionTileTitle}
                      style={
                        selected !== index
                          ? {
                            fontWeight: "normal",
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
                  <>{item.children}</>
                ) : !!item.avatar ? (
                  <div>
                    <Profile
                      initials={item.avatar.initials}
                      initialsBg={item.avatar.initialsBg}
                      greeting={item.avatar.name}
                      alt="AVATAR"
                      src={item.avatar.src}
                      greetingStyle={selected !== index ? { fontWeight: "normal" } : {}}
                    />
                  </div>
                ) : (
                        <div id={`${testId}-0${index}`} className={classes.SelectionMain}>
                          <section className={sectionClass}>
                            {!!item.accountTitle && (
                              <div className={classes.SelectionTileTDiv}>
                                <B_15_BLACK
                                  x-ms-format-detection="none"
                                  className={classes.SelectionTileTitle}
                                  style={
                                    selected !== index
                                      ? {
                                        fontWeight: "normal",
                                      }
                                      : {}
                                  }
                                >
                                  {item.accountTitle}
                                </B_15_BLACK>
                              </div>
                            )}
                            {!!item.accountNumber && (
                              <R_14_BLACK x-ms-format-detection="none">
                                {item.accountNumber}
                              </R_14_BLACK>
                            )}
                          </section>

                          {!!item.amount && (
                            <B_15_BLACK
                              x-ms-format-detection="none"
                              style={
                                selected !== index
                                  ? {
                                    fontWeight: "normal",
                                  }
                                  : {}
                              }
                            >
                              {item.amount}
                            </B_15_BLACK>
                          )}
                        </div>
                      )}
              </div>
              {!item.disable && (
                <div
                  className={
                    selected === index
                      ? `${classes.borderBottomSelected} ${classes.borderBottom}`
                      : classes.borderBottom
                  }
                ></div>
              )}
            </div>
          );
        })}
    </div>
  ) : (
      <div className={classes.SelectionTileRow} id={testId} style={rowStyle}>
        {!!list &&
          list.map((item, index) => {
            let disable = null;
            if (item.disable) {
              disable = `${classes.Disable}`;
            }
            return (
              <div
                id={`${testId}-${index}`}
                onClick={() => onTileClick(item, index)}
                className={`${classes.CenteredDiv} ${disable} `}
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
    );
};

export default SelectionTile;

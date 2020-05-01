import React, { CSSProperties, useState, FormEvent } from "react";
import Icon from "src/components/assets/icons/icon";
import Paragraphs from "../../assets/typography";
import classes from "./BoxId.module.css";
import { Notify } from "../../assets/common/notification";
const { B_14_BLACK, B_15_BLACK, R_13_BLACK } = Paragraphs;
interface Props {
  testId?: string;
  title?: string;
  width?: number | string;
  titleStyle?: CSSProperties;
  isActive?: boolean;
  list: {
    leftIcon?: { name: string; color?: string; size?: number };
    leftImage?: string;
    boldText?: string;
    subText?: string;
    notification?: boolean;
    iconButtons?: {
      icon: string;
      text: string;
      onClick?: () => void;
      onBlur?: (event: FormEvent) => void;
    }[];
  }[];
}

const BoxId = ({ testId, title, titleStyle, list, isActive, width }: Props) => {
  const [selected, setSelected] = useState(null);

  const iconClickHandler = (index: number) => {
    setSelected(index);
  };

  const closeHandler = () => {
    setSelected(null);
  };
  const onblurHandler = (button: any, e: FormEvent) => {
    !!button.onBlur && button.onBlur(e);
    closeHandler();
  };
  const iconColor = () => {
    if (isActive) {
      return "#000000";
    } else {
      return "#696969";
    }
  };

  //   const onIconClick = {};
  return (
    <div
      id={testId}
      className={classes.MainDiv}
      style={width ? { width: width } : {}}
    >
      <B_14_BLACK
        className={classes.Title}
        style={
          titleStyle ? titleStyle : { color: isActive ? "#36A03E" : "#696969" }
        }
      >
        {title}
      </B_14_BLACK>
      <div className={classes.BorderDiv}>
        {list &&
          list.map((item, index) => {
            return list.length === 1 ? (
              <div className={classes.WrapperDiv} key={index}>
                <div className={classes.IconDiv}>
                  {item.leftIcon && (
                    <Icon
                      icon={item.leftIcon.name}
                      color={
                        item.leftIcon.color ? item.leftIcon.color : "#ff2626"
                      }
                      size={item.leftIcon.size ? item.leftIcon.size : 35}
                    />
                  )}

                  {item.leftImage && (
                    <img
                      src={item.leftImage}
                      alt="icon"
                      className={classes.ImageIcon}
                    />
                  )}
                  <div className={classes.TextContainer}>
                    <B_15_BLACK>{item.boldText}</B_15_BLACK>
                    {item.subText && (
                      <R_13_BLACK className={classes.SubText}>
                        {item.subText}
                      </R_13_BLACK>
                    )}
                  </div>
                  {item.notification && <Notify className={classes.notify} />}
                </div>
                <div className={classes.RightIconDiv}>
                  <div
                    className={classes.rightIcon}
                    onClick={() => {
                      iconClickHandler(index);
                    }}
                  >
                    <Icon icon="Menu" size={32} color={iconColor()} />
                  </div>
                  {selected === index && (
                    <div className={classes.BoxDiv}>
                      {item.iconButtons &&
                        item.iconButtons.map((button, index) => {
                          return (
                            <div key={index} className={classes.ButtonDiv}>
                              <button
                                onClick={() => {
                                  button.onClick();
                                }}
                                onBlur={(e) => onblurHandler(button, e)}
                                className={classes.ButtonIconText}
                              >
                                <Icon icon={button.icon} size={25} />
                                {button.text}
                              </button>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div
                className={classes.WrapperDivMulti}
                style={
                  list.length - 1 === index
                    ? { borderBottom: "transparent" }
                    : {}
                }
                key={index}
              >
                <div className={classes.IconDiv}>
                  {item.leftIcon && (
                    <Icon
                      icon={item.leftIcon.name}
                      color={
                        item.leftIcon.color ? item.leftIcon.color : "#ff2626"
                      }
                      size={item.leftIcon.size ? item.leftIcon.size : 35}
                    />
                  )}

                  {item.leftImage && (
                    <img
                      src={item.leftImage}
                      alt="icon"
                      className={classes.ImageIcon}
                    />
                  )}
                  <div className={classes.TextContainer}>
                    <B_15_BLACK>{item.boldText}</B_15_BLACK>
                    {item.subText && (
                      <R_13_BLACK className={classes.SubText}>
                        {item.subText}
                      </R_13_BLACK>
                    )}
                  </div>
                  {item.notification && <Notify className={classes.notify} />}
                </div>
                <div className={classes.RightIconDiv}>
                  <div
                    className={classes.rightIcon}
                    onClick={() => {
                      iconClickHandler(index);
                    }}
                  >
                    <Icon icon="Menu" size={32} color={iconColor()} />
                  </div>
                  {selected === index && (
                    <div className={classes.BoxDiv}>
                      {item.iconButtons &&
                        item.iconButtons.map((button, index) => {
                          return (
                            <div key={index} className={classes.ButtonDiv}>
                              <button
                                onClick={() => {
                                  button.onClick();
                                }}
                                onBlur={(e) => onblurHandler(button, e)}
                                className={classes.ButtonIconText}
                              >
                                <Icon icon={button.icon} size={25} />
                                {button.text}
                              </button>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BoxId;

import React, { CSSProperties, useState, FormEvent, useEffect } from "react";
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
  align?: 'left' | 'center' | 'right';
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

const BoxId = ({ testId, title, align, titleStyle, list, isActive, width }: Props) => {
  const [selected, setSelected] = useState(null);

  const iconClickHandler = (index: number) => {
    setSelected(index);
  };

  const closeHandler = (_e: any) => {
    // check the existing popover
    console.log('going into close')
    setSelected(null);
  };

  const iconColor = () => {
    if (isActive) {
      return "#000000";
    } else {
      return "#696969";
    }
  };

  const getAlignmentClass = () => {
    switch (align) {
      case 'center':
        return classes.FlexCenter;
      case 'right':
        return classes.FlexRight;
      default:
        return classes.FlexLeft;
    }
  }

  //   const onIconClick = {};
  return (
    <div className={getAlignmentClass()}>
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
                      <B_15_BLACK style={{ lineHeight: '20px' }}>{item.boldText}</B_15_BLACK>
                      {item.subText && (
                        <R_13_BLACK className={classes.SubText} style={{ lineHeight: '18px' }}>
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
                    {selected === index && <ActionPopover item={item} onDocumentClick={closeHandler} />}
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
                    {selected === index && <ActionPopover item={item} onDocumentClick={closeHandler} />}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

interface ActionPopoverProp {
  item?: any;
  onDocumentClick?: (e?: any) => void;
}

const ActionPopover = ({item, onDocumentClick}: ActionPopoverProp) => {

  const handleDocumentClick = (e: any) => {
    console.log('e', e.target)
    if (!e.target || !e.target.className || !e.target.className.match) return
    console.log('e.target.className', e.target.className)
    if (e.target.className.match(/\bignore-click-bubble\b/)) {
      return
    }
    onDocumentClick && onDocumentClick(e);
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleDocumentClick, true);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick, true);
    }
  }, [])

  return (
    <div className={classes.BoxDiv}>
    {item.iconButtons &&
      item.iconButtons.map((button: any, buttonIndex: number) => {
        return (
          <div key={buttonIndex} className={classes.ButtonDiv}>
            <button
              onClick={(e: any) => {
                e.stopPropagation();
                button.onClick && button.onClick();
              }}
              className={`${classes.ButtonIconText} ignore-click-bubble`}
            >
              <Icon icon={button.icon} size={25} />
              {button.text}
            </button>
          </div>
        );
      })}
  </div>
  )
}

export default BoxId;

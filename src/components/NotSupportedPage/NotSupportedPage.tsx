import React, { ReactNode, CSSProperties } from "react";
import classes from "./NotSupportedPage.module.css";
import Icon from "src/components/assets/icons/icon";
import Paragraphs from "../assets/typography";

const { B_20_BLACK, R_14_BLACK } = Paragraphs;

interface Props {
  testId?: string;
  backgroundColor?: string;
  leftItem: {
    icon?: {
      name: string;
      color: string;
      size?: number;
    };
    image?: {
      source: any;
      imageStyle?: CSSProperties;
    };
    onLeftItemClick?: () => void;
  };
  rightItems?: ReactNode[];
  icon?: {
    name: string;
    color: string;
    size?: number;
  };
  image?: {
    source: any;
    imageStyle?: CSSProperties;
  };
  title?: string;
  titleStyle?: CSSProperties;
  subtitle?: string;
  subtitleStyle?: CSSProperties;
  browserList?: {
    image?: {
      source: any;
      imageStyle?: CSSProperties;
    };
    icon?: {
      name: string;
      color: string;
      size?: number;
    };
    name: string;
    note: string;
    onClick?: () => void;
  }[];
  noteText: string;
  noteTextStyle?: CSSProperties;
  appLinks?: {
    source: any;
    imageStyle?: CSSProperties;
    onClick?: () => void;
  }[];
}

const NotSupportedPage: React.FC<Props> = ({
  testId,
  backgroundColor,
  leftItem,
  rightItems,
  icon,
  image,
  title,
  titleStyle,
  subtitle,
  subtitleStyle,
  browserList,
  noteText,
  noteTextStyle,
  appLinks,
}) => {
  return (
    <div
      id={testId}
      className={classes.Container}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div className={classes.NavbarContainer}>
        <div
          onClick={leftItem.onLeftItemClick}
          className={classes.IconContainer}
        >
          {leftItem.icon && (
            <Icon
              icon={
                leftItem?.icon?.name ? leftItem?.icon.name : "amonline-white"
              }
              color={leftItem?.icon?.color ? leftItem?.icon.color : "#ff2626"}
              size={leftItem?.icon?.size ? leftItem?.icon.size : 150}
            />
          )}
          {leftItem.image && (
            <div style={leftItem?.image.imageStyle}>
              <img src={leftItem?.image.source} />
            </div>
          )}
        </div>
        <div className={classes.NavbarRightItemsContainer}>
          {!!rightItems &&
            rightItems.map(
              (button: ReactNode, index: string | number | undefined) => {
                return (
                  <div
                    key={index}
                    className={classes.NavbarRightItem}
                    id={`${testId}-1${index}`}
                  >
                    {button}
                  </div>
                );
              }
            )}
        </div>
      </div>

      <div className={classes.bodyContainer}>
        <div>
          {icon && (
            <Icon
              icon={icon?.name ? icon.name : "amonline-white"}
              color={icon?.color ? icon.color : "#ff2626"}
              size={icon?.size ? icon.size : 150}
            />
          )}
          {image && (
            <div style={image.imageStyle}>
              <img src={image.source} />
            </div>
          )}
        </div>
        <B_20_BLACK
          style={
            titleStyle ? { ...titleStyle, marginTop: 16 } : { marginTop: 16 }
          }
        >
          {title}
        </B_20_BLACK>
        <R_14_BLACK
          style={
            subtitleStyle
              ? { ...subtitleStyle, marginTop: 32 }
              : { marginTop: 32 }
          }
        >
          {subtitle}
        </R_14_BLACK>
        <div className={classes.browserContainer}>
          {browserList &&
            browserList.map((browser, index) => (
              <div
                className={classes.browserItem}
                key={index}
                style={{
                  marginRight: index === browserList.length - 1 ? 0 : "2rem",
                  cursor: browser.onClick ? "pointer" : "default",
                }}
                onClick={browser.onClick}
              >
                <div>
                  {browser.icon && (
                    <Icon
                      icon={
                        browser.icon.name ? browser.icon.name : "amonline-white"
                      }
                      color={
                        browser.icon?.color ? browser.icon.color : "#ff2626"
                      }
                      size={browser.icon?.size ? browser.icon.size : 150}
                    />
                  )}
                  {browser.image && (
                    <div style={browser.image.imageStyle}>
                      <img src={browser.image.source} />
                    </div>
                  )}
                </div>
                <R_14_BLACK style={{ marginTop: 16 }}>
                  {browser.name}
                </R_14_BLACK>
                <R_14_BLACK>{browser.note}</R_14_BLACK>
              </div>
            ))}
        </div>
        <R_14_BLACK
          style={
            noteTextStyle
              ? { ...noteTextStyle, marginTop: 32 }
              : {
                  marginTop: 32,
                }
          }
        >
          {noteText}
        </R_14_BLACK>

        <div className={classes.imagesContainer}>
          {appLinks &&
            appLinks.map((storeItem, index) => (
              <div
                key={index}
                style={{
                  marginRight: index === appLinks.length - 1 ? 0 : "1rem",
                  cursor: storeItem.onClick ? "pointer" : "default",
                }}
                onClick={storeItem.onClick}
              >
                <div style={storeItem.imageStyle}>
                  <img src={storeItem.source} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NotSupportedPage;

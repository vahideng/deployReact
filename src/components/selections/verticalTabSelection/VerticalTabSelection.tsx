import React, { CSSProperties } from "react";
import classes from "./SelectionTile.module.css";
import Paragraphs from "../../assets/typography";
import Icon from "src/components/assets/icons/icon";

const { B_17_BLACK, B_17_GREY969 } = Paragraphs;
interface Props {
  onTileClick: any;
  selected?: boolean;
  icon?: { name: string; size?: number; color?: string };
  accountTitle?: string;
  accountTitle2?: string;
  tabStyle: CSSProperties;
  tabHeight ?: string;
}

const VerticalTabSelection: React.FC<Props> = ({
  selected,
  onTileClick,
  icon,
  accountTitle,
  accountTitle2,
  tabStyle,
  
}) => {
  return (
    <div
      onClick={onTileClick}
      className={classes.SelectionTileWrapper}
      style={tabStyle}
    >
      {!!icon ? (
        <div  className={classes.WrapperContent}>
          <Icon
            className={classes.Icon}
            icon={!!icon.name ? icon.name : "Alert"}
            size={!!icon.size ? icon.size : 40}
            color={!!icon.color ? icon.color : "#ff2626"}
          />
          {!!accountTitle && (
            <div className={classes.SelectionTileTDiv}>
              {selected ? (
                <B_17_BLACK
                  className={classes.SelectionTileTitle}
                  style={{ fontSize: 15 }}
                >
                  {accountTitle}
                  {!!accountTitle2 && (
                    <>
                      <br />
                      {accountTitle2}
                    </>
                  )}
                </B_17_BLACK>
              ) : (
                <B_17_GREY969
                  className={classes.SelectionTileTitle}
                  style={{ fontSize: 15 }}
                >
                  {accountTitle}
                  {!!accountTitle2 && (
                    <>
                      <br />
                      {accountTitle2}
                    </>
                  )}
                </B_17_GREY969>
              )}
            </div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default VerticalTabSelection;

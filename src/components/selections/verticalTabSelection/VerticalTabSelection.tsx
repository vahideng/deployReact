import React, { CSSProperties } from "react";
import classes from "./SelectionTile.module.css";
import Paragraphs from "../../assets/typography";
import Icon from "src/components/assets/icons/icon";

const { B_17_BLACK, B_17_GREY969 } = Paragraphs;
interface Props {
  onTileClick: any;
  // selectedBorderColor?: string;
  selected?: boolean;
  icon?: any;
  accountTitle?: string;
  tabStyle: CSSProperties;
}

const VerticalTabSelection: React.FC<Props> = ({
  selected,
  onTileClick,
  icon,
  accountTitle,
  tabStyle,
  // selectedBorderColor
}) => {
  return (
    <div
      onClick={onTileClick}
      className={classes.SelectionTileWrapper}
      style={tabStyle}
    >
      {!!icon ? (
        <div className={classes.WrapperContent}>
          <Icon
            className={classes.Icon}
            icon={!!icon.name ? icon.name : "Alert"}
            size={50}
            color={icon.color}
          />
          {!!accountTitle && (
            <div className={classes.SelectionTileTDiv}>
              {selected ? (
                <B_17_BLACK
                  className={classes.SelectionTileTitle}
                  style={{ fontSize: 15 }}
                >
                  {accountTitle}
                </B_17_BLACK>
              ) : (
                <B_17_GREY969
                  className={classes.SelectionTileTitle}
                  style={{ fontSize: 15 }}
                >
                  {accountTitle}
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

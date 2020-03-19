import React from "react";
import classes from "./SelectionTile.module.css";
import Paragraphs from "../../assets/typography";
import Icon from "src/components/assets/icons/icon";

const { B_16_BLACK } = Paragraphs;
interface Props {
  onTileClick: any;
  selectedBorderColor?: string;
  selected?: boolean;
  icon?: any;
  accountTitle?: string;
}

const VerticalTabSelection: React.FC<Props> = ({
  selected,
  onTileClick,
  icon,
  accountTitle,
  selectedBorderColor
}) => {
  return (
    <div
      onClick={onTileClick}
      className={classes.SelectionTileWrapper}
      style={
        selected
          ? {
              borderRightColor: selectedBorderColor
                ? selectedBorderColor
                : "#ff2626"
            }
          : { borderRight: "1px solid #dedede" }
      }
    >
      {!!icon ? (
        <div className={classes.WrapperContent}>
          <Icon
            className={classes.Icon}
            icon={!!icon.name ? icon.name : "Alert"}
            size={40}
            color={!!icon.color ? icon.color : "#ff2626"}
          />
          {!!accountTitle && (
            <div className={classes.SelectionTileTDiv}>
              <B_16_BLACK className={classes.SelectionTileTitle}>
                {accountTitle}
              </B_16_BLACK>
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

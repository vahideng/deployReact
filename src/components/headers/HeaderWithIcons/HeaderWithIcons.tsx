import React, { ReactNode, CSSProperties } from "react";
import LabelToolTip from "src/components/labelToolTip/LabelToolTip";
import Icon from "src/components/assets/icons/icon";
import PrimaryButton from "src/components/buttons/primaryButton/PrimaryButton";
import classes from "./HeaderWithIcons.module.css";

interface Props {
  icon?: { name: string; color?: string };
  image?: { src: string; size?: number; alt?: string };
  label: string;
  headerStyle?: CSSProperties;
  tooltipData: ReactNode;
  buttonLabel: string;
  buttonColor?: { top: string; bottom: string };
  titleColor?: string;
  onButtonClick: () => void;
  buttonIcon?: { name: string; color: string; size?: number };
}

const HeaderWithIcons = ({
  label,
  headerStyle,
  tooltipData,
  icon,
  image,
  onButtonClick,
  buttonLabel,
  buttonColor = { top: "", bottom: "" },
  titleColor,
  buttonIcon
}: Props) => {
  return (
    <div className={classes.MainDiv} style={headerStyle ? headerStyle : {}}>
      <div className={classes.LeftDiv}>
        <div className={classes.IconDiv}>
          {!!icon && <Icon icon={icon.name} color={icon.color} />}
          {!!image && (
            <img
              src={image.src}
              width={image.size ? image.size : 40}
              alt={!!image ? image.alt : "Logo"}
            />
          )}
        </div>

        <LabelToolTip
          label={label}
          tooltipData={tooltipData ? tooltipData : ""}
        />
      </div>

      <PrimaryButton
        onButtonClick={onButtonClick}
        title={buttonLabel}
        buttonColor={{ top: buttonColor.top, bottom: buttonColor.bottom }}
        titleColor={titleColor}
        icon={buttonIcon}
        shadowed={true}
        width={"10.12rem"}
        height={"2.5rem"}
        titleStyle={{ fontSize: 11, color: "#000000" }}
      />
    </div>
  );
};

export default HeaderWithIcons;

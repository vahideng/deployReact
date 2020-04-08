import React, { useState } from "react";
import Icon from "src/components/assets/icons/icon";
import Paragraphs from "../assets/typography";
import classes from "./TooltipDropdown.module.css";
import OutsideClickHandler from "react-outside-click-handler";

const { B_13_GREY444 } = Paragraphs;
interface Props {
  testId?: string;
  icon?: { name?: string; color?: string; size?: number };
  iconButtons?: {
    icon: string;
    text: string;
    onClick?: () => void;
  }[];
}

const TooltipDropdown = ({ testId, icon, iconButtons }: Props) => {
  const [boxIsOpen, setBoxIsOpen] = useState(false);
  const iconClickHandler = () => {
    setBoxIsOpen(!boxIsOpen);
  };
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setBoxIsOpen(false);
      }}
    >
      <div className={classes.MainDiv} id={testId}>
        <div className={classes.Icon} onClick={iconClickHandler}>
          {!icon ? (
            <Icon icon={"Menu"} size={32} color={"#000000"} />
          ) : (
            <Icon icon={icon.name} size={icon.size} color={icon.color} />
          )}
        </div>
        {boxIsOpen && (
          <div className={classes.BoxDiv}>
            {iconButtons &&
              iconButtons.map((button, index) => {
                return (
                  <div
                    onClick={() => {
                      button.onClick();
                      iconClickHandler();
                    }}
                    key={index}
                    className={classes.ButtonIcon}
                  >
                    <Icon icon={button.icon} size={25} />
                    <B_13_GREY444 className={classes.ButtonIconText}>
                      {button.text}
                    </B_13_GREY444>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default TooltipDropdown;

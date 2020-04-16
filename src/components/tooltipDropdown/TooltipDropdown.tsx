import React, { useState, FormEvent } from "react";
import Icon from "src/components/assets/icons/icon";
import classes from "./TooltipDropdown.module.css";
// import OutsideClickHandler from "react-outside-click-handler";

interface Props {
  testId?: string;
  icon?: { name?: string; color?: string; size?: number };
  iconButtons?: {
    icon: string;
    text: string;
    onClick?: () => void;
    onBlur?: (event: FormEvent) => void;
  }[];
}

const TooltipDropdown = ({ testId, icon, iconButtons }: Props) => {
  const [boxIsOpen, setBoxIsOpen] = useState(false);
  const iconClickHandler = () => {
    setBoxIsOpen(!boxIsOpen);
  };
  const onblurHandler = (button: any, e: FormEvent) => {
    !!button.onBlur && button.onBlur(e);
    iconClickHandler();
  };
  return (
   <div>
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
                  <div key={index} className={classes.ButtonDiv}>
                    <button
                      onClick={() => {
                        button.onClick();
                      }}
                      onBlur={e => onblurHandler(button, e)}
                      className={classes.ButtonIconText}
                    >
                      <Icon
                        icon={button.icon}
                        size={25}
                        className={classes.ButtonIcon}
                      />
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
};

export default TooltipDropdown;

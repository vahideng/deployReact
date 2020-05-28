import React, { useState, FormEvent } from "react";
import Icon from "src/components/assets/icons/icon";
import classes from "./TooltipDropdown.module.css";
import Paragraphs from "../assets/typography";
// import OutsideClickHandler from "react-outside-click-handler";
const { B_13_GREY444 } = Paragraphs
interface Props {
  testId?: string;
  icon?: { name?: string; color?: string; size?: number };
  iconButtons?: {
    icon: string;
    text: string;
    size?: number;
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
                const { size = 25, text, icon, onClick  } = button
                return (
                  <button
                    key={index}
                    onClick={onClick}
                    onBlur={e => onblurHandler(button, e)}
                    className={classes.Button}
                  >
                    <Icon
                      icon={icon}
                      size={size}
                      className={classes.ButtonIcon}
                    />
                    <B_13_GREY444 style={{ marginLeft: '.75rem' }}>
                      {text}
                    </B_13_GREY444>
                  </button>
                );
              })}
          </div>
        )}
      </div>
      </div>
  );
};

export default TooltipDropdown;

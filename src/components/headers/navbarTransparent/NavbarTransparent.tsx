import React from "react";
import Icon from "src/components/assets/icons/icon";
import classes from "./NavbarTransparent.module.css";

interface Props {
  testId?: string;
  icon?: { name?: string; color?: string; onIconClick?: () => void };
  rightButtons?: any;
  menuIsOpen?: boolean;
}

const NavbarTransparent: React.FC<Props> = ({ rightButtons, icon, testId }) => {
  return (
    <div className={classes.NavbarTransparentMainDiv} id={testId}>
      <div onClick={icon?.onIconClick}>
        <Icon
          testId={`${testId}-0`}
          className={classes.NavbarTransparentIcon}
          icon={!!icon?.name ? icon.name : "amonline-white"}
          color={icon?.color ? icon.color : "#ff2626"}
          size={150}
        />
      </div>
      <div className={classes.NavbarTransparentIconDiv}>
        {!!rightButtons &&
          rightButtons.map(
            (button: React.ReactNode, index: string | number | undefined) => {
              return (
                <div
                  key={index}
                  className={classes.NavbarTransparentButtons}
                  id={`${testId}-1${index}`}
                >
                  {button}
                </div>
              );
            }
          )}
      </div>
    </div>
  );
};

export default NavbarTransparent;

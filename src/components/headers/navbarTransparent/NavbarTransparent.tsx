import React from "react";
import Icon from "src/components/assets/icons/icon";
import classes from "./NavbarTransparent.module.css";

interface Props {
  icon: { name?: string; color?: string; onIconClick?: () => void };
  rightButtons?: any;
  menuIsOpen?: boolean;
}

const NavbarTransparent: React.FC<Props> = ({ rightButtons, icon }) => {
  return (
    <div className={classes.NavbarTransparentMainDiv}>
      <div onClick={icon.onIconClick}>
        <Icon
          className={classes.NavbarTransparentIcon}
          icon={!!icon.name ? icon.name : "amonline"}
          color={icon.color ? icon.color : "#ff2626"}
          size={150}
        />
      </div>
      <div className={classes.NavbarTransparentIconDiv}>
        {!!rightButtons &&
          rightButtons.map(
            (button: React.ReactNode, index: string | number | undefined) => {
              return (
                <div key={index} className={classes.NavbarTransparentButtons}>
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

import React from "react";
import Icon from "src/components/assets/icons/icon";
import classes from "./Navbar.module.css";
import Profile from "../profile/Profile";

interface Props {
  icon: { name?: string; color?: string; onIconClick?: () => void };
  profile?: {
    greeting: string;
    name: string;
    alt?: string;
    src: string;
  };
  rightButtons?: {
    iconName: string;
    onButtonClick: () => void;
  }[];
}

const Navbar: React.FC<Props> = ({ icon, profile = {}, rightButtons }) => {
  return (
    <div className={classes.NavbarMainDiv}>
      <div>
        <div onClick={icon.onIconClick} className={classes.NavbarOnClick}>
          <Icon
            icon={icon.name ? icon.name : "amonline-white"}
            color={icon.color ? icon.color : "#ff2626"}
            size={130}
          />
        </div>
      </div>
      <div className={classes.navbarIconDiv}>
        {!!profile && (
          <Profile
            greeting={!!profile.greeting ? profile.greeting : ""}
            name={!!profile.name ? profile.name : ""}
            alt={!!profile.alt ? profile.alt : ""}
            src={!!profile.src ? profile.src : ""}
          />
        )}
        {!!rightButtons &&
          rightButtons.map((button, index) => {
            return (
              <div key={index} className={classes.navbarIcons}>
                <div
                  onClick={button.onButtonClick}
                  className={classes.NavbarOnClick}
                >
                  <Icon icon={button.iconName} size={30} color={"#444444"} />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Navbar;

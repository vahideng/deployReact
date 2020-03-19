import React, { CSSProperties } from "react";
import Icon from "src/components/assets/icons/icon";
import classes from "./Navbar.module.css";
import Profile from "../profile/Profile";

interface Props {
  testId?: string;
  scrolled?: boolean;
  icon?: { name?: string; color?: string; onIconClick?: () => void };
  scrolledIcon?: { name?: string; color?: string; onIconClick?: () => void };
  profile?: {
    testId?: string;
    initials?: string;
    initialsBg?: string;
    greetingStyle?: CSSProperties;
    nameStyle?: CSSProperties;
    src?: string;
    greeting?: string;
    name?: string;
    alt?: string;
  };
  rightButtons?: {
    iconName: string;
    onButtonClick: () => void;
  }[];
}

const Navbar: React.FC<Props> = ({
  icon = {},
  scrolledIcon = {},
  profile = {},
  rightButtons,
  scrolled,
  testId
}) => {
  return (
    <div className={classes.NavbarMainDiv} id={testId}>
      <div>
        {!!scrolled ? (
          <div
            id={`${testId}-0`}
            onClick={scrolledIcon.onIconClick}
            className={classes.NavbarOnClick}
          >
            <Icon
              icon={scrolledIcon.name ? scrolledIcon.name : "LOGO"}
              color={scrolledIcon.color ? scrolledIcon.color : "#ff2626"}
              size={27}
            />
          </div>
        ) : (
          <div
            onClick={icon.onIconClick}
            className={classes.NavbarOnClick}
            id={`${testId}-1`}
          >
            <Icon
              icon={icon.name ? icon.name : "amonline-white"}
              color={icon.color ? icon.color : "#ff2626"}
              size={130}
            />
          </div>
        )}
      </div>
      <div className={classes.navbarIconDiv}>
        {!!profile &&
          (!!scrolled ? (
            <Profile
              testId={`${testId}-2`}
              alt={!!profile.alt ? profile.alt : ""}
              src={!!profile.src ? profile.src : ""}
              initials={profile.initials}
              initialsBg={profile.initialsBg}
            />
          ) : (
            <Profile
              testId={`${testId}-3`}
              greeting={!!profile.greeting ? profile.greeting : ""}
              name={!!profile.name ? profile.name : ""}
              alt={!!profile.alt ? profile.alt : ""}
              src={!!profile.src ? profile.src : ""}
              initials={profile.initials}
              initialsBg={profile.initialsBg}
              greetingStyle={profile.greetingStyle}
              nameStyle={profile.nameStyle}
            />
          ))}
        {!!rightButtons &&
          rightButtons.map((button, index) => {
            return (
              <div
                key={index}
                className={classes.navbarIcons}
                id={`${testId}-${index}`}
              >
                <div
                  id={`${testId}-4`}
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

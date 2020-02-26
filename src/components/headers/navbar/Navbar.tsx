import React from "react";
import Icon from "src/components/assets/icons/icon";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import Profile from "../profile/Profile";

interface Props {
  icon: { link?: string };
  profile?: {
    greeting: string;
    name: string;
    alt?: string;
    src: string;
  };
  rightButtons?: {
    iconName: string;
    link: string;
  }[];
}

const Navbar: React.FC<Props> = ({ icon, profile = {}, rightButtons }) => {
  return (
    <div className={classes.NavbarMainDiv}>
      <div>
        <Link to={!!icon.link ? icon.link : "#"}>
          <Icon icon={"amonline-white"} color={"#ff2626"} size={130} />
        </Link>
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
                <Link to={button.link}>
                  <Icon icon={button.iconName} size={30} color={"#444444"} />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Navbar;

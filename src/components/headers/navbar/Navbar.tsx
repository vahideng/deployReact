import React from "react";
import Icon from "src/components/assets/icons/icon";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import Profile from "../profile/Profile";

interface Props {
  icon: { name: string; color?: string; size?: number; link?: string };
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
          <Icon
            icon={icon.name}
            color={!!icon.color ? icon.color : "#ff2626"}
            size={!!icon.size ? icon.size : 30}
          />
        </Link>
      </div>
      <div className={classes.navbarIconDiv}>
        {!!profile && (
          <Link to="#">
            <Profile
              greeting={!!profile.greeting ? profile.greeting : ""}
              name={!!profile.name ? profile.name : ""}
              alt={!!profile.alt ? profile.alt : ""}
              src={!!profile.src ? profile.src : ""}
            />
          </Link>
        )}
        {!!rightButtons &&
          rightButtons.map((button, index) => {
            return (
              <div key={index} className={classes.navbarIcons}>
                <Link to="#">
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

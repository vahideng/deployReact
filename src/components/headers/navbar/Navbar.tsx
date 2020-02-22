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
      <nav
        className={`${classes.navbarContainer} container navbar navbar-expand-lg`}
      >
        <Link to={!!icon.link ? icon.link : "#"} className="navbar-brand">
          <Icon
            icon={icon.name}
            color={!!icon.color ? icon.color : "#ff2626"}
            size={!!icon.size ? icon.size : 30}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">replace</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {!!profile && (
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <Profile
                    greeting={!!profile.greeting ? profile.greeting : ""}
                    name={!!profile.name ? profile.name : ""}
                    alt={!!profile.alt ? profile.alt : ""}
                    src={!!profile.src ? profile.src : ""}
                  />
                </Link>
              </li>
            )}
            {!!rightButtons &&
              rightButtons.map(button => {
                return (
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      <Icon
                        icon={button.iconName}
                        size={30}
                        color={"#444444"}
                      />
                    </Link>
                  </li>
                );
              })}

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

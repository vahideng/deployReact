import React from "react";
import Icon from "src/components/assets/icons/icon";
import { Link } from "react-router-dom";
import classes from "./NavbarTransparent.module.css";

interface Props {
  icon: { link?: string };
  rightButtons?: any;
}

const NavbarTransparent: React.FC<Props> = ({ icon, rightButtons }) => {
  return (
    <div className={classes.NavbarTransparentMainDiv}>
      <div>
        <Link to={!!icon.link ? icon.link : "#"}>
          <Icon icon={"amonline"} color={"#ff2626"} size={150} />
        </Link>
      </div>
      <div className={classes.NavbarTransparentIconDiv}>
        {!!rightButtons &&
          rightButtons.map(
            (button: React.ReactNode, index: string | number | undefined) => {
              return (
                <div key={index} className={classes.NavbarTransparentIcons}>
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

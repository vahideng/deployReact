import React from "react";
import classes from "./BackgroundSingle.module.css";
// import NavbarTransparent from "src/components/headers/navbarTransparent/NavbarTransparent";
// import TextDropdown from "src/components/inputs/checkBox/textDropdown /TextDropdown";
// import TextButton from "src/components/buttons/textButton/TextButton";
interface Props {
  image?: string;
  rightButtons?: any;
  children?: any;
}

const BackgroundSingle: React.FC<Props> = ({ image, children }) => {
  return (
    <div
      className={classes.BackgroundSingleMain}
      style={{
        backgroundImage: `url(${image})`
      }}
    >
      {/* <div className={classes.BackgroundSingleNav}>
     
      </div> */}

      <div className={classes.BackgroundSingleChild}>{children}</div>
    </div>
  );
};

export default BackgroundSingle;

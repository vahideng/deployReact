import React from "react";
import classes from "./FooterLogo.module.css";

interface Props {
  logos: any;
  onLogoClick: (logo: any, index: number) => any;
}

const FooterLogo: React.FC<Props> = props => {
  const { logos, onLogoClick } = props;
  return (
    <div className={`container ${classes.container}`}>
      {logos.map((logo: { src: any; id: string }, index: number) => {
        return (
          <div
            className={classes.imageContainer}
            key={index}
            onClick={() => onLogoClick(logo, index)}
          >
            <img src={logo.src} width="100%" height="100%" alt={"LOGO"} />
          </div>
        );
      })}
    </div>
  );
};

export default FooterLogo;

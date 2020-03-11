import React from "react";
import classes from "./FooterLogo.module.css";

interface Props {
  testId?: string;
  logos: any;
  onLogoClick: (logo: any, index: number) => any;
}

const FooterLogo: React.FC<Props> = props => {
  const { logos, onLogoClick, testId } = props;
  return (
    <div className={`container ${classes.FooterContainer}`} id={testId}>
      {logos.map((logo: { src: any; id: string }, index: number) => {
        return (
          <div
            id={`${testId}-0${index}`}
            className={classes.LogoContainer}
            key={index}
            onClick={() => onLogoClick(logo, index)}
          >
            <img
              src={logo.src}
              width="100%"
              height="100%"
              alt={"LOGO"}
              id={logo.id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FooterLogo;

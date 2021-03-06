import React, { CSSProperties, useEffect, useState } from "react";
import Icon from "src/components/assets/icons/icon";
import classes from "./Navbar.module.css";
import Profile from "../profile/Profile";

interface Props {
  testId?: string;
  icon?: { name?: string; color?: string; onIconClick?: () => void };
  image?: { src: string; style?: CSSProperties; onImageClick?: () => void };
  scrolledImage?: {
    src: string;
    style?: CSSProperties;
  };
  scrolledIcon?: { name?: string; color?: string };
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
    selected?: boolean;
  }[];
}

const Navbar: React.FC<Props> = ({
  icon = {},
  scrolledIcon = {},
  profile = {},
  rightButtons,
  testId,
  image,
  scrolledImage,
}) => {
  //@ts-ignore
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrolled(true);
    });
    return () => {
      document.removeEventListener("scroll", () => {
        setScrolled(true);
      });
    };
  }, []);
  return scrolled ? (
    <div
      className={classes.NavbarMainDivScrolled}
      id={testId}
      onMouseEnter={() => setScrolled(false)}
    >
      <div className={classes.InnerWidth}>
        <div>
          <div id={`${testId}-0`} className={classes.NavbarScrolledIcon}>
            {!!scrolledIcon && !scrolledImage && (
              <Icon
                icon={scrolledIcon.name ? scrolledIcon.name : "LOGO"}
                color={scrolledIcon.color ? scrolledIcon.color : "#ff2626"}
                size={27}
              />
            )}
            {!!scrolledImage && (
              <img
                src={scrolledImage.src}
                style={scrolledImage.style}
                alt="logo"
              />
            )}
          </div>
        </div>
        <div className={classes.navbarIconDiv}>
          <div className={classes.scrolledProfile}>
            <Profile
              testId={`${testId}-2`}
              alt={!!profile.alt ? profile.alt : ""}
              src={!!profile.src ? profile.src : ""}
              initials={profile.initials}
              initialsBg={profile.initialsBg}
              scrolled
            />
          </div>

          {!!rightButtons &&
            rightButtons.map((button, index) => {
              return (
                <div
                  key={index}
                  className={classes.navbarIcons}
                  id={`${testId}-${index}`}
                  onClick={button.onButtonClick}
                >
                  <Icon icon={button.iconName} size={25} color={"#444444"} />
                  {button.selected && <div className={classes.selected}></div>}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  ) : (
    <div className={classes.NavbarMainDiv} id={testId}>
      <div className={classes.InnerWidth}>
        <div>
          <div id={`${testId}-1`} className={classes.NavbarIcon}>
            {!!icon && !image && (
              <span onClick={icon.onIconClick}>
                <Icon
                  icon={icon.name ? icon.name : "amonline-white"}
                  color={icon.color ? icon.color : "#ff2626"}
                  size={130}
                />
              </span>
            )}
            {!!image && (
              <>
                <img
                  src={image.src}
                  style={image.style}
                  onClick={image.onImageClick}
                  alt="logo"
                />
              </>
            )}
          </div>
        </div>
        <div className={classes.navbarIconDiv}>
          {!!profile && (
            <div className={classes.Profile}>
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
            </div>
          )}
          {!!rightButtons &&
            rightButtons.map((button, index) => {
              return (
                <div
                  key={index}
                  className={classes.navbarIcons}
                  id={`${testId}-${index}`}
                  onClick={button.onButtonClick}
                >
                  <Icon icon={button.iconName} size={30} color={"#444444"} />
                  {button.selected && <div className={classes.selected}></div>}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import classes from "./Profile.module.css";
import Paragraphs from "../../assets/typography";
import { CSSProperties } from "styled-components";
const { B_15_BLACK, B_15_GREY969, XB_14_WHITE, XB_11_WHITE } = Paragraphs;
interface Props {
  testId?: string;
  src?: string;
  initials?: string;
  initialsBg?: string;
  greetingStyle?: CSSProperties;
  nameStyle?: CSSProperties;
  greeting?: string;
  name?: string;
  alt?: string;
  scrolled?: boolean;

}

const Profile: React.FC<Props> = ({
  testId,
  src,
  greeting,
  name,
  initials,
  initialsBg,
  greetingStyle,
  nameStyle,
  scrolled,
  alt = "AVATAR"
}) => {
  return scrolled ? (
    <div id={testId}>
      <div className={`${classes.scrolledAvatarContainer}`}>
        {!!src ? (
          <img src={src} alt={alt} />
        ) : (
            <div
              className={classes.scrolledAvatarInitials}
              style={!!initialsBg ? { backgroundColor: initialsBg } : {}}
            >
              <XB_11_WHITE>{initials}</XB_11_WHITE>
            </div>
          )}
      </div>
    </div>
  ) : (
      <div id={testId}>
        <div className={`${classes.avatarContainer}`}>
          {!!src ? (
            <img src={src} alt={alt} />
          ) : (
              <div
                className={classes.avatarInitials}
                style={!!initialsBg ? { backgroundColor: initialsBg } : {}}
              >
                <XB_14_WHITE>{initials}</XB_14_WHITE>
              </div>
            )}
          <div className={classes.textContainer}>
            {!!greeting && (
              <B_15_BLACK className={classes.greeting} style={greetingStyle}>
                {greeting}
              </B_15_BLACK>
            )}
            {!!name && <B_15_GREY969 style={nameStyle}>{name}</B_15_GREY969>}
          </div>
        </div>
      </div>
    );
};

export default Profile;

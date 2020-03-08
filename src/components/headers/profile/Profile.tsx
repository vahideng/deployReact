import React from "react";
import classes from "./Profile.module.css";
import Paragraphs from "../../assets/typography";
const { B_15_BLACK, B_15_GREY969, XB_14_WHITE } = Paragraphs;
interface Props {
  testId?: string;
  src?: string;
  initials?: string;
  initialsBg?: string;
  greeting: string;
  name?: string;
  alt?: string;
}

const Profile: React.FC<Props> = ({
  testId,
  src,
  greeting,
  name,
  initials,
  initialsBg,
  alt = "AVATAR"
}) => {
  return (
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
          <B_15_BLACK className={classes.greeting}>{greeting}</B_15_BLACK>
          {!!name && <B_15_GREY969>{name}</B_15_GREY969>}
        </div>
      </div>
    </div>
  );
};

export default Profile;

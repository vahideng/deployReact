import React from "react";
import classes from "./Profile.module.css";
import Paragraphs from "../../assets/typography";
const { B_15_BLACK, B_15_GREY969 } = Paragraphs;
interface Props {
  src: string;
  greeting: string;
  name: string;
  alt?: string;
}

const Profile: React.FC<Props> = ({ src, greeting, name, alt = "AVATAR" }) => {
  return (
    <div>
      <div className={`${classes.avatarContainer}`}>
        <img src={src} alt={alt} />
        <div className={classes.textContainer}>
          <B_15_BLACK className={classes.greeting}>{greeting}</B_15_BLACK>
          <B_15_GREY969>{name}</B_15_GREY969>
        </div>
      </div>
    </div>
  );
};

export default Profile;

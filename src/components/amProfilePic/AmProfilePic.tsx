import React from 'react';
import classes from './AmProfilePic.module.css';
import Image from 'react-bootstrap/Image';
import Paragraphs from '../assets/typography';
const { B_32_WHITE } = Paragraphs;
interface ProfilePicProps {
  testId?: string;
  profilePicImage?: string;
  editIcon?: React.ReactNode;
  ProfilePicBgColor: string;
  onEditClickHandler?: () => void;
  fullName: string;
}

const AmProfilePic: React.FC<ProfilePicProps> = ({
  testId,
  profilePicImage,
  ProfilePicBgColor,
  editIcon,
  onEditClickHandler,
  fullName,
}) => {
  const {
    ProfilePicMain,
    ProfilePicImg,
    ProfilePicBg,
    profileEditBtn,
  } = classes;
  const ProfilePicWithoutImgStyle = [];
  if (!profilePicImage) {
    ProfilePicWithoutImgStyle.push(ProfilePicBgColor);
  }
  const initials = fullName
    .split(' ')
    .map(n => n[0])
    .join('');
  return (
    <div id={testId}>
      <div className={ProfilePicMain}>
        {!!profilePicImage ? (
          <div>
            <Image
              src={profilePicImage}
              alt="ProfilePic"
              roundedCircle
              className={ProfilePicImg}
            />
          </div>
        ) : (
          <div
            className={ProfilePicBg}
            style={{ backgroundColor: `${ProfilePicWithoutImgStyle.join('')}` }}
          >
            <B_32_WHITE>{initials}</B_32_WHITE>
          </div>
        )}
        <div className={profileEditBtn} onClick={onEditClickHandler}>
          {editIcon}
        </div>
      </div>
    </div>
  );
};

export const MemoizedAmProfilePic = React.memo(AmProfilePic);

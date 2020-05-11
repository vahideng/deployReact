import React, { ReactNode, CSSProperties } from "react";
import Icon from "src/components/assets/icons/icon";
import classes from "./NavbarTransparent.module.css";

interface Props {
  testId?: string;
  icon?: { name?: string; color?: string; onIconClick?: () => void };
  image?: { src: string; style?: CSSProperties; onImageClick?: () => void };
  rightButtons?: ReactNode[];
}

const NavbarTransparent: React.FC<Props> = ({
  rightButtons,
  icon,
  testId,
  image,
}) => {
  return (
    <div className={classes.NavbarTransparentMainDiv} id={testId}>
      {!!icon && !image && (
        <div onClick={icon?.onIconClick}>
          <Icon
            testId={`${testId}-0`}
            className={classes.NavbarTransparentIcon}
            icon={!!icon?.name ? icon.name : "amonline-white"}
            color={icon?.color ? icon.color : "#ff2626"}
            size={150}
          />
        </div>
      )}
      {!!image && !icon && (
        <img
          className={classes.NavbarTransparentIcon}
          src={image.src}
          style={image.style}
          onClick={image.onImageClick}
          alt="logo"
        />
      )}
      <div className={classes.NavbarTransparentIconDiv}>
        {!!rightButtons &&
          rightButtons.map(
            (button: ReactNode, index: string | number | undefined) => {
              return (
                <div
                  key={index}
                  className={classes.NavbarTransparentButtons}
                  id={`${testId}-1${index}`}
                >
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

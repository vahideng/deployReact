import React, { CSSProperties } from "react";
import classes from "./NotSupportedPage.module.css";
import NavbarTransparent from "src/components/headers/navbarTransparent/NavbarTransparent";
import TextButton from "src/components/buttons/textButton/TextButton";

interface Props {
  backgroundColor?: string;
  testId?: string;
  image?: string;
  rightButtons?: {
    label: string;
    onPressLabel: () => void;
    labelStyle?: CSSProperties;
  }[];
}

const NotSupportedPage: React.FC<Props> = ({
  // backgroundColor,
  testId,
}) => {
  return (
    <div
      id={testId}
      className={classes.Container}
      // style={{
      //   backgroundColor: backgroundColor
      // }}
    >
      <div className={classes.NavbarMainDiv}>
        <div onClick={icon?.onIconClick}>
          <Icon
            testId={`${testId}-0`}
            className={classes.NavbarTransparentIcon}
            icon={!!icon?.name ? icon.name : "amonline-white"}
            color={icon?.color ? icon.color : "#ff2626"}
            size={150}
          />
        </div>
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
      <NavbarTransparent
        icon={{
          onIconClick: () => {},
        }}
        rightButtons={[
          <TextButton
            buttonText="Contact Us"
            onTextClick={() => {}}
            buttonStyles={{
              color: "#000000",
              fontWeight: 400,
              fontSize: 15,
            }}
          />,
          <TextButton
            buttonText="FAQ"
            onTextClick={() => {}}
            buttonStyles={{
              color: "#000000",
              fontWeight: 400,
              fontSize: 15,
            }}
          />,
        ]}
      />
    </div>
  );
};

export default NotSupportedPage;

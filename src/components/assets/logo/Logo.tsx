import React from "react";
import Icon from "../icons/icon";

interface Props {
  icon?: { name: string; size: number; color: string };
  image?: { src: string; width?: number | string; height?: number | string };
  testId?: string;
}

const Logo: React.FC<Props> = props => {
  const { icon, image, testId } = props;
  return (
    <div id={`${testId}`}>
      {!!icon && <Icon icon={icon.name} size={icon.size} color={icon.color} />}
      {!!image && (
        <div
          id={`${testId}-1`}
          style={{
            width: !!image.width ? image.width : "100%",
            height: !!image.height ? image.height : "100%"
          }}
        >
          <img src={image.src} width={"100%"} height={"100%"} alt="LOGO" />
        </div>
      )}
    </div>
  );
};

export default Logo;

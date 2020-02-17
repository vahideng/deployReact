import React from "react";
import Icon from "../icons/icon";

interface Props {
  icon?: { name: string; size: number; color: string };
  image?: { src: string; width?: number | string; height?: number | string };
}

const Logo: React.FC<Props> = props => {
  const { icon, image } = props;
  return (
    <div>
      {!!icon && <Icon icon={icon.name} size={icon.size} color={icon.color} />}
      {!!image && (
        <img
          src={image.src}
          width={!!image.width ? image.width : "100%"}
          height={!!image.height ? image.height : "100%"}
        />
      )}
    </div>
  );
};

export default Logo;

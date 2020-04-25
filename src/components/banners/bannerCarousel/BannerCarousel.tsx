import React, { CSSProperties } from "react";
import classes from "./BannerCarousel.module.css";
import Paragraphs from "../../assets/typography";

const { R_12_WHITE, R_20_WHITE } = Paragraphs;

interface BannerCarouselProps {
  testId?: string;
  disabled?: boolean;
  width?: string;
  height?: string;
  title?: string;
  titleStyle?: CSSProperties;
  subtitle?: string;
  subtitleStyle?: CSSProperties;
  subtitleNumOfLines?: number;
  backgroundImage?: string;
  onClick?: () => void;
}

const BannerCarousel: React.FC<BannerCarouselProps> = ({
  testId,
  disabled,
  width = '100%',
  height = '6.25rem',
  title,
  titleStyle,
  subtitle,
  subtitleStyle,
  subtitleNumOfLines = 2,
  backgroundImage,
  onClick,
}: BannerCarouselProps) => {
  const handleClick = () => {
    if (onClick && !disabled) {
      onClick()
    }
  }

  return (
    <div id={`${testId}`} className={classes.Container} onClick={handleClick} style={{
      width,
      height,
      backgroundImage: `url(${backgroundImage})`
    }}>
        <div className={classes.InnerWrapper}>
          <div className={classes.TitleWrapper}>
            <R_12_WHITE className={classes.Title} style={titleStyle}>{title}</R_12_WHITE>
          </div>
          <div className={classes.Subtitle} style={{ WebkitLineClamp: subtitleNumOfLines }}>
            <R_20_WHITE style={subtitleStyle}>{subtitle}</R_20_WHITE>
          </div>
        </div>
    </div>
  );
};

export default BannerCarousel;

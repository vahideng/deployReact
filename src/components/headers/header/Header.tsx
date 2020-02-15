import React from "react";
import Paragraphs from "../../assets/typography";
import "./header.scss";
const { SB_15_BLACK, B_48_BLACK } = Paragraphs;
interface Props {
  title: string;
  subTitle?: string;
}

const Header: React.FC<Props> = props => {
  const { title, subTitle } = props;
  return (
    <div className="main">
      <SB_15_BLACK style={{ textTransform: "uppercase" }}>{title}</SB_15_BLACK>
      <B_48_BLACK>{subTitle}</B_48_BLACK>
    </div>
  );
};

export default Header;

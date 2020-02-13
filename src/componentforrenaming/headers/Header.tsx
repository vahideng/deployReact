import React from "react";
import Paragraphs from "../assets/texts";
import "./header.module.css";
const { SB15Black, B48Black } = Paragraphs;
interface Props {
  title: string;
  subTitle: string;
}

const Header: React.FC<Props> = props => {
  const { title, subTitle } = props;
  return (
    <div className="main">
      <SB15Black style={{ textTransform: "uppercase" }}>{title}</SB15Black>
      <B48Black>{subTitle}</B48Black>
    </div>
  );
};

export default Header;

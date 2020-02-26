import React, { useState } from "react";
import classes from "./BackgroundSingle.module.css";
import NavbarTransparent from "src/components/headers/navbarTransparent/NavbarTransparent";
import TextDropdown from "src/components/inputs/checkBox/textDropdown /TextDropdown";
import TextButton from "src/components/buttons/textButton/TextButton";
interface Props {
  image?: string;
  children?: any;
}

const BackgroundSingle: React.FC<Props> = ({ image, children }) => {
  const [selectedItem, setSelectedOption] = useState(null);
  return (
    <div
      className={classes.BackgroundSingleMain}
      style={{
        backgroundImage: `url(${image})`
      }}
    >
      <div className={classes.BackgroundSingleNav}>
        <NavbarTransparent
          icon={{ link: "/Sprint-1" }}
          rightButtons={[
            <TextButton
              buttonText="FAQ"
              onTextClick={() => {
                alert(`clicked`);
              }}
              buttonStyles={{
                color: "#000000",
                fontWeight: 400,
                fontSize: 15
              }}
            />,
            <TextDropdown
              handleChange={(selectedOption: any) => {
                setSelectedOption(selectedOption);
                console.log(`Option:`, selectedOption);
              }}
              selectedOption={selectedItem}
              placeHolder={"English"}
              options={[
                { label: "English", value: "english" },
                { label: "Malay", value: "malay" },
                { label: "中文", value: "中文" }
              ]}
            />
          ]}
        />
      </div>

      <div className={classes.BackgroundSingleChild}>{children}</div>
    </div>
  );
};

export default BackgroundSingle;

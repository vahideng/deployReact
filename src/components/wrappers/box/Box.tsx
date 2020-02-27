import React from "react";
import classes from "./Box.module.css";
import AMTabs from "src/components/buttons/tabs/Tabs";
import FullButton from "src/components/buttons/fullButton/FullButton";
interface Props {
  content: any;
  fullButton?: boolean;
  onSelect?: any;
}

const Box: React.FC<Props> = ({ content, fullButton, onSelect }) => {
  return (
    <div className={classes.BoxMainDiv}>

      <div className={classes.Container}>
      <AMTabs
        onSelect={onSelect}
        defaultIndex={1}
        titles={["Login", "Security", "Contact Us"]}
        contents={content}
      />
      </div>
     

      {fullButton ? (
        <FullButton
          title="Login"
          onButtonClick={() => {
            alert("Button Clicked");
          }}
        />
      ) : null}
    </div>
  );
};

export default Box;

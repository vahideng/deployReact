import React, { Component } from "react";
import Paragraphs from "../assets/typography";
 import classes from "./securityImage.module.css";

const { B_13_BLACK } = Paragraphs;
interface Props {
  testId?: string;
  label?: string;
  source ?: any;
  alt ?: string;
 
}

class InputField extends Component<Props, {}> {
  render() {
    const {
      testId,
      label,
      source,
      alt

    } = this.props;
    return (
      <div id={testId} className={classes.InputFieldMain}>
        {!!label && (
          <B_13_BLACK className={classes.InputFieldLabel}>{label}</B_13_BLACK>
        )}

        <div className={classes.InputFieldIconDiv}>
        <img src={source} alt={alt}/>

        <p>dsdsds</p>
        </div>
      </div>
    );
  }
}

export default InputField;

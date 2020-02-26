import React, { Component } from "react";
import Paragraphs from "../../../assets/typography";
import classes from "./InputField.module.css";
import Icon from "src/components/assets/icons/icon";
const { B_13_BLACK } = Paragraphs;
interface Props {
  testId?: string;
  value: any;
  type: string;
  label?: string;
  icon?: { name?: string; color?: string; size?: number };
  autoFocus?: boolean;
  isSecure?: boolean;
  onSecureClick?: () => void;
  handleChange: (event: any, testId?: string | undefined) => void;
}

class InputField extends Component<Props, {}> {
  render() {
    const {
      testId,
      value,
      handleChange,
      label,
      icon,
      type,
      autoFocus,
      isSecure,
      onSecureClick
    } = this.props;
    return (
      <div className={classes.InputFieldMain}>
        {!!label && (
          <B_13_BLACK className={classes.InputFieldLabel}>{label}</B_13_BLACK>
        )}
        <div className={classes.InputFieldIconDiv}>
          {!!icon && (
            <Icon
              className={classes.InputFieldIcon}
              icon={icon.name}
              color={!!icon.color ? icon.color : "#ff2626"}
              size={30}
            />
          )}
          <input
            style={
              autoFocus
                ? {
                    paddingLeft: !icon ? "1.5rem" : "3.75rem",
                    boxShadow: "none"
                  }
                : { paddingLeft: !icon ? "1.5rem" : "3.75rem" }
            }
            type={type}
            value={value}
            autoFocus={!!autoFocus ? autoFocus : false}
            onChange={event => {
              handleChange(event, testId);
            }}
          />

          {!!isSecure && !!value && (
            <span
              className={classes.InputFieldPassword}
              onClick={onSecureClick}
            >
              <Icon
                icon={
                  type === "password" ? "field-close-eye" : "field-open-eye"
                }
                color={"#444444"}
                size={25}
              />
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default InputField;

import React, { Component } from "react";
import Paragraphs from "../../assets/typography";
import classes from "./InputField.module.css";
import Icon from "src/components/assets/icons/icon";
import InlineMessage from "src/components/infographic/inlineMessage/InlineMessage";
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
  clearIcon?: boolean;
  clearClickHandler?: () => void;
  notValid?: boolean;
  errorMessage?: {
    testId?: string;
    errorText: string;
    subText: string;
  };
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
      onSecureClick,
      clearIcon,
      clearClickHandler,
      notValid,
      errorMessage
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
            className={classes.InputFieldInput}
          />
          <div className={classes.IconContainer}>
            {!!clearIcon && (
              <span
                id={`${testId}-1`}
                onClick={clearClickHandler}
                className={classes.InputFieldClear}
                style={!isSecure ? { marginLeft: "2.7rem" } : {}}
              >
                <Icon icon="system-close-grey" size={18} color="#DEDEDE" />
              </span>
            )}
            {!!isSecure && !!value && (
              <span
                id={`${testId}-0`}
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
        {!!notValid && (
          <div className={classes.InputFieldError}>
            <InlineMessage
              testId={errorMessage?.testId}
              errorText={errorMessage?.errorText ? errorMessage.errorText : ""}
              subText={errorMessage?.subText ? errorMessage.subText : ""}
            />
          </div>
        )}
      </div>
    );
  }
}

export default InputField;

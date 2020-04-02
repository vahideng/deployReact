import React, { Component, FormEvent, ChangeEvent } from "react";
import Paragraphs from "../assets/typography";
import classes from "./AmDropdown.module.css";
import Icon from "src/components/assets/icons/icon";
import InlineMessage from "src/components/infographic/inlineMessage/InlineMessage";
const { B_13_BLACK, R_15_BLACK } = Paragraphs;
interface Props {
  tacInput?: boolean;
  closeAfterSelect?: boolean;
  showDropdown: boolean;
  dropdownData: { value?: string; label?: string }[];
  testId?: string;
  value: any;
  type: string;
  label?: string;
  icon?: { name?: string; color?: string; size?: number };
  autoFocus?: boolean;
  isSecure?: boolean;
  onSecureClick?: () => void;
  handleChange: (
    event: ChangeEvent<HTMLInputElement>,
    testId?: string | undefined
  ) => void;
  arrowIcon?: boolean;
  clearClickHandler?: () => void;
  notValid?: boolean;
  errorMessage?: {
    testId?: string;
    errorText: string;
    subText: string;
  };
  disabled ?: boolean;
  minLength?: number;
  maxLength?: number;
  onBlur?: (event: FormEvent) => void;
  onFocus?: (event: FormEvent) => void;
}

class AmDropdown extends Component<Props, {}> {
  state = {
    showDropdown: false
  };

  clickHandler = () => {
    this.setState({ showDropdown: !this.state.showDropdown });
  };

  OnClickItemHandler = (item: any) => {
    this.props.handleChange(item, this.props.testId);
    if (this.props.closeAfterSelect) {
      this.setState({ showDropdown: !this.state.showDropdown });
    }
  };

  render() {
    const {
      dropdownData,
      testId,
      value,
      handleChange,
      label,
      icon,
      type,
      autoFocus,
      arrowIcon,
      notValid,
      errorMessage,
      minLength,
      maxLength,
      onBlur,
      onFocus,
      disabled,
      showDropdown,
      tacInput
    } = this.props;
    function changeHandler(event: ChangeEvent<HTMLInputElement>) {
      handleChange(event, testId);
    }
    function focusHandler(event: FormEvent) {
      !!onFocus && onFocus(event);
    }
    function blurHandler(event: FormEvent) {
      !!onBlur && onBlur(event);
    }

    const InputFieldIconDiv = [classes.InputFieldIconDiv];
    if (showDropdown) {
      InputFieldIconDiv.push(classes.InputFieldIconWithoutBorder);
    }
    return (
      <div className={classes.Container}>
        <div className={classes.InputFieldMain}>
          {!!label && (
            <B_13_BLACK className={classes.InputFieldLabel}>{label}</B_13_BLACK>
          )}
          <div
            className={InputFieldIconDiv.join(" ")}
            style={{ maxWidth: tacInput ? "34.81rem" : "31.6rem" }}
          >
            {!!icon && (
              <Icon
                className={classes.InputFieldIcon}
                icon={icon.name}
                color={!!icon.color ? icon.color : "#ff2626"}
                size={30}
              />
            )}

            <input
            disabled={disabled}
              autoComplete={"off"}
              minLength={minLength}
              maxLength={maxLength}
              onBlur={blurHandler}
              onFocus={focusHandler}
              style={
                autoFocus
                  ? {
                      width: tacInput ? "34.81rem" : "31.6rem",
                      paddingLeft: !icon ? "1.5rem" : "3.75rem",
                      boxShadow: "none"
                    }
                  : {
                      paddingLeft: !icon ? "1.5rem" : "3.75rem",
                      width: tacInput ? "34.81rem" : "31.6rem"
                    }
              }
              type={type}
              value={value}
              autoFocus={!!autoFocus ? autoFocus : false}
              onChange={changeHandler}
              className={classes.InputFieldInput}
            />

            {!!arrowIcon && !arrowIcon && (
              <span
                id={`${testId}-1`}
                onClick={this.clickHandler}
                className={classes.InputFieldClear}
                // style={!isSecure ? { marginLeft: "2.7rem" } : {}}
              >
                {!showDropdown ? (
                  <span className={classes.TextDropdownIcons}>
                    <Icon icon="arrowDown" size={18} color={"#000000"} />
                  </span>
                ) : (
                  <span className={classes.TextDropdownIcons}>
                    <Icon icon="arrowUp" size={18} color={"#000000"} />
                  </span>
                )}
              </span>
            )}
            
          </div>

          {showDropdown ? (
            <div className={classes.DropdownContent}>
              {!!dropdownData &&
                dropdownData.map(item => {
                  return (
                    <div onClick={() => this.OnClickItemHandler(item)}>
                      <R_15_BLACK>{item.value}</R_15_BLACK>{" "}
                    </div>
                  );
                })}
            </div>
          ) : null}

          {!!notValid && (
            <div className={classes.InputFieldError}>
              <InlineMessage
                testId={errorMessage?.testId}
                errorText={
                  errorMessage?.errorText ? errorMessage.errorText : ""
                }
                subText={errorMessage?.subText ? errorMessage.subText : ""}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default AmDropdown;
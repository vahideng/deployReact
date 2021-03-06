import React, { Component, FormEvent, ChangeEvent, CSSProperties } from "react";
import Paragraphs from "../assets/typography";
import classes from "./AmDropdown.module.css";
import Icon from "src/components/assets/icons/icon";
import InlineMessage from "src/components/infographic/inlineMessage/InlineMessage";
const { B_13_BLACK, R_15_BLACK } = Paragraphs;
interface Props {
  tacInput?: boolean;
  clickOnArrow?: (event: any) => void;
  showDropdown?: boolean;
  dropdownBackground?: string;
  dropdownData: { value?: string; label?: string }[];
  testId?: string;
  readOnly?: boolean;
  value: any;
  type: string;
  label?: string;
  icon?: { name?: string; color?: string; size?: number };
  autoFocus?: boolean;
  isSecure?: boolean;
  onSecureClick?: () => void;
  handleChange: (
    event: ChangeEvent<HTMLInputElement>,
    item: { value?: string; label?: string },
    testId?: string | undefined
  ) => void;
  inputHandleChange?: (
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
  disabled?: boolean;
  minLength?: number;
  maxLength?: number;
  onBlurDropdown?: () => void;
  onBlur?: (event: FormEvent) => void;
  onFocus?: (event: FormEvent) => void;
  inputClickHandler?: () => void;
  max?: string;
  placeholder?: string;
  containerStyle?: CSSProperties;
}

class AmDropdown extends Component<Props, {}> {
  state = {
    showDropdown: false,
  };

  clickHandler = () => {
    this.setState({ showDropdown: !this.state.showDropdown });
  };

  OnClickItemHandler = (event: any, item: any) => {
    this.props.handleChange(event, item, this.props.testId);
    // if (this.props.closeAfterSelect) {
    //   this.setState({ showDropdown: !this.state.showDropdown });
    // }
  };

  outSideClickHandler = (e: any) => {
    //@ts-ignore
    if (this.node.contains(e.target)) {
      console.log("click-inside");
    } else {
      if (typeof this.props.onBlurDropdown === "function")
        this.props.onBlurDropdown();
    }
  };

  componentWillMount() {
    document.addEventListener("mousedown", this.outSideClickHandler, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.outSideClickHandler, false);
  }
  render() {
    const {
      dropdownData,
      readOnly,
      dropdownBackground,
      testId,
      value,
      type,
      inputHandleChange,
      label,
      icon,
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
      tacInput,
      inputClickHandler,
      max,
      placeholder,
      clickOnArrow,
      containerStyle,
    } = this.props;
    function changeHandler(event: ChangeEvent<HTMLInputElement>) {
      if (inputHandleChange) {
        inputHandleChange(event, testId);
      }
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
    if (readOnly) {
      InputFieldIconDiv.push(classes.WithoutTheCursor);
    }
    const DropdownContent = [classes.DropdownContent];

    if (dropdownBackground) {
      DropdownContent.push(classes.backgroundDropdown);
    }

    const dropdownCOntent = () => {
      if (dropdownBackground && max) {
        return {
          backgroundColor: dropdownBackground,
          maxHeight: `${max}`,
        };
      } else if (dropdownBackground) {
        return { backgroundColor: dropdownBackground };
      } else if (max) {
        return { maxHeight: `${max}` };
      } else {
        return {
          backgroundColor: "white",
          maxHeight: `500px`,
        };
      }
    };
    return (
      //@ts-ignore
      <div ref={(node) => (this.node = node)}
        className={classes.Container}
        style={{
          ...containerStyle,
          maxWidth: tacInput ? "34.81rem" : "31.6rem",
        }}
      >
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
              readOnly={readOnly}
              placeholder={placeholder}
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
                      boxShadow: "none",
                    }
                  : {
                      paddingLeft: !icon ? "1.5rem" : "3.75rem",
                      width: tacInput ? "34.81rem" : "31.6rem",
                    }
              }
              type={type}
              value={value}
              autoFocus={!!autoFocus ? autoFocus : false}
              onChange={changeHandler}
              className={classes.InputFieldInput}
              onClick={inputClickHandler}
            />

            {!!arrowIcon && (
              <span
                id={`${testId}-1`}
                onClick={clickOnArrow}
                className={classes.InputFieldClear}
                // style={!isSecure ? { marginLeft: "2.7rem" } : {}}
              >
                {!showDropdown ? (
                  <span className={classes.TextDropdownIcons}>
                    <Icon icon="arrowDown" size={16} color={"#000000"} />
                  </span>
                ) : (
                  <span className={classes.TextDropdownIcons}>
                    <Icon icon="arrowUp" size={16} color={"#000000"} />
                  </span>
                )}
              </span>
            )}
          </div>

          {showDropdown ? (
            <div
              className={DropdownContent.join(" ")}
              style={dropdownCOntent()}
            >
              {!!dropdownData &&
                dropdownData.map((item) => {
                  return (
                    <div onClick={(e) => this.OnClickItemHandler(e, item)}>
                      <R_15_BLACK>{item.label}</R_15_BLACK>{" "}
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

import React, {
  Component,
  FormEvent,
  ChangeEvent,
  ReactNode,
  CSSProperties,
} from "react";

import Paragraphs from "../../assets/typography";
import classes from "./InputField.module.css";
import Icon from "src/components/assets/icons/icon";
import InlineMessage from "src/components/infographic/inlineMessage/InlineMessage";
import Tooltip from "src/components/tooltip/Tooltip";

import parser from 'ua-parser-js'



const { B_13_BLACK, R_13_GREY444 } = Paragraphs;
interface Props {
  responsive?: boolean;
  tacInput?: boolean;
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
  clearIcon?: boolean;
  clearClickHandler?: (event: any) => void;
  notValid?: boolean;
  errorMessage?: {
    testId?: string;
    errorText: string;
    subText: string;
  };
  autoComplete?: string;
  minLength?: number;
  onBlurTooltip?: () => void;
  maxLength?: number;
  onBlur?: (event: FormEvent) => void;
  onFocus?: (event: FormEvent) => void;
  onClearIconHover?: (event: MouseEvent, isHover?: boolean) => void;
  tipChildren?: ReactNode;
  bottomLabel?: string;
  bottomLabelStyle?: CSSProperties;
  placeholder?: string;
  showTooltip?: boolean;
  onTooltipClicked?: () => void;
  disabled?: boolean;
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
      onClearIconHover,
      clearIcon,
      clearClickHandler,
      notValid,
      errorMessage,
      autoComplete = 'nope',
      minLength,
      maxLength,
      onBlurTooltip,
      onFocus,
      tacInput,
      onBlur,
      tipChildren,
      responsive,
      bottomLabel,
      bottomLabelStyle,
      placeholder,
      showTooltip,
      onTooltipClicked,
      disabled,
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

    const inputStyle = [classes.InputFieldInput]
    
    function getAutoComplete() {
      switch (type) {
        case 'password':
          return 'new-password'
        default:
          return autoComplete
      }
    }

//@ts-ignore
    const result = parser.UAParser();
   const browserName = result.browser.name
   const browserVersion = result.browser.major
   const browserOS = result.os.name

   console.log("this app is running on =>> ",browserName,browserVersion,browserOS);
 // || (browserName === "Edge" && browserVersion <70
    function getInputType() {
      switch (type) {
        case 'password':
          inputStyle.push(classes.Password)
          if (navigator.userAgent.indexOf("Firefox") != -1 ||(browserName === "Edge" && browserVersion <70) && browserOS ==="windows" )  {


            inputStyle.push(classes.FireFox)
            console.log("firefox");
            
           
            }
          return 'text'
          
        default:
          return type
      }
    }

    let inputClasses = classes.InputFieldIconDiv;
    if (disabled) {
      inputClasses = `${classes.InputFieldIconDiv} ${classes.DisabledInput}`;
    }
    
   

    
    return (
      <div
        className={
          responsive ? classes.InputFieldMainFlex : classes.InputFieldMain
        }
      >
        {!!label && (
          <div className={classes.TitleDiv}>
            <B_13_BLACK className={classes.InputFieldLabel}>{label}</B_13_BLACK>
            {tipChildren && (
              <Tooltip
                onBlur={onBlurTooltip}
                onTooltipClicked={onTooltipClicked}
                showTooltip={showTooltip}
                tipChildren={tipChildren}
                rightAlign={true}
                responsive ={responsive}
              />
            )}
          </div>
        )}
        <div
          className={inputClasses}
          style={{
            maxWidth: tacInput ? "34.81rem" : "31.6rem",
            minWidth: responsive ? "" : "22.6rem",
          }}
        >
          {!!icon && (
            <div className={classes.InputFieldIcon}>
              <Icon
                icon={icon.name}
                color={!!icon.color ? icon.color : "#ff2626"}
                size={icon.size || 30}
              />
            </div>
          )}
          <input
            placeholder={placeholder}
            autoComplete={getAutoComplete()}
            minLength={minLength}
            maxLength={maxLength}
            onBlur={blurHandler}
            onFocus={focusHandler}
            style={
              autoFocus
                ? {
                    width: tacInput ? "34.81rem" : "100%",
                    paddingLeft: !icon ? "1.5rem" : "3.75rem",
                  }
                : {
                    paddingLeft: !icon ? "1.5rem" : "3.75rem",
                    width: tacInput ? "34.81rem" : "100%",
                  }
            }
            data-intention-type={type}
            type={getInputType()}
            value={value}
            autoFocus={!!autoFocus ? autoFocus : false}
            onChange={changeHandler}
            className={inputStyle.join(' ')}
          />

          {!!clearIcon &&
            !isSecure &&
            (onClearIconHover ? (
              <span
                id={`${testId}-1`}
                onClick={clearClickHandler}
                onMouseEnter={(e: any) => onClearIconHover(e, true)}
                onMouseLeave={(e: any) => onClearIconHover(e, false)}
                className={classes.InputFieldClear}
              >
                <Icon icon="system-close-grey" size={18} color="#DEDEDE" />
              </span>
            ) : (
              <span
                id={`${testId}-1`}
                onClick={clearClickHandler}
                className={classes.InputFieldClear}
              >
                <Icon icon="system-close-grey" size={18} color="#DEDEDE" />
              </span>
            ))}
          {!!isSecure && !!value && (
            <>
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
              {!!clearIcon &&
                (!!onClearIconHover ? (
                  <span
                    id={`${testId}-1`}
                    onClick={clearClickHandler}
                    className={classes.InputFieldClear}
                    style={{ right: "3.5rem" }}
                    onMouseEnter={(e: any) => onClearIconHover(e, true)}
                    onMouseLeave={(e: any) => onClearIconHover(e, false)}
                  >
                    <Icon icon="system-close-grey" size={18} color="#DEDEDE" />
                  </span>
                ) : (
                  <span
                    id={`${testId}-1`}
                    onClick={clearClickHandler}
                    className={classes.InputFieldClear}
                    style={{ right: "3.5rem" }}
                  >
                    <Icon icon="system-close-grey" size={18} color="#DEDEDE" />
                  </span>
                ))}
            </>
          )}
        </div>
        {bottomLabel && (
          <div className={classes.bottomLabel}>
            <R_13_GREY444 style={bottomLabelStyle}>{bottomLabel}</R_13_GREY444>
          </div>
        )}
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

import React, { Component } from "react";
import Select from "react-select";

import classes from "./TextDropdown.module.css";
import Icon from "src/components/assets/icons/icon";

interface Props {
  testId?: string;
  defaultValue?: string;
  options: { value: string; label: string }[];
  selectedOption: any;
  handleChange: any;
  placeHolder?: string;
  menuIsOpen?: boolean;
  themColor?: string;
  boldFont?: boolean;
}
interface State {}

const customStyles = (
  themColor: string | undefined,
  boldFont: boolean | undefined
) => ({
  control: (provided: any) => ({
    ...provided,
    border: "hidden",
    backgroundColor: "transparent",

    "&:hover": {
      borderColor: "red"
    },
    boxShadow: "none",
    cursor: "pointer"
  }),

  placeholder: () => ({
    color: !!themColor ? themColor : "#000000",
    fontWeight: !!boldFont ? 700 : 300,
    fontFamily: "Nunito Sans",
    fontSize : '13px'
  }),

  singleValue: (base: any) => ({
    ...base,
    color: !!themColor ? themColor : "#000000",
    fontWeight: !!boldFont ? 700 : 300
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: "transparent",
    display: "block",
    width: "100px",
    border: "0.1px solid #DEDEDE"
  }),

  menuList: (base: any) => ({
    ...base,
    backgroundColor: "#FFFFFF",
    boxSizing: "border-box",
    borderRadius: "8px"
  }),
  indicatorSeparator: () => ({
    display: "none"
  }),
  option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? "#EDEDED"
        : null,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? "black"
          ? "black"
          : "black"
        : "black",
      fontWeight: isSelected ? "bold" : "normal",
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor:
          !isDisabled && (isSelected ? data.color : "transparent")
      }
    };
  }
});

class TextDropdown extends Component<Props, State> {
  state = {
    menuIsOpen: !!this.props.menuIsOpen ? this.props.menuIsOpen : false
  };

  onchangeHandler = (object: any) => {
    this.props.handleChange(object);
    this.setState({ menuIsOpen: false });
  };
  onBlurHandler = () => {
    this.setState({ menuIsOpen: false });
  };

  render() {
    const {
      options,
      selectedOption,
      placeHolder,
      testId,
      themColor,
      defaultValue,
      boldFont
    } = this.props;
    return (
      <div
        className={`row ${classes.Container}`}
        onClick={() => this.setState({ menuIsOpen: !this.state.menuIsOpen })}
        id={`${testId}`}
      >
        <div className={`col-sm-8 ${classes.LeftSide}`} id={`${testId}-0`}>
          <Select
            defaultValue={defaultValue}
            components={{ DropdownIndicator: () => null }}
            placeholder={placeHolder || ""}
            value={selectedOption || defaultValue}
            onChange={object => this.onchangeHandler(object)}
            options={options}
            styles={customStyles(themColor, boldFont)}
            menuIsOpen={this.state.menuIsOpen}
            isSearchable={false}
            onBlur={() => this.onBlurHandler()}
          />
        </div>

        <div className={`col-sm-4 ${classes.RightSide}`} id={`${testId}-1`}>
          <div className={classes.Content}>
            {!this.state.menuIsOpen ? (
              <span className={classes.TextDropdownIcons}>
                <Icon
                  icon="arrowDown"
                  size={18}
                  color={!!themColor ? themColor : "#000000"}
                />
              </span>
            ) : (
              <span className={classes.TextDropdownIcons}>
                <Icon
                  icon="arrowUp"
                  size={18}
                  color={!!themColor ? themColor : "#000000"}
                />
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default TextDropdown;

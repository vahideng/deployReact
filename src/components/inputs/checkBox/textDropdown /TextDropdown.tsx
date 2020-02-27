import React, { Component } from "react";
import Select from "react-select";

interface Props {
  options: { value: string; label: string }[];
  selectedOption: any;
  handleChange: any;
  placeHolder?: string;
}
interface State {}

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    border: "hidden",
    backgroundColor: "transparent",

    "&:hover": {
      borderColor: "red"
    },
    boxShadow: "none"
  }),

  menu: (provided: any) => ({
    ...provided,
    backgroundColor: "transparent",
    boxShadow: "none",
    border: "none",
    display: "block"
  }),

  menuList: (base: any) => ({
    ...base,
    backgroundColor: "transparent",
    // kill the white space on first and last option
    padding: 10
  }),

  option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? "transparent"
        : null,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? "black"
          ? "black"
          : "black"
        : "black",
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor:
          !isDisabled && (isSelected ? data.color : "transparent")
      }
    };
  }
};

class TextDropdown extends Component<Props, State> {
  render() {
    const { options, selectedOption, handleChange, placeHolder } = this.props;
    return (
      <div style={{ width: 150 }}>
        <Select
          placeholder={placeHolder}
          value={selectedOption}
          onChange={handleChange}
          options={options}
          styles={customStyles}
        />
      </div>
    );
  }
}

export default TextDropdown;

import React, { Component } from "react";
import Select from "react-select";

interface Props {
  options: { value: string; label: string }[];
  selectedOption: any;
  handleChange: any;
  placeHolder?: string;
}
interface State {}

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
        />
      </div>
    );
  }
}

export default TextDropdown;

import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";
import Paragraphs from "../../assets/typography";
import classes from "./SearchBar.module.css";
import clearIcon from 'src/components/assets/common/clearIcone.svg';
import searchIcon from 'src/components/assets/common/search.svg';
import arrowUp from "src/components/assets/common/arrowUp.svg";
import arrowDown from "src/components/assets/common/arrowDown.svg";
import checkmark from "src/components/assets/common/checkmark.svg";
import closeIconWhite from "src/components/assets/common/closeIconWhite.svg";


const { R_13_BLACK } = Paragraphs;
interface Props {
  testId?: string;
  value: any;
  placeholder: string;
  autoFocus?: boolean;
  handleChange: (event: any, testId?: string | undefined) => void;
  searchIconClickHandler: () => void;
  clearClickHandler: () => void;

  showFilter?: boolean;
  filterOptions?: {
    label: string;
    value: string | number;
    selected: boolean;
  }[];
  onFilterOptionClick?: (filterOption: {
    label: string;
    value: string | number;
    selected: boolean;
  }) => void;
  selectedFilters?: {
    label: string;
    value: string | number;
    closeIconClickHandler: () => void
  }[];
}

interface State {
  inputFocused: boolean;
  filterExpanded: boolean;
}

class SearchBar extends Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      inputFocused: false,
      filterExpanded: false
    }
  }
  handleClickOutside = (evt: any) => {
      evt.preventDefault();
      this.setState({filterExpanded: false })
  };
  render() {
    const {
      testId,
      value,
      handleChange,
      autoFocus,
      placeholder,
      searchIconClickHandler,
      clearClickHandler,
      filterOptions,
      onFilterOptionClick,
      selectedFilters,
      showFilter
    } = this.props;

    const {
      // inputFocused
    } = this.state;

    return (
      <div className={classes.SearchBar}>
        <div className={classes.SearchBarContainer}>

          {
            showFilter && (
              <div className={this.state.filterExpanded ? classes.FilterContainerOpen : classes.FilterContainer}
                onClick={() =>
                  this.setState({ filterExpanded: !this.state.filterExpanded })
                } >
                <R_13_BLACK style={{ fontWeight: 600, marginRight: 5 }}>Filter</R_13_BLACK>
                <div>
                  {this.state.filterExpanded ? (
                    <img src={arrowUp} alt="arrowUp" />
                  ) : (
                      <img src={arrowDown} alt="arrowUp" />
                    )}
                </div>
              </div>
            )
          }

          <input
            className={classes.InputField}
            placeholder={placeholder}
            value={value}
            autoFocus={!!autoFocus ? autoFocus : false}
            onChange={event => {
              handleChange(event, testId);
            }}
            onFocus={() => this.setState({ inputFocused: true })}
            onBlur={() => this.setState({ inputFocused: false })}
          />

          <div className={classes.IconContainer}>
            {value !== '' && (
              <span
                onClick={clearClickHandler}
                className={classes.ClearIcon}
              >
                <img src={clearIcon} alt="clear" />
              </span>
            )}
            <span
              className={classes.InputFieldPassword}
              onClick={searchIconClickHandler}
            >
              <img src={searchIcon} alt="search" />
            </span>
          </div>

        </div>

        {this.state.filterExpanded && (
          <div style={{ position: 'relative' }}>
            <div className={classes.FilterDropdownContainer}>
              {
                filterOptions && filterOptions.map((item) =>
                  <div className={classes.FilterOptionContainer} onClick={()=> onFilterOptionClick && onFilterOptionClick(item)}>
                    <R_13_BLACK style={{ marginRight: 16 }}>{item.label}</R_13_BLACK>
                    <span className={classes.FilterOptionSelectedContainer} style={{ opacity: item.selected ? 1 : 0 }}>
                      <img src={checkmark} alt="checkmark" />
                    </span>
                  </div>
                )
              }
            </div>
          </div>
        )}

        {
          showFilter &&
          <div className={classes.SelectedFiltersContainer}>
            {
              selectedFilters && selectedFilters.map((item) =>
                <div className={classes.SelectedFilter}>
                  <div className={classes.SelectedFilterLabel}>
                    <R_13_BLACK>{item.label}</R_13_BLACK>
                  </div>
                  <span
                    onClick={item.closeIconClickHandler}
                    className={classes.SelectedFilterClearIcon}
                  >
                    <img src={closeIconWhite} alt="clear" />
                  </span>
                </div>
              )
            }

          </div>
        }



      </div>
    );
  }
}

export default onClickOutside(SearchBar);

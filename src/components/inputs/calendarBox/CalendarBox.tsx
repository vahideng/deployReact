import React, { useState, createRef, Fragment } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerOverride.css";
import classes from "./DatePicker.module.css";
import Icon from "src/components/assets/icons/icon";
import Paragraphs from "../../assets/typography";
import styled from "styled-components";
import InlineMessage from "src/components/infographic/inlineMessage/InlineMessage";

const { B_15_BLACK, B_13_WHITE, B_13_GREY969, B_13_BLACK } = Paragraphs;
interface Props {
  dateFormat?: string;
  disabled?: boolean;
  disableNextMonthArrow?: boolean;
  disableNextYearArrow?: boolean;
  disablePrevMonthArrow?: boolean;
  disablePrevYearArrow?: boolean;
  errorMessage?: {
    testId?: string;
    errorText: string;
    subText: string;
  };
  label?: string;
  maxDate?: Date;
  minDate?: Date;
  notValid?: boolean;
  onCalendarClose?: () => void;
  onCalendarOpen?: () => void;
  onChangeDate: (input: Date) => void;
  onChangeInput: (input: string) => void;
  onInputBlur?: () => void;
  onInputClick?: () => void;
  openToDate?: Date;
  placeholderText?: string;
  selectedColor?: string;
  selectedDate?: Date;
  shouldCloseOnSelect?: boolean;
  showCalendar?: boolean;
  testId?: string;
  value: string;
}

interface CustomHeaderProps {
  changeMonth(month: number): void;
  changeYear(year: number): void;
  date: Date;
  decreaseMonth(): void;
  decreaseYear(): void;
  increaseMonth(): void;
  increaseYear(): void;
  nextMonthButtonDisabled: boolean;
  nextYearButtonDisabled: boolean;
  prevMonthButtonDisabled: boolean;
  prevYearButtonDisabled: boolean;
}

interface CustomDayProps {
  dayOfMonth: number;
  date?: Date;
}

interface ArrowProps {
  disabled?: boolean;
  icon: string;
  onClick: () => void;
  size: number;
}

const Arrow = ({ onClick, icon, disabled, size }: ArrowProps) => {
  return disabled ? (
    <Icon icon={icon} size={size} color="#C4C4C4" />
  ) : (
    <div onClick={onClick} className={classes.OnClickHover}>
      <Icon icon={icon} size={size} color="#000000" />
    </div>
  );
};

const StyledDayDiv = styled.div`
  align-items: center !important;
  border-radius: 50%;
  color: #696969;
  display: flex !important;
  font-family: Nunito Sans;
  font-size: 13px;
  font-style: normal;
  font-weight: bold;
  height: 1.875rem !important;
  justify-content: center !important;
  line-height: 18px;
  text-align: center;
  width: 1.875rem !important;
`;

const CalendarBox: React.FC<Props> = ({
  dateFormat,
  disabled,
  disableNextMonthArrow,
  disableNextYearArrow,
  disablePrevMonthArrow,
  disablePrevYearArrow,
  errorMessage,
  label,
  maxDate,
  minDate,
  notValid,
  onCalendarClose,
  onCalendarOpen,
  onChangeDate,
  onChangeInput,
  onInputBlur,
  onInputClick,
  openToDate,
  placeholderText,
  selectedColor,
  selectedDate,
  shouldCloseOnSelect,
  showCalendar,
  testId,
  value
}: Props) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const customInputRef = createRef<HTMLInputElement>();
  const datePickerRef = createRef<DatePicker>();

  const noBorderBottom = isCalendarOpen ? classes.InputContainerOpen : "";
  const defaultDateFormat =
    dateFormat !== undefined ? dateFormat : "dd/MM/yyyy";

  const inputLabel =
    label !== undefined ? (
      <B_13_BLACK style={{ marginBottom: "1.25rem" }}>{label}</B_13_BLACK>
    ) : null;

  const handleChange = (date: Date) => {
    onChangeDate(date);
  };

  const handleGetYear = (date: any) => {
    return moment(date).year();
  };

  const CustomYearHeader = (props: CustomHeaderProps) => {
    const { date, decreaseYear, increaseYear } = props;
    return (
      <div className={classes.YearHeader}>
        <Arrow
          onClick={decreaseYear}
          size={26}
          icon="left"
          disabled={disablePrevYearArrow}
        />
        <B_15_BLACK>{handleGetYear(date)}</B_15_BLACK>
        <Arrow
          onClick={increaseYear}
          size={26}
          icon="Right1"
          disabled={disableNextYearArrow}
        />
      </div>
    );
  };

  const CustomMonthHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
    changeMonth
  }: CustomHeaderProps) => {
    const monthNumber = moment(date).month();

    return (
      <div className={classes.MonthHeader}>
        <Arrow
          onClick={decreaseMonth}
          size={22}
          icon="left"
          disabled={disablePrevMonthArrow}
        />

        <B_13_GREY969
          onClick={() => changeMonth(monthNumber - 1)}
          className={classes.Month}
        >
          {moment(date)
            .subtract(1, "month")
            .format("MMM")}
        </B_13_GREY969>
        <B_13_WHITE className={classes.SelectedMonth}>
          {moment(date).format("MMM")}
        </B_13_WHITE>
        <B_13_GREY969
          onClick={() => changeMonth(monthNumber + 1)}
          className={classes.Month}
        >
          {moment(date)
            .add(1, "month")
            .format("MMM")}
        </B_13_GREY969>
        <B_13_GREY969
          onClick={() => changeMonth(monthNumber + 2)}
          className={classes.Month}
        >
          {moment(date)
            .add(2, "month")
            .format("MMM")}
        </B_13_GREY969>
        <Arrow
          onClick={increaseMonth}
          size={22}
          icon="Right1"
          disabled={disableNextMonthArrow}
        />
      </div>
    );
  };

  const CustomDay = ({ dayOfMonth, date }: CustomDayProps) => {
    const normalDay = moment(date).format("DD/MM/YYYY");
    const selectedDay = moment(selectedDate).format("DD/MM/YYYY");

    const selectedDayStyle =
      selectedDate !== undefined && normalDay === selectedDay
        ? {
            backgroundColor:
              selectedColor !== undefined ? selectedColor : "#ff0006",
            color: "#ffffff"
          }
        : {};

    return (
      <div className={classes.TodayContainer}>
        <StyledDayDiv style={selectedDayStyle}>{dayOfMonth}</StyledDayDiv>
      </div>
    );
  };

  const handleInputChange = (event: any) => {
    onChangeInput(event.target.value);
  };

  const CustomInput = (
    <div className={`${classes.InputContainer} ${noBorderBottom}`}>
      <Icon icon="Calendar" color={"#ff0006"} size={30} />
      <input
        className={classes.Input}
        disabled={disabled}
        onBlur={onInputBlur}
        onChange={handleInputChange}
        placeholder={placeholderText}
        value={value}
      />
    </div>
  );

  const handleCalendarClose = () => {
    setIsCalendarOpen(false);
    if (onCalendarClose) {
      onCalendarClose();
    }
  };

  const handleCalendarOpen = () => {
    setIsCalendarOpen(true);
    if (onCalendarOpen) {
      onCalendarOpen();
    }
  };

  return showCalendar === false ? null : (
    <div className={classes.CalendarContainer} id={`${testId}`}>
      {inputLabel}
      <DatePicker
        customInput={CustomInput}
        customInputRef={`${customInputRef}`}
        dateFormat={defaultDateFormat}
        dayClassName={() => classes.NormalDay}
        disabled={disabled}
        formatWeekDay={nameOfDay => nameOfDay.substr(0, 3)}
        maxDate={maxDate}
        minDate={minDate}
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen}
        onChange={handleChange}
        onInputClick={onInputClick}
        openToDate={openToDate}
        popperContainer={({ children }) => (
          <div className={classes.Popper}>{children}</div>
        )}
        popperModifiers={{
          flip: {
            behavior: ["bottom"] // don't allow it to flip to be above
          },
          preventOverflow: {
            enabled: false // tell it not to try to stay within the view (this prevents the popper from covering the element you clicked)
          },
          hide: {
            enabled: false // turn off since needs preventOverflow to be enabled
          }
        }}
        popperPlacement="bottom-start"
        renderCustomHeader={props => {
          return (
            <Fragment>
              <CustomYearHeader {...props} />
              <CustomMonthHeader {...props} />
            </Fragment>
          );
        }}
        renderDayContents={(dayOfMonth, date) => (
          <CustomDay dayOfMonth={dayOfMonth} date={date} />
        )}
        ref={datePickerRef}
        selected={selectedDate}
        shouldCloseOnSelect={shouldCloseOnSelect}
        showPopperArrow={false}
        strictParsing={true}
      />
      {notValid === true && (
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
};

export default CalendarBox;

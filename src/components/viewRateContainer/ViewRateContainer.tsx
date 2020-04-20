import React, { useState } from "react";
import styled from "styled-components";
import Paragraphs from "../assets/typography";
// import classes from "./ViewRateContainer.module.css";
import Line from "src/components/line/Line";
import PrimaryButton from "src/components/buttons/primaryButton/PrimaryButton";
import Carousel from "src/components/carousel/Carousel";
import AmDropdown from "src/components/amDropdown/AmDropdown";
import Icon from "src/components/assets/icons/icon";

const { B_24_BLACK, B_13_BLACK, B_13_GREY444 } = Paragraphs;

interface Props {
  testId?: string;
  title?: string;
  rateTypeIcon?: {
    name: string;
    color?: string;
    size?: number;
  };
  dropdownBackground ?: string;
  rateTypeValue?: any;
  rateTypeList?: {
    value?: string | number;
    label?: string;
  }[];
  onRateTypeChange?: (value: any) => void;
  date?: string;
  dropDownProps?: any;
  viewRateComponent?: React.ReactNode;
  ads?: {
    children: React.ReactNode;
  }[][];
  carouselProps?: any;
  closeIcon?: React.ReactNode;
  onClose?: () => void;
  buttonTitle?: string;
  onButtonClick?: () => void;
  buttonProps?: any;
}

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

const ViewRateContainer: React.FC<Props> = ({
  testId,
  title,
  dropdownBackground,
  rateTypeIcon,
  rateTypeValue,
  rateTypeList,
  onRateTypeChange,
  date,
  dropDownProps,
  viewRateComponent,
  ads,
  carouselProps,
  closeIcon,
  onClose,
  buttonTitle,
  onButtonClick,
  buttonProps,
}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleRateTypeChange = (value: any) => {
    if (onRateTypeChange) {
      onRateTypeChange(value);
    }
  };

  return (
    <div id={testId} style={{ backgroundColor: "#fff", position: "relative" }}>
      <div onClick={handleClose}>
        {!closeIcon ? (
          <Icon
            icon="system-close-grey"
            size={16}
            color="#000"
            style={{
              position: "absolute",
              right: "2rem",
              top: "2rem",
              zIndex: 10,
            }}
          />
        ) : (
          closeIcon
        )}
      </div>
      <B_24_BLACK style={{ paddingTop: "2rem", textAlign: "center" }}>
        {title}
      </B_24_BLACK>
      <CenteredDiv
        style={{
          margin: "0 auto",
          width: "36.25rem",
        }}
      >
        <AmDropdown
          testId={`${testId}_dropdown`}
          label="Product Type"
          dropdownBackground ={dropdownBackground}
          dropdownData={rateTypeList}
          value={rateTypeValue}
          icon={rateTypeIcon || { name: "Clock", color: "#ff2626", size: 30 }}
          handleChange={(_e: any, item: any) => {
            handleRateTypeChange(item.value);
            setIsDropdownVisible(false);
          }}
          placeholder="Select test"
          clickOnArrow={() => {
            setIsDropdownVisible(!isDropdownVisible);
          }}
          inputClickHandler={() => {}}
          onBlur={() => {
            setIsDropdownVisible(false);
          }}
          showDropdown={isDropdownVisible}
          arrowIcon
          {...dropDownProps}
        />
      </CenteredDiv>
      <CenteredDiv
        style={{
          margin: "0 auto",
          width: "31.6rem",
          justifyContent: "flex-start",
          padding: 0,
          marginBottom: "1.18rem",
        }}
      >
        <B_13_GREY444>Effective Date</B_13_GREY444>
        <B_13_BLACK>&nbsp;{date}</B_13_BLACK>
      </CenteredDiv>
      <CenteredDiv
        style={{
          margin: "0 auto",
          width: "31.6rem",
          justifyContent: "flex-start",
          padding: 0,
          marginBottom: "1.81rem",
        }}
      >
        <Line style={{ width: "100%" }} />
      </CenteredDiv>
      <CenteredDiv
        style={{
          margin: "0 auto",
          width: "30rem",
          padding: 0,
        }}
      >
        {viewRateComponent}
      </CenteredDiv>
      <CenteredDiv
        style={{
          margin: "0 auto",
          padding: 0,
          marginTop: "2rem",
          width: "34.375rem",
        }}
      >
        <Carousel type="wide" items={ads} {...carouselProps} />
      </CenteredDiv>
      <CenteredDiv>
        <PrimaryButton
          width="25rem"
          onButtonClick={onButtonClick}
          title={buttonTitle}
          {...buttonProps}
        />
      </CenteredDiv>
    </div>
  );
};

export default ViewRateContainer;

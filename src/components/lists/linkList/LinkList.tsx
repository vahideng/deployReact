import React, { ReactNode } from "react";
import { Card, Accordion, useAccordionToggle } from "react-bootstrap";
import Icon from "src/components/assets/icons/icon";
// import InputField from "src/components/inputs/inputFields/InputFields";
// import PrimaryButton from "src/components/buttons/primaryButton/PrimaryButton";
import Paragraphs from "../../assets/typography";
import classes from "./LinkList.module.css";
const { SB_15_BLACK, R_15_BLACK } = Paragraphs;

declare type ListItem = {
  disabled?: boolean;
  read?: boolean;
  label: string;
  bold?: boolean;
  subtitle?: any[];
  toggleIcon?: any;
  backgroundColor?: string;
  leftBorderColor?: string;

  expandable?: boolean;
  expandableContent?: ReactNode;
  onListClick?: (item: any) => void;
  rightItem?: ReactNode;
  inputProps?: any;
};
interface Props {
  testId?: string;
  defaultActiveKey?: string;
  list?: ListItem[];
}

const LinkList: React.FC<Props> = ({ testId, list, defaultActiveKey }) => {
  return (
    <div id={testId} className={classes.Container}>
      <Accordion defaultActiveKey={defaultActiveKey}>
        {list &&
          list.map((item, index) => {
            // const {
            //   label,
            //   subtitle = [],
            //   bold,
            //   onListClick = () => {},
            //   disabled,
            //   inputProps,
            // } = item;
            console.log(`${index}`);
            return (
              <Card key={index}>
                <Card.Header>
                  <AccordionToggle item={item} eventKey={`${index}`} />
                </Card.Header>
                <Accordion.Collapse eventKey={`${index}`}>
                  <Card.Body>
                    {`${index}`}
                    {/* {expandableContent || (
                      <div className={classes.EditWrapper}>
                        <InputField
                          notValid={disabled}
                          errorMessage={errorMessage}
                          type="text"
                          clearClickHandler={clearClickHandler}
                          clearIcon={clearIcon}
                          label={label}
                          icon={icon}
                          value={value}
                          handleChange={handleChange}
                          {...inputProps}
                        />
                        <div className={primaryBtnStyle}>
                          <PrimaryButton
                            onButtonClick={onButtonClick}
                            title={buttonTitle}
                            titleColor={buttonTitleColor}
                            buttonColor={buttonColor}
                          />
                        </div>
                      </div>
                    )} */}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })}
      </Accordion>
    </div>
  );
};

const RightItem = ({ item, isOpen }: any) => {
  const { expandable, rightItem } = item;
  if (expandable) {
    return (
      <ExpandIcon
        testId="link-list-test-toggle"
        isOpen={isOpen}
        content={rightItem}
      />
    );
  }
  return (
    rightItem || (
      <span className={classes.ToggleIcon}>
        <Icon icon="Right1" size={22} color="#444444" />
      </span>
    )
  );
};

const AccordionToggle = ({ item, eventKey }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const {
    expandable,
    label,
    subtitle = [],
    bold,
    onListClick = () => {},
  } = item;
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log("totally custom!")
  );
  const handleToggle = (e: any) => {
    onListClick(item);
    if (expandable) {
      setIsOpen(!isOpen);
      decoratedOnClick(e);
    }
  };
  return (
    <div className={classes.HeaderWrapper} onClick={handleToggle}>
      <div className={classes.LabelWrapper}>
        {bold ? (
          <SB_15_BLACK>{label}</SB_15_BLACK>
        ) : (
          <R_15_BLACK>{label}</R_15_BLACK>
        )}
        {subtitle.map((sub: any, index: number) => {
          return <R_15_BLACK key={index}>{sub}</R_15_BLACK>;
        })}
      </div>
      <div className={classes.ToggleWrapper}>
        <RightItem item={item} isOpen={isOpen} />
      </div>
    </div>
  );
};

interface ExpandIconProps {
  testId?: string;
  data?: any;
  minimize?: boolean;
  eventKey?: any;
  content?: any;
  title?: string;
  isOpen?: boolean;
}

const ExpandIcon: React.FC<ExpandIconProps> = ({ testId, content, isOpen }) => {
  return (
    <div className={classes.Content} id={testId}>
      {isOpen ? (
        <span className={classes.ToggleIcon}>
          <Icon icon="system-close-grey" size={12} color="#444444" />
        </span>
      ) : (
        content || (
          <span className={classes.ToggleIcon}>
            <Icon icon="arrowDown" size={12} color="#444444" />
          </span>
        )
      )}
    </div>
  );
};

export default LinkList;

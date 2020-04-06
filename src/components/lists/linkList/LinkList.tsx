import React, { ReactNode, useState } from 'react';
import { Card, Accordion, useAccordionToggle } from 'react-bootstrap';
import Icon from 'src/components/assets/icons/icon';
import InputField from 'src/components/inputs/inputFields/InputFields';
import PrimaryButton from 'src/components/buttons/primaryButton/PrimaryButton';
import Paragraphs from '../../assets/typography';
import classes from './LinkList.module.css';
const { SB_15_BLACK, R_15_BLACK } = Paragraphs;

declare type ListItem = {
  disabled?: boolean;
  read?: boolean;
  label: string;
  bold?: boolean;
  subtitle?: any[];
  backgroundColor?: string;
  leftBorderColor?: string;
  leftIcon?: ReactNode;
  expandable?: boolean;
  expandableContent?: ReactNode;
  onListClick?: (item: any) => void;
  rightItem?: ReactNode;
  inputProps?: any[];
  buttonProps?: any;
};
interface LinkListProps {
  testId?: string;
  defaultActiveKey?: string;
  list?: ListItem[];
}

const LinkList: React.FC<LinkListProps> = ({
  testId,
  list,
  defaultActiveKey,
}) => {
  return (
    <div id={testId} className={classes.Container}>
      <Accordion defaultActiveKey={defaultActiveKey}>
        {list &&
          list.map((item, index) => {
            const {
              disabled,
              inputProps = [{}],
              buttonProps,
              expandableContent,
              leftBorderColor,
            } = item;

            return (
              <Card key={index} style={{ borderLeftColor: leftBorderColor }}>
                <Card.Header>
                  <AccordionToggle
                    item={item}
                    eventKey={`${index}`}
                    defaultActiveKey={defaultActiveKey}
                  />
                </Card.Header>
                <Accordion.Collapse eventKey={`${index}`}>
                  <Card.Body>
                    {!expandableContent ? (
                      <div className={classes.EditWrapper}>
                        {inputProps &&
                          inputProps.map((input: any, index: number) => {
                            return (
                              <div key={index} className={classes.InputWrapper}>
                                <InputField
                                  type="text"
                                  value=""
                                  notValid={false}
                                  handleChange={() => {}}
                                  clearClickHandler={() => {}}
                                  clearIcon={true}
                                  label=""
                                  icon={{ name: 'Lock' }}
                                  errorMessage={{
                                    errorText: 'something wrong',
                                    subText: 'detail error',
                                  }}
                                  {...{ notValid: disabled, ...input }}
                                />
                              </div>
                            );
                          })}
                        <div className={classes.primaryBtnStyle}>
                          <PrimaryButton
                            onButtonClick={() => {
                              window.alert('Button Clicked');
                            }}
                            title={'Update'}
                            titleColor={'#fff'}
                            buttonColor={{
                              top: '#BDBDBD',
                              bottom: '#BDBDBD',
                            }}
                            {...buttonProps}
                          />
                        </div>
                      </div>
                    ) : (
                      <>{expandableContent}</>
                    )}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })}
      </Accordion>
    </div>
  );
};

interface AccordionToggleProps {
  item: ListItem;
  eventKey?: string;
  defaultActiveKey?: string;
}

const AccordionToggle: React.FC<AccordionToggleProps> = ({
  item,
  eventKey,
  defaultActiveKey,
}) => {
  const {
    expandable,
    label,
    read,
    subtitle = [],
    bold,
    onListClick = () => {},
    leftIcon,
  } = item;
  const [isOpen, setIsOpen] = useState(defaultActiveKey === eventKey);
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log('totally custom!')
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
      {leftIcon && <div className={classes.LeftIconWrapper}>{leftIcon}</div>}
      <div className={classes.LabelWrapper}>
        <div className={classes.LabelInner}>
          {bold ? (
            <SB_15_BLACK>{label}</SB_15_BLACK>
          ) : (
            <R_15_BLACK>{label}</R_15_BLACK>
          )}
          {!read && <div className={classes.ReadNotification}></div>}
        </div>
        {subtitle.map((sub: any, index: number) => {
          return <R_15_BLACK key={index}>{sub}</R_15_BLACK>;
        })}
      </div>
      <div className={classes.ToggleWrapper}>
        <RightComponent item={item} isOpen={isOpen} />
      </div>
    </div>
  );
};

interface RightComponentProps {
  item: ListItem;
  isOpen?: boolean;
}

const RightComponent: React.FC<RightComponentProps> = ({ item, isOpen }) => {
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
  return rightItem ? (
    <>{rightItem}</>
  ) : (
    <span className={classes.ToggleIcon}>
      <Icon icon="Right1" size={22} color="#444444" />
    </span>
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
  if (content) {
    return <>{content}</>;
  }
  return (
    <div className={classes.Content} id={testId}>
      {isOpen ? (
        <span className={classes.ToggleIcon}>
          <Icon icon="system-close-grey" size={12} color="#444444" />
        </span>
      ) : (
        <span className={classes.ToggleIcon}>
          <Icon icon="arrowDown" size={12} color="#444444" />
        </span>
      )}
    </div>
  );
};

export default LinkList;

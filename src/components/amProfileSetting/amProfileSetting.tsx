import React from 'react';
import classes from './amProfileSetting.module.css';
import { Card, Accordion, useAccordionToggle, Col } from 'react-bootstrap';
import Icon from 'src/components/assets/icons/icon';
import Paragraphs from '../assets/typography';
import InputField from 'src/components/inputs/inputFields/InputFields';
import PrimaryButton from 'src/components/buttons/primaryButton/PrimaryButton';
import { MemoizedAmProfilePic as AmProfilePic } from 'src/components/amProfilePic/AmProfilePic';
const { B_32_BLACK, SB_15_BLACK, R_15_BLACK } = Paragraphs;
interface ProfileSettingProps {
  data: any;
  testId: string;
  eventKey?: any;
  content?: string;
  showIcon?: boolean;
  clearIcon: boolean;
  value: string;
  handleChange?: any;
  clearClickHandler: () => void;
  errorMessage?: {
    testId: string;
    errorText: string;
    subText: string;
  };
  label?: string;
  icon: { name: string };
  onButtonClick: () => void;
  buttonTitle: string;
  buttonTitleColor: string;
  buttonColor: { top: string; bottom: string };
  tipChildren?: any;
  profilePicImage?: string;
  ProfilePicBgColor: string;
  editIcon: React.ReactNode;
  onEditClickHandler: () => void;
  fullName: string;
}

const AmProfileSetting: React.FC<ProfileSettingProps> = ({
  data,
  testId,
  clearIcon,
  value,
  handleChange,
  clearClickHandler,
  errorMessage,
  label,
  icon,
  onButtonClick,
  buttonTitle,
  buttonTitleColor,
  buttonColor,
  tipChildren,
  profilePicImage,
  ProfilePicBgColor,
  editIcon,
  onEditClickHandler,
  fullName,
}) => {
  const {
    CardOuterContainer,
    CardBody,
    primaryBtnStyle,
    cardUserDetails,
    cardLastLogin,
    mainContainer,
  } = classes;

  return (
    <div className={mainContainer}>
      <Card className={CardOuterContainer}>
        <AmProfilePic
          testId={testId}
          profilePicImage={profilePicImage}
          ProfilePicBgColor={ProfilePicBgColor}
          editIcon={editIcon}
          onEditClickHandler={onEditClickHandler}
          fullName={fullName}
        />
        <div className={cardUserDetails}>
          <B_32_BLACK>Adam_1234</B_32_BLACK>
        </div>
        <div className={cardLastLogin}>
          <R_15_BLACK>Last login on 2 Feb 2020 at 03:06pm</R_15_BLACK>
        </div>
        <Card.Body className={CardBody}>
          {data.map((item: any, index: any) => {
            return (
              <Accordion key={index} id={`${testId}-0-${index}`}>
                <Card className={classes.CardContainer}>
                  <Card.Header className={classes.HeaderInside}>
                    <div style={{ alignItems: 'center' }} className="d-flex">
                      <Col
                        style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}
                        md={11}
                      >
                        <SB_15_BLACK> {item.profile_data.title}</SB_15_BLACK>
                        {!!item.profile_data.subtitle &&
                          item.profile_data.subtitle.map(
                            (_item: any, _index: any) => {
                              return (
                                <Col className={classes.RowContainer}>
                                  <R_15_BLACK>{_item.content}</R_15_BLACK>
                                </Col>
                              );
                            },
                          )}
                      </Col>

                      <Col
                        style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}
                        md={1}
                      >
                        <CustomToggle
                          eventKey={`${index}`}
                          content={item.profile_data.title}
                          showIcon={item.flag || item.profile_data.showIcon}
                        />
                      </Col>
                    </div>
                  </Card.Header>

                  <Accordion.Collapse eventKey={`${index}`} key={index}>
                    <Card.Body className={classes.CardBodyContent}>
                      <InputField
                        notValid={false}
                        errorMessage={errorMessage}
                        type="text"
                        clearClickHandler={clearClickHandler}
                        clearIcon={clearIcon}
                        label={label}
                        icon={icon}
                        value={value}
                        handleChange={handleChange}
                      />
                      <div className={primaryBtnStyle}>
                        <PrimaryButton
                          onButtonClick={onButtonClick}
                          title={buttonTitle}
                          titleColor={buttonTitleColor}
                          buttonColor={buttonColor}
                        />
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            );
          })}
        </Card.Body>
      </Card>
      {tipChildren}
    </div>
  );
};

interface Props {
  testId?: string;
  data?: any;
  minimize?: boolean;
  eventKey?: any;
  content?: string;
  title?: string;
  showIcon?: boolean;
}

const CustomToggle: React.FC<Props> = ({ eventKey, testId, showIcon }) => {
  const decoratedOnClick = useAccordionToggle(eventKey, () => null);
  const [isOpen, setIsOpen] = React.useState(false);

  const accordianClickHandler = (e: any) => {
    decoratedOnClick(e);
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={classes.Content}
      onClick={e => accordianClickHandler(e)}
      id={`${testId}-0`}
    >
      {showIcon ? (
        isOpen ? (
          <span className={classes.TransListIcon}>
            <Icon icon="system-close-grey" size={12} color="#444444" />
          </span>
        ) : (
          <span className={classes.TransListIcon}>
            <Icon icon="arrowDown" size={12} color="#444444" />
          </span>
        )
      ) : null}
    </div>
  );
};

export default AmProfileSetting;

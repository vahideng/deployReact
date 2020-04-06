import React from 'react';
import classes from './amProfileDetail.module.css';
import { Card, Accordion, useAccordionToggle, Col } from 'react-bootstrap';
import Icon from 'src/components/assets/icons/icon';
import Paragraphs from '../../components/assets/typography';
import InputField from 'src/components/inputs/inputFields/InputFields';
import PrimaryButton from 'src/components/buttons/primaryButton/PrimaryButton';
const { SB_15_BLACK, R_15_BLACK } = Paragraphs;
interface ProfileDetailProps {
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
}

const AmProfileDetail: React.FC<ProfileDetailProps> = ({
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
}) => {
  const { CardOuterContainer, CardBody, primaryBtnStyle } = classes;

  return (
    <Card className={CardOuterContainer}>
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
      id={testId}
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

export default AmProfileDetail;

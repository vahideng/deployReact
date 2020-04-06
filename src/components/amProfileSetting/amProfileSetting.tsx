import React, { ReactNode } from 'react';
import classes from './amProfileSetting.module.css';
import { Card, Accordion, useAccordionToggle, Col } from 'react-bootstrap';
import Icon from 'src/components/assets/icons/icon';
import Paragraphs from '../assets/typography';
import { MemoizedAmProfilePic as AmProfilePic } from 'src/components/amProfilePic/AmProfilePic';

const { B_32_BLACK, SB_15_BLACK, R_15_BLACK } = Paragraphs;

interface ProfileItemProps {
  profile_data: itemProps;
}

interface itemProps {
  title: string;
  showIcon: boolean;
  subtitle: contentType[];
  children?: ReactNode;
  showAccordion: boolean;
}

interface contentType {
  content: string;
}

interface ProfileSettingProps {
  testId: string;
  eventKey?: any;
  content?: string;
  showIcon?: boolean;
  clearIcon?: boolean;
  openAccordionIcon?: { name?: string; color?: string; size?: number };
  closeAccordionIcon?: { name?: string; color?: string; size?: number };
  tipChildren?: any;
  profilePicImage?: string;
  ProfilePicBgColor: string;
  editIcon: any;
  onEditClickHandler: () => void;
  fullName: string;
  data?: ProfileItemProps[];
}

const AmProfileSetting: React.FC<ProfileSettingProps> = ({
  data,
  testId,
  tipChildren,
  profilePicImage,
  ProfilePicBgColor,
  editIcon,
  onEditClickHandler,
  fullName,
  openAccordionIcon,
  closeAccordionIcon,
}) => {
  const {
    CardOuterContainer,
    CardBody,
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
                      {item.profile_data.showAccordion && (
                        <Col
                          style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}
                          md={1}
                        >
                          <CustomToggle
                            eventKey={`${index}`}
                            content={item.profile_data.title}
                            showIcon={item.flag || item.profile_data.showIcon}
                            openAccordionIcon={openAccordionIcon}
                            closeAccordionIcon={closeAccordionIcon}
                          />
                        </Col>
                      )}
                    </div>
                  </Card.Header>

                  <Accordion.Collapse eventKey={`${index}`} key={index}>
                    <Card.Body className={classes.CardBodyContent}>
                      {item.profile_data.children}
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
  openAccordionIcon?: { name?: string; color?: string; size?: number };
  closeAccordionIcon?: { name?: string; color?: string; size?: number };
}

const CustomToggle: React.FC<Props> = ({
  eventKey,
  testId,
  showIcon,
  openAccordionIcon,
  closeAccordionIcon,
}) => {
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
            <Icon
              icon={openAccordionIcon.name}
              size={openAccordionIcon.size}
              color={openAccordionIcon.color}
            />
          </span>
        ) : (
          <span className={classes.TransListIcon}>
            <Icon
              icon={closeAccordionIcon.name}
              size={closeAccordionIcon.size}
              color={closeAccordionIcon.color}
            />
          </span>
        )
      ) : null}
    </div>
  );
};

export default AmProfileSetting;

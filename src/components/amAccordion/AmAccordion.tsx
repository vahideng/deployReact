import React, { ReactNode } from 'react';
import classes from './AmAccordion.module.css';
import { Card, Accordion, useAccordionToggle, Col } from 'react-bootstrap';
import Icon from 'src/components/assets/icons/icon';
import Paragraphs from '../../components/assets/typography';
import AmListItem from '../amListItem/AmListItem';
import PrimaryButton from 'src/components/buttons/primaryButton/PrimaryButton';
const { SB_15_BLACK, R_13_GREY969 } = Paragraphs;

interface AccordionSettingProps {
  testId: string;
  data:
    {
      title: string;
      id: string | number;
      accordionOpenIcon?: { name: string; color: string, size: number };
      accordionCloseIcon?: { name: string; color: string, size: number };
      contentList:
        {
          id: string | number;
          title: string;
          leftIcon?: { name: string; color?: string, size?: number };
          status: { label?: string; icon?: ReactNode};
        }[];
      buttonContent?: {
        clickHandler: () => void;
        title: string;
        titleColor?: string;
        buttonColor?: {top: string, bottom: string};
        icon?: { name: string; color: string; size?: number };
      }
    }[]
}

const AmAccordion: React.FC<AccordionSettingProps> = ({
  data,
  testId
}) => {
  const { CardOuterContainer, primaryBtnStyle } = classes;

  return (
    <Card className={CardOuterContainer} id={testId}>
        {
          data.map((item: any, index: any) => {
          return (
            <Accordion key={`accordion-${item.id}-${index}`} id={item.id}>
              <Card className={classes.CardContainer}>
                <div className="d-flex">
                  <Col md={12} className={classes.noPad}>
                    <CustomToggle
                      eventKey={index}
                      testId={`accordionToggle-${item.id}-${index}`}
                      title={item.title}
                      showIcon={true}
                      closeIcon={item.accordionCloseIcon && <Icon icon={item.accordionCloseIcon.name} size={item.accordionCloseIcon.size || 18} color={item.accordionCloseIcon.color || "#444444"} />}
                      openIcon={item.accordionOpenIcon && <Icon icon={item.accordionOpenIcon.name} size={item.accordionOpenIcon.size || 18} color={item.accordionOpenIcon.color || "#444444"} />}
                    />
                  </Col>
                </div>

                <Accordion.Collapse eventKey={index} key={`accordionCollapse-${item.id}-${index}`} id={`accordionCollapse-${item.id}-${index}`}>
                  <Card.Body className={classes.CardBodyContent}>
                    {item.contentList && item.contentList.length > 0 && item.contentList.map((list: any, listIndex: any) => {
                        return (
                            <AmListItem
                              key={`accordionCollapseList-${list.id}-${listIndex}`}
                              testId={`accordionCollapseList-${list.id}-${listIndex}`}
                              title={list.title}
                              icon={list.leftIcon && <Icon icon={list.leftIcon.name} size={list.leftIcon.size|| 18} color={list.leftIcon.color || "#444444"} />}
                              status={list.status.icon ? list.status.icon : <R_13_GREY969>{list.status.label}</R_13_GREY969>}
                            />
                        )
                      })
                    }
                    {item.buttonContent && <div className={primaryBtnStyle}>
                        <PrimaryButton
                          onButtonClick={item.buttonContent.clickHandler}
                          title={item.buttonContent.title}
                          titleColor={item.buttonContent.titleColor || "#ffffff"}
                          buttonColor={item.buttonContent.buttonColor}
                          icon={item.buttonContent.icon}
                        />
                      </div>
                    }
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          );
        })
      }
    </Card>
  );
};

interface Props {
  testId?: string;
  data?: any;
  minimize?: boolean;
  eventKey?: any;
  title: string;
  showIcon?: boolean;
  closeIcon?: ReactNode;
  openIcon?: ReactNode;
}

const CustomToggle: React.FC<Props> = ({ eventKey, testId, showIcon, title, openIcon, closeIcon }) => {
  const decoratedOnClick = useAccordionToggle(eventKey, () => null);
  const [isOpen, setIsOpen] = React.useState(false);

  const accordianClickHandler = (e: any) => {
    decoratedOnClick(e);
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={classes.CardHeader}
      onClick={e => accordianClickHandler(e)}
      key={testId}
      id={testId}
    >
      <SB_15_BLACK>{title}</SB_15_BLACK>
      {showIcon ? (
        isOpen ? (
          <span>
            {openIcon || <Icon icon="arrowUp" size={18} color="#444444" />}
          </span>
        ) : (
          <span>
            {closeIcon || <Icon icon="arrowDown" size={18} color="#444444" />}
          </span>
        )
      ) : null}
    </div>
  );
};

export default AmAccordion;

import React, { ReactNode } from 'react';
import classes from './InputAccordian.module.css';
import { Card, Accordion, useAccordionToggle, Col } from 'react-bootstrap';
import Icon from 'src/components/assets/icons/icon';
import Paragraphs from '../assets/typography';
import LinkList from 'src/components/lists/linkList/LinkList';

const { SB_15_BLACK } = Paragraphs;

interface InputFieldAccordianProps {
  testId: string;
  cardStyle?: any;
  cardHeaderStyle?: any;
  cardHeaderInnerStyle?: any;
  cardBody?:any;
  accordionStyle?:any;
  data:{
    id:string;
    title:string;
    defaultActiveContentIndex?:string;
    content: {
      label:string;
      leftIcon:any;
      bold:boolean;
      
      onListClick:() => void;
      expandable:boolean;
      expandableContent:ReactNode;
      subtitle?:any;
      leftBorderColor?:string
    }[];
  }[]
  
}

const InputAccordian: React.FC<InputFieldAccordianProps> = ({
  data,
  testId,
  cardStyle,
  cardHeaderStyle,
  cardBody,
  accordionStyle,
}) => {
  const { CardOuterContainer } = classes;

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
                  <LinkList
                        testId={`link_list_sprint_3_test-${index}`}
                        defaultActiveKey={item.defaultActiveContentIndex}
                        accordionStyle={{padding:'0rem 1.5rem',...accordionStyle}}
                        cardBody={{padding:5,...cardBody}}
                        cardStyle={{border: 'none',margin:'0rem',backgroundColor:'#ffffff',borderBottom: '1px solid rgba(0,0,0,.125)',...cardStyle}}
                        cardHeaderStyle={{background: '#fff'
                        ,margin:'0rem',padding: '0rem',border:'none',...cardHeaderStyle}}
                        list={item.content}
                      />
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


export default InputAccordian;

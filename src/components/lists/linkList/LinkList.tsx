import React, { ReactNode, useState } from "react";
import { Card, Accordion } from "react-bootstrap";
import Icon from "src/components/assets/icons/icon";
import Paragraphs from "../../assets/typography";
import classes from "./LinkList.module.css";
const { B_15_BLACK, R_15_BLACK } = Paragraphs;
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
  expandableStatus?: boolean;
  expandableContent?: ReactNode;
  onListClick?: (item: any) => void;
  rightItem?: ReactNode;
  cardStyle?: any;
  cardHeaderStyle?: any;
  cardHeaderInnerStyle?: any;
  cardBody?: any;
  accordionStyle?: any;
};
interface LinkListProps {
  testId?: string;
  defaultActiveKey?: string;
  list?: ListItem[];
  cardStyle?: any;
  cardHeaderStyle?: any;
  cardHeaderInnerStyle?: any;
  cardBody?: any;
  accordionStyle?: any;
}
const LinkList: React.FC<LinkListProps> = ({
  testId,
  list,
  defaultActiveKey,
  cardStyle,
  cardHeaderStyle,
  cardHeaderInnerStyle,
  cardBody,
  accordionStyle,

}) => {
  const [activeKey, setActiveKey] = useState("")



  return (
    <div id={testId} className={classes.Container}>

      {list &&
        list.map((item, index) => {
          const { expandable, expandableContent, leftBorderColor } = item;

          return (
            <Accordion
              activeKey={item.expandableStatus ? index.toString() : null}
              style={{ ...accordionStyle }}
              onSelect={(activeKey: any) => setActiveKey(activeKey)
              }

            >
              <Card
                key={index}
                style={{
                  borderRadius: 0,
                  borderLeftColor: leftBorderColor,
                  ...cardStyle,
                  ...item.cardStyle,
                }}
              >
                <Card.Header
                  style={{ ...cardHeaderStyle, ...item.cardHeaderStyle }}
                  className={classes.CardHeader}
                >
                  <AccordionToggle
                    activeKey={activeKey}
                    item={item}
                    expandableStatus={item.expandableStatus}
                    eventKey={`${index}`}
                    defaultActiveKey={defaultActiveKey}
                    cardHeaderInnerStyle={cardHeaderInnerStyle}
                  />
                </Card.Header>
                {expandable ? (
                  <Accordion.Collapse

                    className={classes.AccordionCollapseWrapper}
                    eventKey={`${index}`}
                    style={{
                      backgroundColor: cardStyle && cardStyle.backgroundColor,
                    }}
                  >
                    <Card.Body style={{ ...cardBody, ...item.cardBody }}>
                      {expandableContent}
                    </Card.Body>
                  </Accordion.Collapse>
                ) : null}
              </Card>
            </Accordion>
          );
        })}

    </div>
  );
};

interface AccordionToggleProps {
  item: ListItem;
  eventKey?: string;
  defaultActiveKey?: string;
  cardHeaderInnerStyle?: any;
  activeKey?: string;
  expandableStatus?: boolean;
}

const AccordionToggle: React.FC<AccordionToggleProps> = ({
  item,
  eventKey,
  // defaultActiveKey,
  cardHeaderInnerStyle,
  activeKey,
  expandableStatus
}) => {
  const {

    label,
    read,
    subtitle,
    bold = true,
    onListClick = () => { },
    leftIcon,
  } = item;
  // const [isOpen, setIsOpen] = useState(defaultActiveKey === eventKey);
  let subT: any = ''
  if (expandableStatus) {
    subT = subtitle.map((sub: any, index: number) => <R_15_BLACK key={index}>{sub}</R_15_BLACK>)
  }

  // const decoratedOnClick = useAccordionToggle(eventKey, () => {
  //   console.log(eventKey, "eventkey");
  // }
  //);
  const handleToggle = (_e: any) => {

    onListClick(item);

  };
  return (
    <div
      className={classes.HeaderWrapper}

      style={{ ...cardHeaderInnerStyle, ...item.cardHeaderInnerStyle }}
    >
      {leftIcon && <div className={classes.LeftIconWrapper}>{leftIcon}</div>}
      <div className={classes.LabelWrapper}>
        <div className={classes.LabelInner}>
          {bold ? (
            <B_15_BLACK>{label}</B_15_BLACK>
          ) : (
              <R_15_BLACK>{label}</R_15_BLACK>
            )}
          {!read && <div className={classes.ReadNotification}></div>}
        </div>
        {subtitle ? subT : null}
      </div>
      <div onClick={handleToggle} className={classes.ToggleWrapper}>

        <RightComponent activeKey={activeKey} eventKey={eventKey} item={item} isOpen={expandableStatus} />
      </div>
    </div>
  );
};

interface RightComponentProps {
  item: ListItem;
  isOpen?: boolean;
  openAccordian?: string
  eventKey?: any;
  activeKey?: string
}

const RightComponent: React.FC<RightComponentProps> = ({ item, isOpen, eventKey, activeKey }) => {
  const { expandable, rightItem } = item;
  if (expandable) {
    return (
      <ExpandIcon
        testId="link-list-toggle"
        isOpen={isOpen}
        content={rightItem}
        eventKey={eventKey}
        activeKey={activeKey}
      />
    );
  }
  return rightItem ? (
    <>{rightItem}</>
  ) : (
      <span className={classes.ToggleIcon}>
        <Icon icon="Right1" size={22} color="#000" />
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
  activeKey?: any;
}
const ExpandIcon: React.FC<ExpandIconProps> = ({ testId, content, isOpen }) => {
  if (content) {
    return <>{content}</>;
  }
  return (
    <div className={classes.Content} id={testId}>
      {isOpen ? (
        <span className={classes.ToggleIcon}>
          <Icon
            icon="Fail-2"
            size={12}
            color="#000"
            style={{ marginRight: 7 }}
          />
        </span>
      ) : (
          <span className={classes.ToggleIcon}>
            <Icon icon="Edit" size={25} color="#000" />
          </span>
        )}
    </div>
  );
};
export default LinkList;

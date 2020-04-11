import React, { CSSProperties } from "react";
import { Col, Row } from "react-bootstrap";
import Paragraphs from "../assets/typography";
import classes from "./BoxContent.module.css";
import Icon from "../assets/icons/icon";

const { B_20_BLACK, B_13_BLACK, R_13_BLACK } = Paragraphs;

interface Props {
  content: { title: string; content: string; icon: string }[];
  link: { onLinkClick: () => void; label: string };
  style?: CSSProperties;
  tag: string;
  testId: string;
  title: string;
}

const BoxContent: React.FC<Props> = ({
  content,
  link,
  style,
  tag,
  testId,
  title
}: Props) => {
  return (
    <div id={`${testId}`} className={classes.Container} style={style}>
      <Col style={{ padding: "0" }}>
        <div>
          <div className={classes.Tag}>
            <p className={classes.TagText}>{tag}</p>
          </div>
          <B_20_BLACK>{title}</B_20_BLACK>
          <div className={classes.Content}>
            {content.map((item, index) => {
              return (
                <Row
                  className={classes.Item}
                  key={index}
                  id={`${testId}-${index}`}
                >
                  <div className={classes.OuterColor}>
                    <div className={classes.InnerColor}>
                      <Icon icon={item.icon} color="#FFFFFF" size={20} />
                    </div>
                  </div>
                  <Col
                    xs={8}
                    md={8}
                    style={{ padding: "0", marginLeft: "0.5rem" }}
                  >
                    <B_13_BLACK>{item.title}</B_13_BLACK>
                    <R_13_BLACK>{item.content}</R_13_BLACK>
                  </Col>
                </Row>
              );
            })}
          </div>
          {link === undefined ? null : (
            <p className={classes.Link} onClick={link.onLinkClick}>
              {link.label}
            </p>
          )}
        </div>
      </Col>
    </div>
  );
};

export default BoxContent;

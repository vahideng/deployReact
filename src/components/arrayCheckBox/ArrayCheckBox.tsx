import React, { CSSProperties, ReactNode, useState } from "react";
import classes from "./ArrayCheckBox.module.css";
import TextWithDetails from "../infographic/textWithDetails/TextWithDetails";
import Checkbox from "../inputs/checkBox/CheckBox";
import { Col, Row } from "react-bootstrap";

import Paragraphs from "../assets/typography";
import Icon from "../assets/icons/icon";

const { B_15_BLACK, R_13_GREY444 } = Paragraphs;

interface CheckBoxProps {
  content?: string[];
  contentStyle?: CSSProperties;
  isCheckboxChecked: boolean;
  name?: string;
  onCheckClick: (event: any, testId?: string | undefined) => void;
  title: string;
  titleStyle?: CSSProperties;
}

interface Props {
  data: CheckBoxProps[];
  logo?: ReactNode;
  testId?: string;
  title: string;
  titleStyle?: CSSProperties;
  containerStyle?: CSSProperties;
}

const ArrayCheckBox: React.FC<Props> = ({
  data,
  logo,
  testId,
  title,
  titleStyle,
  containerStyle,
}: Props) => {
  const [page, setPage] = useState(0);

  const numberOfPage = Math.ceil(data.length / 6);

  const handlePrevPage = () => {
    if (page !== 0) {
      setPage(page - 1);
    }
  };
  const handleNextPage = () => {
    if (page + 1 !== numberOfPage) {
      setPage(page + 1);
    }
  };

  const prevClass = page === 0 ? classes.PageDisabled : "";
  const nextClass = page + 1 === numberOfPage ? classes.PageDisabled : "";

  return (
    <Col className={classes.Container} style={containerStyle}>
      <header className={classes.TitleContainer}>
        {logo}
        <B_15_BLACK style={titleStyle}>{title}</B_15_BLACK>
      </header>
      <div className={classes.Content}>
        {data
          .slice(page * 6, page * 6 + 6)
          .map((item: CheckBoxProps, index: number) => {
            return (
              <Row className={classes.Item}>
                <Checkbox
                  children={<TextWithDetails {...item} />}
                  isChecked={item.isCheckboxChecked}
                  key={index}
                  name={item.name}
                  onCheckClick={item.onCheckClick}
                  size={30}
                  testId={`${testId}-${index}`}
                />
              </Row>
            );
          })}
      </div>
      {data.length <= 6 ? null : (
        <Row className={classes.Pagination}>
          <div
            className={`${classes.PaginationButton} ${prevClass}`}
            onClick={handlePrevPage}
          >
            <Icon color="#ffffff" icon="left" size={22} />
          </div>
          <R_13_GREY444
            style={{ marginLeft: "1rem", marginRight: "1rem" }}
          >{`${page + 1} of ${numberOfPage}`}</R_13_GREY444>
          <div
            className={`${classes.PaginationButton} ${nextClass}`}
            onClick={handleNextPage}
          >
            <Icon color="#ffffff" icon="Right1" size={22} />
          </div>
        </Row>
      )}
    </Col>
  );
};

export default ArrayCheckBox;

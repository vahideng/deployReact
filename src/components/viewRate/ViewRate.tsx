import React from "react";
import { Table } from "react-bootstrap";
import Paragraphs from "../assets/typography";
import classes from "./ViewRate.module.css";
const { R_13_GREY444, R_11_GREY444, R_13_BLACK, B_13_BLACK } = Paragraphs;

type Responsive = "sm" | "md" | "lg" | "xl";

interface TableProps {
  bordered?: boolean;
  borderless?: boolean;
  hover?: boolean;
  striped?: boolean;
  responsive?: boolean | Responsive;
  size?: string;
  variant?: string;
  bsPrefix?: string;
}

interface TableHeadingProps {
  style?: any;
  values?: string[];
}

interface Props {
  testId?: string;
  title?: {
    style?: any;
    content?: string;
  };
  subtitle?: {
    style?: any;
    content?: string;
  };
  data: {
    tableProps?: TableProps;
    headers: TableHeadingProps[];
    values: string[][];
  };
  height?: string;
  tableContainerStyle?: any;
  tableStyle?: any;
  tableHeadingStyle?: any;
  tableCellStyle?: any;
}

const ViewRate: React.FC<Props> = ({
  title,
  subtitle,
  testId,
  data,
  height,
  tableContainerStyle,
  tableStyle,
  tableHeadingStyle,
  tableCellStyle,
}) => {
  const { headers, values, tableProps } = data;
  return (
    <div className={classes.Container} id={testId}>
      {title.content && (
        <div className={classes.Title}>
          <R_13_GREY444 style={title.style}>{title.content}</R_13_GREY444>
        </div>
      )}
      {subtitle.content && (
        <div className={classes.Subtitle}>
          <R_11_GREY444 style={subtitle.style}>{subtitle.content}</R_11_GREY444>
        </div>
      )}
      <div
        className={classes.TableWrapper}
        style={{ height, ...tableContainerStyle }}
      >
        <Table
          className={classes.Table}
          style={tableStyle}
          borderless={true}
          {...tableProps}
        >
          <thead className={classes.ScrollTableHead}>
            <tr>
              {headers &&
                headers.map((header: any, i: number) => {
                  const { style, values } = header;
                  return (
                    <th
                      key={i}
                      className={classes.TableHeading}
                      style={tableHeadingStyle}
                    >
                      {values.map((h: string, ii: number) => {
                        return (
                          <div key={ii}>
                            <B_13_BLACK style={style}>{h}</B_13_BLACK>
                          </div>
                        );
                      })}
                    </th>
                  );
                })}
            </tr>
          </thead>
          <tbody className={classes.ScrollTableBody}>
            {values &&
              values.map((value: any, j: number) => {
                return (
                  <tr key={j} className={classes.ScrollTableBodyRow}>
                    {value &&
                      value.map((v: string, jj: number) => {
                        const { style } = headers[jj];
                        return (
                          <td
                            key={jj}
                            style={{
                              textAlign: style.textAlign,
                              ...tableCellStyle,
                            }}
                          >
                            <R_13_BLACK
                              className={classes.TableCell}
                              style={style}
                            >
                              {v}
                            </R_13_BLACK>
                          </td>
                        );
                      })}
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ViewRate;

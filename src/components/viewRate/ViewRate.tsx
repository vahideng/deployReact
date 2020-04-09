import React from 'react';
import { Table } from 'react-bootstrap';
import Paragraphs from '../assets/typography';
import classes from './ViewRate.module.css';
const { R_13_GREY444, R_11_GREY444, R_13_BLACK, B_13_BLACK } = Paragraphs;

type Responsive = 'sm' | 'md' | 'lg' | 'xl';

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
}

const ViewRate: React.FC<Props> = ({ title, subtitle, testId, data }) => {
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
      <Table className={classes.Table} borderless={true} {...tableProps}>
        <thead>
          <tr>
            {headers &&
              headers.map((header: any, i: number) => {
                const { style, values } = header;
                return (
                  <th key={i} className={classes.TableHeading}>
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
        <tbody>
          {values &&
            values.map((value: any, j: number) => {
              return (
                <tr key={j}>
                  {value &&
                    value.map((v: string, jj: number) => {
                      const { style } = headers[jj];
                      return (
                        <td key={jj} style={{ textAlign: style.textAlign }}>
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
  );
};

export default ViewRate;

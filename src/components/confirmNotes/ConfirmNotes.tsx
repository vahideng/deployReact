import React from 'react';
import Paragraphs from '../assets/typography';
import classes from './ConfirmNotes.module.css';
const { B_15_BLACK, R_15_BLACK, B_15_GREY969, R_15_GREY444 } = Paragraphs;

interface Props {
  testId?: string;
  disabled?: boolean;
  responsive?: boolean;
  width?: string;
  title?: {
    style?: any;
    content?: string;
  };
  body?: { content?: string; style?: any }[];
}

const ConfirmNotes: React.FC<Props> = ({ title, body, testId, disabled, responsive, width }) => {
  let containerCls = classes.Container
  if (responsive) {
    containerCls = `${classes.Container} ${classes.ContainerResponsive}`
  }
  const { style, content } = title;
  return (
    <div className={containerCls} id={testId} style={{width}}>
      {content && (
        <div className={classes.Title}>
          {disabled ? (
            <B_15_GREY969>{content}</B_15_GREY969>
          ) : (
            <B_15_BLACK style={style}>{content}</B_15_BLACK>
          )}
        </div>
      )}
      <div className={classes.Subtitle}>
        {body &&
          body.map((c: any, index: number) => {
            const { content, style } = c;
            return (
              <div key={index} className={classes.Content}>
                {disabled ? (
                  <R_15_GREY444>{`${index + 1}. ${content}`}</R_15_GREY444>
                ) : (
                  <R_15_BLACK style={style}>{`${
                    index + 1
                  }. ${content}`}</R_15_BLACK>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ConfirmNotes;

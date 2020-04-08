import React from 'react';
import Paragraphs from '../assets/typography';
import classes from './ConfirmNotes.module.css';
const { B_15_BLACK, R_15_BLACK } = Paragraphs;

interface Props {
  title?: {
    style?: any;
    content?: string;
  };
  body?: { content?: string; style?: any }[];
}

const ConfirmNotes: React.FC<Props> = ({ title, body }) => {
  const { style, content } = title;
  return (
    <div className={classes.Container}>
      {content && (
        <div className={classes.Title}>
          <B_15_BLACK style={style}>{content}</B_15_BLACK>
        </div>
      )}
      <div className={classes.Subtitle}>
        {body &&
          body.map((c: any, index: number) => {
            const { content, style } = c;
            return (
              <div key={index} className={classes.Content}>
                <R_15_BLACK style={style}>{`${
                  index + 1
                }. ${content}`}</R_15_BLACK>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ConfirmNotes;

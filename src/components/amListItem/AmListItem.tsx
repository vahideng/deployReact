import React, { ReactNode } from 'react';
import classes from './AmListItem.module.css';
import Paragraphs from '../../components/assets/typography';

const { SB_15_BLACK } = Paragraphs;

interface ListItemProps {
    testId: string;
    title: string;
    icon?: ReactNode;
    status?: ReactNode;
  }
  
const AmListItem: React.FC<ListItemProps> = ({ icon, testId, title, status }) => {
    return (
        <div className={classes.listItems} key={testId} id={testId}>
          <div>
            {icon && <span className={classes.spacer}>{icon}</span>}
            <SB_15_BLACK>{title}</SB_15_BLACK>
          </div>
          {status}
        </div>
    );
  };

export default AmListItem;
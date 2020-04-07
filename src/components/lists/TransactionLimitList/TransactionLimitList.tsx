import React from 'react';
import classes from './TransactionLimitList.module.css';
import Paragraphs from '../../assets/typography';
import Icon from 'src/components/assets/icons/icon';
import { Col, Row } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Notify } from '../../assets/common/notification';
const { R_15_BLACK, R_12_BLACK } = Paragraphs;

interface ITransactionLimitList {
  label: string;
  subDetail?: string;
  onClick: (item: ITransactionLimitList, index: number) => void;
  icon?: { name: string; size: number; color: string };
  rightLabelcolor?: string;
  allowRightLabelText?: boolean;
  rightLabel?: string;
  allowbtnWithIconText?: boolean;
  allowCardImg?: boolean;
  allowGreyTextCardImg?: boolean;
  allowGreyText?: boolean;
  notify?: boolean;
  cardImg?: string;
}

interface Props {
  list: ITransactionLimitList[];
  testId?: string;
  cardImgStyle?: {
    height: number;
    width: number;
  };
}

const TransactionLimitList: React.FC<Props> = ({
  list,
  testId,
  cardImgStyle,
}: Props) => {
  return (
    <div className={classes.ListContainer} id={`${testId}`}>
      {list &&
        list.map((item, index) => (
          <div
            className={classes.ItemContainer}
            id={`${testId}-${index}`}
            key={index}
            onClick={() => item.onClick(item, index)}
          >
            <Col className={classes.columnView}>
              <Row>
                {item.allowGreyTextCardImg &&
                  item.allowCardImg &&
                  !!item.cardImg && (
                    <Image
                      src={item.cardImg}
                      alt="Image"
                      rounded
                      style={cardImgStyle}
                      className={classes.TransactionImg}
                    />
                  )}

                <Col>
                  <Row>
                    <R_15_BLACK className={classes.itemLabel}>
                      {item.label}
                    </R_15_BLACK>
                    {item.notify && <Notify className={classes.notify} />}
                  </Row>
                  {item.allowGreyTextCardImg && item.allowGreyText && (
                    <R_12_BLACK style={{ marginTop: 4 }}>
                      {item.subDetail}
                    </R_12_BLACK>
                  )}
                </Col>
              </Row>
            </Col>

            {item.allowbtnWithIconText && item.allowRightLabelText && (
              <R_15_BLACK style={{ color: item.rightLabelcolor }}>
                {item.rightLabel}
              </R_15_BLACK>
            )}
            {item.allowbtnWithIconText && (
              <Icon icon="Right1" color="#000" size={28} />
            )}
          </div>
        ))}
    </div>
  );
};

export default TransactionLimitList;

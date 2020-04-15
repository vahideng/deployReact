import React, { ReactNode, CSSProperties } from "react";
import classes from "./FormContainer.module.css";
import Paragraphs from "../../assets/typography";
import Tooltip from "src/components/tooltip/Tooltip";
import Icon from "src/components/assets/icons/icon";
import StatusIcon from "src/components/assets/icons/statusIcon/StatusIcon";
import { Row } from "react-bootstrap";
const { B_14_WHITE, B_15_ORANGE_463, B_24_BLACK, R_15_BLACK } = Paragraphs;

interface Props {
  testId?: string;
  statusIcon?: {
    testId?: string;
    iconColor: {
      top: string;
      bottom: string;
    };
    icon?: any;
    image?: any;
  };
  headerText?: string;
  headerSubText?: string;
  headerTimeStamp?: string;
  label?: string;
  rightLabel?: {
    onClick?: () => void;
    style?: CSSProperties;
    label: string;
  };
  tooltip?: ReactNode;
  children?: ReactNode;
  disabled?: boolean;
}

const FormContainer: React.FC<Props> = ({
  children,
  label,
  rightLabel,
  statusIcon,
  tooltip,
  testId,
  headerText,
  headerSubText,
  headerTimeStamp,
  disabled = false
}) => {
  const rightLabelPointer: CSSProperties =
    rightLabel !== undefined && rightLabel.onClick !== undefined
      ? { cursor: "pointer" }
      : {};

 const disabledStyle: CSSProperties = disabled && { opacity: 0.5, position: "relative" } || {};

  return (
    <div style={disabledStyle}>
      {disabled && <div className={classes.Overlay}></div>}
      {!!statusIcon && (
        <div className={classes.FormContainerIconWrap}>
          <span className={classes.FormContainerStatusIcon}>
            <StatusIcon
              testId={statusIcon.testId}
              icon={!!statusIcon ? statusIcon.icon : ""}
              iconColor={{
                top: statusIcon.iconColor.top,
                bottom: statusIcon.iconColor.bottom
              }}
              image={!!statusIcon ? statusIcon.image : ""}
            />
          </span>
          <span>
            <Icon
              icon="popup-curve"
              color={"#FFFFFF"}
              size={58}
              style={{
                width: "36.31rem"
              }}
            />
          </span>
        </div>
      )}
      <div
        className={classes.FormContainerMain}
        id={testId}
        style={
          !statusIcon
            ? { borderRadius: "1rem" }
            : {
                width: "36.31rem",
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0
              }
        }
      >
        {
          <div className={classes.HeaderDiv}>
            {headerText && (
              <B_24_BLACK className={classes.Header}>{headerText}</B_24_BLACK>
            )}
            {headerSubText && (
              <R_15_BLACK>
                {headerSubText}
                {headerTimeStamp && <span> {headerTimeStamp}</span>}
              </R_15_BLACK>
            )}
          </div>
        }
        {!!label && (
          <div className={classes.FormContainerLabel} id={`${testId}-0`}>
            <Row className={classes.LeftLabel}>
              <B_14_WHITE>{label}</B_14_WHITE>
              {!!tooltip && (
                <span className={classes.FormContainerTooltip}>
                  <Tooltip
                    tipChildren={tooltip}
                    color="#FFFFFF"
                    testId={`${testId}-1`}
                  />
                </span>
              )}
            </Row>
            {rightLabel === undefined ? null : (
              <B_15_ORANGE_463
                onClick={rightLabel.onClick}
                style={{ ...rightLabelPointer, ...rightLabel.style }}
              >
                {rightLabel.label}
              </B_15_ORANGE_463>
            )}
          </div>
        )}

        <div className={classes.FormContainerCurve} id={testId}>
          <div className={classes.FormContainerContent}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;

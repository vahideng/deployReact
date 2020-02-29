import React, { ReactNode } from "react";
import classes from "./FormContainer.module.css";
import Paragraphs from "../../assets/typography";
const { B_14_WHITE } = Paragraphs;
interface Props {
  label?: string;
  children?: ReactNode;
}

const FormContainer: React.FC<Props> = ({ children, label }) => {
  return (
    <div className={classes.FormContainerMain}>
      {!!label && (
        <div className={classes.FormContainerLabel}>
          <B_14_WHITE>{label}</B_14_WHITE>
        </div>
      )}

      <div className={classes.FormContainerContent}>{children}</div>
    </div>
  );
};

export default FormContainer;

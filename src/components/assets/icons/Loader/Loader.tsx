import React from "react";
import classes from "./Loader.module.css";
import AmModal from "src/components/modals/Modal";

interface Props {
  testId?: string;
  isLoading: boolean;
}

const Loader = ({ testId, isLoading }: Props) => {
  return (
    <AmModal
      testId={"testId"}
      modalIsOpen={isLoading}
      modalChildren={
        <div id={testId}>
          <div className={classes.Loader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      }
    />
  );
};

export default Loader;

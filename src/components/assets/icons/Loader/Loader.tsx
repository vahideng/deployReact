import React from "react";
import classes from "./Loader.module.css";
import AmModal from "src/components/modals/Modal";
import Paragraphs from "../../typography";
import assets from "../../images";
const { R_20_WHITE } = Paragraphs;
interface Props {
  testId?: string;
  isLoading: boolean;
  loaderText?: string;
  onRequestClose?: () => void;
}

const Loader = ({ testId, isLoading, onRequestClose, loaderText }: Props) => {
  const onRequestCloseHandler = () => {
    return onRequestClose ? onRequestClose() : () => {};
  };
  const Spinner = () => {
    return (
      <div id={testId}>
        <div className={classes.Wrapper}>
          <div className={classes.Loader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <section className={classes.ImageDiv}>
              <img src={assets.common.amyIconPNG} />
            </section>
          </div>
          <footer>{loaderText && <R_20_WHITE>{loaderText}</R_20_WHITE>}</footer>
        </div>
      </div>
    );
  };
  return (
    <AmModal
      testId={`${testId}-0`}
      modalIsOpen={isLoading}
      onRequestClose={onRequestCloseHandler}
      modalChildren={<Spinner />}
    />
  );
};

export default Loader;

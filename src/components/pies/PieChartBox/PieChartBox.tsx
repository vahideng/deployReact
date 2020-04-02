import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import classes from "./PieChartBox.module.css";
import Paragraphs from "../../assets/typography";
const { R_13_BLACK, SB_13_GREY444 } = Paragraphs;
interface Props {
  title?: string;
  testId?: string;
  pieLabels?: string[];
  pieDataSets: { data: number[]; backgroundColor: string[] };
}

const PieChartBox: React.FC<Props> = ({
  pieLabels,
  pieDataSets,
  testId,
  title
}) => {
  const [hundred, setHundred] = useState(false);

  useEffect(() => {
    full(pieDataSets.data);
  }, []);

  const full = (num: any) => {
    const newNum = num.find((n: number) => n === 100);
    if (newNum === 100) {
      setHundred(true);
    }
  };

  return (
    <div className={classes.MainWrapper} id={`${testId}`}>
      <SB_13_GREY444 className={classes.Title}>{title}</SB_13_GREY444>
      <div className={classes.PieChartMain}>
        <div className={classes.PieChartDoughnut} id={`${testId}-0`}>
          <Doughnut
            width={90}
            height={90}
            data={{
              labels: pieLabels,
              datasets: [pieDataSets]
            }}
            options={{
              elements: {
                arc: {
                  borderWidth: hundred ? 0 : 1
                }
              },
              tooltips: { enabled: false },
              hover: { mode: null },
              defaultFontSize: "16px",
              maintainAspectRatio: false,
              legend: {
                display: false
              }
            }}
          />
        </div>
        <div className={classes.PieChartLabelDiv}>
          <div>
            {!!pieDataSets &&
              pieDataSets.backgroundColor.map((bg, index) => {
                return (
                  <div className={classes.PieChartLegendWr}>
                    <div
                      id={`${testId}-1`}
                      className={classes.PieChartLegend}
                      key={index}
                      style={{ backgroundColor: bg }}
                    ></div>
                  </div>
                );
              })}
          </div>
          <div>
            {!!pieLabels &&
              pieLabels.map((label, index) => {
                return (
                  <div
                    className={classes.PieChartLabel}
                    key={index}
                    id={`${testId}-2 ${index}`}
                  >
                    <R_13_BLACK>{label}</R_13_BLACK>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChartBox;

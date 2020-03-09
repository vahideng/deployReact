import React from "react";
import { Doughnut } from "react-chartjs-2";
import classes from "./PieChart.module.css";
import Paragraphs from "../assets/typography";
const { R_13_BLACK } = Paragraphs;
interface Props {
  pieLabels?: string[];
  pieDataSets: { data: number[]; backgroundColor: string[] };
}

const PieChart: React.FC<Props> = ({ pieLabels, pieDataSets }) => {
  return (
    <div className={classes.PieChartMain}>
      <div className={classes.PieChartDoughnut}>
        <Doughnut
          width={90}
          height={90}
          data={{
            labels: pieLabels,
            datasets: [pieDataSets]
          }}
          options={{
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
                <div
                  className={classes.PieChartLegend}
                  key={index}
                  style={{ backgroundColor: bg }}
                ></div>
              );
            })}
        </div>
        <div>
          {!!pieLabels &&
            pieLabels.map((label, index) => {
              return (
                <div className={classes.PieChartLabel} key={index}>
                  <R_13_BLACK>{label}</R_13_BLACK>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PieChart;

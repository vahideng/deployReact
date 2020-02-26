import React from "react";
import { Doughnut } from "react-chartjs-2";

interface Props {
  pieLabels?: string[];
  pieDataSets: { data: number[]; backgroundColor: string[] };
}

const PieChart: React.FC<Props> = ({ pieLabels, pieDataSets }) => {
  return (
    <div>
      <div style={{ width: 280 }}>
        <Doughnut
          data={{
            labels: pieLabels,
            datasets: [pieDataSets]
          }}
          options={{
            tooltips: { enabled: false },
            hover: { mode: null },
            defaultFontSize: "16px",

            legend: {
              display: true,
              position: "right",
              labels: {
                boxWidth: 13,
                boxBorderRadius: 7,
                fontFamily: "Nunito Sans",
                fontColor: "#000000"
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default PieChart;

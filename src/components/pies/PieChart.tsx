import React from "react";
import { Doughnut } from "react-chartjs-2";

interface Props {}

const PieChart: React.FC<Props> = () => {
  return (
    <div>
      <div style={{ width: 280 }}>
        <Doughnut
          data={{
            labels: ["Red", "Green", "Yellow"],
            datasets: [
              {
                data: [300, 50, 100],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
              }
            ]
          }}
          options={{
            defaultFontSize: "16px",
            legend: {
              display: true,
              position: "right",
              fontSize: 30,
              fontFamily: ""
            }
          }}
        />
      </div>
    </div>
  );
};

export default PieChart;

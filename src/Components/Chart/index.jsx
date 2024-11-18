import Chart from "react-google-charts";
import { useEffect, useState } from "react";

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);
  useEffect(() => {
    let dataCopy = [["Data", "Prices"]];
    if (historicalData.prices) {
      historicalData.prices.map((item) => {
        dataCopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
        ]);
      });
    }

    setData(dataCopy);
    console.log(data);
  }, [historicalData]);
  const options = {
   
    backgroundColor: "#2d1b53",
   
    chartArea: {
        backgroundColor: {
          fill: "#3a2270", 
        },
    },
    titleTextStyle: {
        color: "#ffffff",
        fontSize: 18,
        bold: true,
      },
    legend: {
      textStyle: {
        color: "#ffffff", 
      },
    },
    hAxis: {
       
        titleTextStyle: { color: "#e3e3e3", fontSize: 14 },
        textStyle: { color: "#e3e3e3" },
        gridlines: { color: "#444444" },
      },
      vAxis: {
        
        titleTextStyle: { color: "#e3e3e3", fontSize: 14 },
        textStyle: { color: "#e3e3e3" },
        gridlines: { color: "#444444" },
      },
      colors: ["#ff4646"], 
  };

  return <Chart chartType="LineChart" data={data} height="100%" legendToggle options={options} />;
};

export default LineChart;

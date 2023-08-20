import React, { useEffect } from "react";
import ApexCharts from "react-apexcharts";

export const DonutChart = () => {
  useEffect(() => {
    const getChartOptions = () => {
      return {
        series: [35.1, 23.5, 2.4, 5.4],
        colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
        chart: {
          height: 320,
          width: "100%",
          type: "donut",
        },
        // ... (rest of the options)
      };
    };

    const chartOptions = getChartOptions();

    if (document.getElementById("donut-chart") && ApexCharts) {
      const chart = new ApexCharts(
        document.getElementById("donut-chart"),
        chartOptions
      );
      chart.render();

      const checkboxes = document.querySelectorAll(
        '#devices input[type="checkbox"]'
      );

      const handleCheckboxChange = (event) => {
        const checkbox = event.target;
        if (checkbox.checked) {
          switch (checkbox.value) {
            case "desktop":
              chart.updateSeries([15.1, 22.5, 4.4, 8.4]);
              break;
            case "tablet":
              chart.updateSeries([25.1, 26.5, 1.4, 3.4]);
              break;
            case "mobile":
              chart.updateSeries([45.1, 27.5, 8.4, 2.4]);
              break;
            default:
              chart.updateSeries([55.1, 28.5, 1.4, 5.4]);
          }
        } else {
          chart.updateSeries([35.1, 23.5, 2.4, 5.4]);
        }
      };

      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", handleCheckboxChange);
      });

      return () => {
        chart.destroy();
        checkboxes.forEach((checkbox) => {
          checkbox.removeEventListener("change", handleCheckboxChange);
        });
      };
    }
  }, []);

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      {/* ... (rest of the JSX content) */}
      <div className="py-6" id="donut-chart"></div>
      {/* ... (rest of the JSX content) */}
    </div>
  );
};

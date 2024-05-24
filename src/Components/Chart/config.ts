import { ChartConfiguration, ChartType } from "chart.js"

export const doughnutConfig: ChartConfiguration = {
  type: "doughnut" as ChartType,
  data: {
    labels: ["جاوا اسکریپت", "Node.js", "پایتون"],
    datasets: [
      {
        data: [22, 20, 7], // Custom values here
        backgroundColor: [
          "#FF9800", // Orange
          "#4CAF50", // Green
          "#2196F3", // Blue
        ],
        borderColor: [
          "#F57C00", // Dark Orange
          "#388E3C", // Dark Green
          "#1976D2", // Dark Blue
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
}

export const lineConfig: ChartConfiguration = {
  type: "line" as ChartType,
  data: {
    labels: [2021, 2022, 2023, 2024],
    datasets: [
      {
        label: "فرانت اند",
        data: [4, 20, 37, 67],
        backgroundColor: "rgba(255, 152, 0, 0.2)",
        borderColor: "#F57C00",
        borderWidth: 1,
      },
      {
        label: "بک اند",
        data: [4, 10, 45, 55],
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        borderColor: "#388E3C",
        borderWidth: 1,
      },
      {
        label: "پایگاه داده",
        data: [1, 17, 22, 33],
        backgroundColor: "rgba(33, 150, 243, 0.2)",
        borderColor: "#1976D2",
        borderWidth: 1,
      },
      {
        label: "دواپس",
        data: [0, 2, 7, 27],
        backgroundColor: "rgba(255, 252, 220, 0.4)",
        borderColor: "#9e19d2",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
}

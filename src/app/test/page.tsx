'use client'
import * as React from 'react'
import { LineChart } from '@mui/x-charts/LineChart'

export default function DifferentLength() {
  return (
    <LineChart
      xAxis={[{ data: [2021, 2022, 2023, 2024] }]}
      series={[
        {
          data: [4, 20, 37, 67],
          valueFormatter: (value) => (value == null ? 'NaN' : value.toString()),
        },
        {
          data: [4, 10, 45, 55],
        },
        {
          data: [1, 17, 22, 33],
          valueFormatter: (value) => (value == null ? '?' : value.toString()),
        },
      ]}
      height={200}
      margin={{ top: 10, bottom: 20 }}
    />
  )
}

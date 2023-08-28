import { Typography } from '@mui/material';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer} from 'recharts';

function createData(time, amount) {
  return { time, amount }
};

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
]

export function Chart() {
  return (
    <>
      <Typography variant='h2'>
        Today
      </Typography>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey='time' />
          <YAxis>
            <Label angle={270} position='left'>
              Sales ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type='monotone'
            dataKey='amount'
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}

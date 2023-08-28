import { Typography } from '@mui/material'
import React from 'react'

export function Title({ data }) {
  return (
    <Typography component='h2' variant='h6' color='primary' gutterBottom>
      {data}
    </Typography>
  )
}

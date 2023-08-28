import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import { Title } from './Title'

export function Deposits() {
  return (
    <Box>
      <Title data={'Recent deposits'} />
      <Typography component='p' variant='h4'>
        $3232.04
      </Typography>
      <Typography color='text.primary' sx={{ flex: 1 }}>
        on 06 June, 2023
      </Typography>
      <Box>
        <Link color='primary'>
          View balance
        </Link>
      </Box>
    </Box>
  )
}

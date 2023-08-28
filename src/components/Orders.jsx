import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react';
import { Title } from './Title';

function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount }
};

const rows = [
  createData(
    0,
    '16 Mar, 2023',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA  **** 3719',
    312.44
  ),
  createData(
    1,
    '16 Mar, 2022',
    'Oleksandr Usyk',
    'Rare, MS',
    'VISA  **** 8524',
    785.45
  ),
  createData(
    2,
    '16 Mar, 2021',
    'First Second',
    'Gary, IN',
    'VISA  **** 2000',
    4800
  ),
  createData(
    3,
    '16 Mar, 2020',
    'Michael Jackson',
    'Long Branch, M3',
    'VISA  **** 2592',
    187.25
  )
]

export function Orders() {
  return (
    <Box>
      <Title data='Recent Orders' />
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship to</TableCell>
            <TableCell>Payment method</TableCell>
            <TableCell align='right'>Sale amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align='right'>{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  )
}

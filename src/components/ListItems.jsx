import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import { BarChart } from '@mui/icons-material';
import { Layers } from '@mui/icons-material';

export function ListItems() {
  return (
    <>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary='Dashboard' />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary='Orders' />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary='Customers' />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <BarChart />
        </ListItemIcon>
        <ListItemText primary='Reports' />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Layers />
        </ListItemIcon>
        <ListItemText primary='Integration' />
      </ListItemButton>
    </>
  )
}

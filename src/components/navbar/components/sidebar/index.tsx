import {
  Box,
  Grid,
  Drawer,
} from '@mui/material'
import React from 'react'
import MenuSidebar from './menu-sidebar'
import logo from '../..//../../assets/logo.png'
import Image from 'next/image'

export interface NavbarComponentProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarComponent = ({ open, setOpen }: NavbarComponentProps) => {
  return (
    <Drawer
      open={open}
      transitionDuration={{ enter: 400, exit: 400 }}
      onClose={() => setOpen(false)}
      variant="temporary"
      sx={{
        width: 330,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 330,
          borderRadius: '0px 30px 30px 0px',
          boxSizing: 'border-box',
          background: 'repeating-linear-gradient(#047857, #047857, #059669)',
          position: 'relative',
        },
      }}
    >
      <Grid className="flex items-center justify-center mt-5 mb-3">
        <Image src={logo} alt="grazziotin" width={130} height={130} priority />
      </Grid>
      <Box
        sx={{
          width: 330,
          overflow: 'auto',
          position: 'relative',
        }}
      >
        <MenuSidebar />
      </Box>
    </Drawer>
  )
}

export default React.memo(SidebarComponent)

import React from 'react'
import ContaUsuarioComponent from './usuario'
import { Box, Badge, AppBar, Toolbar, IconButton } from '@mui/material'
import { AccountCircle, Menu, Notifications } from '@mui/icons-material'
import { useRouter } from 'next/navigation'

export interface NavbarComponentProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NavbarComponent = ({ open, setOpen }: NavbarComponentProps) => {
  const router = useRouter();
  const [anchorConta, setAnchorConta] = React.useState<null | HTMLElement>(null)


  const handleClickConta = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorConta(event.currentTarget)
  }

  return (
    <Box>
      <AppBar position="fixed" className="!pr-0 !z-999 " id="navbar">
        <Toolbar className="bg-gradient-to-r from-emerald-700 to-emerald-800 !min-h-14 !h-14">
          <IconButton
            size="large"
            edge="start"
            sx={{ mr: 2 }}
            color="inherit"
            id="navbar-hamburguer"
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
          >
            <Menu fontSize='small' />
          </IconButton>
          <button
            id="navbar-logo"
            onClick={() => router.push('/')}
            className="w-32 h-14 "
          >
             <p className='font-bold text-2xl'>UPF</p>
          </button>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            color="inherit"
            id="navbar-notifications"
          >
            <Badge
              badgeContent={0}
              color="error"
            >
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            id="navbar-menu-user"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
            onClick={handleClickConta}
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <ContaUsuarioComponent
        anchorEl={anchorConta}
        setAnchorEl={setAnchorConta}
      />
      <div className="!min-h-14 !h-14" />
    </Box>
  )
}

export default React.memo(NavbarComponent)

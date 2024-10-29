import React from 'react'
import Menu from '@mui/material/Menu'
import { deleteCookie, getCookie } from 'cookies-next'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import {Logout } from '@mui/icons-material'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'

interface ContaUsuarioComponentsProps {
  anchorEl: HTMLElement | null
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
}

interface LoginInfo { password: string, username: string }

const ContaUsuarioComponent = ({
  anchorEl,
  setAnchorEl,
}: ContaUsuarioComponentsProps) => {
  const cookiesUser = getCookie('LOGIN_INFO')
  const user: LoginInfo = JSON.parse(cookiesUser ?? "")

  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }

  async function handleLogout() {
    setAnchorEl(null)
    localStorage.clear()
    deleteCookie('LOGIN_INFO')
    window.location.href = '/'
  }

  return (
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem sx={{ minWidth: '200px' }}>
          <Avatar className="!bg-grzprimary">U</Avatar>
          <p className="text-sm">{user?.username}</p>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <p className="text-sm">Sair </p>
        </MenuItem>
      </Menu>
  )
}
export default React.memo(ContaUsuarioComponent)

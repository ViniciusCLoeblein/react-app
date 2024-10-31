import {
  Drawer,
  Grid,
} from '@mui/material'
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
          background: '#047857',
          position: 'relative',
        },
      }}
    >
      <Grid className="flex items-center justify-center mt-5 mb-3">
        <Image src={logo} alt="grazziotin" width={130} height={130} priority />
      </Grid>
      <MenuSidebar />
    </Drawer>
  )
}
export default SidebarComponent

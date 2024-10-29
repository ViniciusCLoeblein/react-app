import React, { memo } from "react"
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"


const MenuSidebar:React.FC = () => {
  return (
    <List component="div" className="!bg-grzsecondary" disablePadding>
      <ListItemButton
        sx={{ pl: 4 }}
        key={''}
        onClick={() => {}
          // navigate(v.codLinkAplicacao)
        }
      >
        <ListItemIcon className="!text-white">
          <i className="material-icons"></i>
        </ListItemIcon>
        <ListItemText>
          <p className="text-[13.5px] text-white">AAAAAAAAAAA</p>
        </ListItemText>
      </ListItemButton>
    </List>
  )
}

export default memo(MenuSidebar)

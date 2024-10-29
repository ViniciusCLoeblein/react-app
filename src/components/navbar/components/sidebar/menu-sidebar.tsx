import React, { memo } from "react"
import { useRouter } from "next/navigation"
import { List, ListItemButton, ListItemText } from "@mui/material"


const MenuSidebar:React.FC = () => {
const router = useRouter()

  return (
    <List component="div" className="!bg-grzsecondary" disablePadding>
      <ListItemButton
        onClick={() =>
          router.push('/doguinho')
        }
      >
        <ListItemText>
          <p className="text-[13.5px] text-white">Imagem doguinho</p>
        </ListItemText>
      </ListItemButton>
      <ListItemButton
        onClick={() =>
          router.push('/doguinho')
        }
      >
        <ListItemText>
          <p className="text-[13.5px] text-white">Comidas</p>
        </ListItemText>
      </ListItemButton>
    </List>
  )
}

export default memo(MenuSidebar)

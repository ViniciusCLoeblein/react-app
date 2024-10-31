import { useRouter } from "next/navigation"
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material"


const MenuSidebar: React.FC = () => {
  const router = useRouter()

  return (
    <List disablePadding >
      <ListItem disablePadding>
        <ListItemButton className="!h-[45px] justify-center flex items-center"
          onClick={() => router.push('/doguinho')}
        >
          <ListItemText className="flex items-center">
            <p className="text-[13.55px] text-white !flex !w-full !pt-3">Imagem doguinho</p>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton className="!h-[45px] !w-full justify-center flex items-center"
          onClick={() => router.push('/comidas')}
        >
          <ListItemText className="flex items-center">
            <p className="text-[13.55px] text-white !flex !w-full !pt-3">Comidas</p>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    </List>
  )
}

export default MenuSidebar

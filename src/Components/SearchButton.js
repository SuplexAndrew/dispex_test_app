import {useActions} from "../Hooks/useActions";
import {useStore} from "react-redux";
import {Button} from "@mui/material";
import {useState} from "react";

export const SearchButton = () => {
  const store = useStore()
  const {getClients} = useActions()
  const [open, setOpen] = useState(false)
  store.subscribe(() =>
    setOpen(store.getState().address.selectedFlat !== ''))

  return (
    <Button sx={{m: 1, minWidth: 128, minHeight: 56}}
            variant="contained"
            disabled={!open}
            onClick={() => getClients(store.getState().address.selectedFlat.id)}>
      Поиск
    </Button>
  )
}

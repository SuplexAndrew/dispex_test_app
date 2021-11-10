import {useStore} from "react-redux";
import {Box} from "@mui/material";
import {SearchPanel} from "./SearchPanel";
import {ClientsTable} from "./ClientsTable";
import {ClientModal} from "./ClientModal";
import {useState} from "react";

export const Main = () => {
  const store = useStore()
  const [open, setOpen] = useState(false)

  store.subscribe(() => setOpen(store.getState().client.onEdit))

  return (
    <Box sx={{height: '100vh', background: 'linear-gradient(to right bottom, #f53d5f, #deb6d6)'}}>
      <SearchPanel/>
      <ClientsTable/>
      <ClientModal open={open}/>
    </Box>
  );
}
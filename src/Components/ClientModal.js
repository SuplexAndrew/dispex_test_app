import {Box, Button, Modal, TextField} from "@mui/material";
import {useState} from "react";
import {useStore} from "react-redux";
import {useActions} from "../Hooks/useActions";

const style = {
  display: 'inline-grid',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3
}

export const ClientModal = ({open}) => {
  const store = useStore()
  const {clientOperationAccept, clientOperationInterrupt, addClient, updateClient} = useActions()
  const [client, setClient] = useState(store.getState().client.selectedClient)
  store.subscribe(() => setClient(store.getState().client.selectedClient))

  const onSubmit = () => {
    const selectedClient = store.getState().client.selectedClient
    const action = selectedClient ? updateClient : addClient
    clientOperationAccept(() => action(client))
  }

  return (
    <Modal
      open={open}
      onClose={clientOperationInterrupt}
    >
      <Box sx={style}>
        <TextField sx={{m: 2}} variant="outlined" label='Имя' value={client.name}
                   onChange={(e) => setClient({...client, name: e.target.value})}/>
        <TextField sx={{m: 2}} variant="outlined" label='Телефон' value={client.phone}
                   onChange={(e) => setClient({...client, phone: e.target.value})}/>
        <TextField sx={{m: 2}} variant="outlined" label='Почта' value={client.email}
                   onChange={(e) => setClient({...client, email: e.target.value})}/>
        <Button sx={{mx: 2, my: 1}} variant="outlined"
                onClick={onSubmit}>Сохранить</Button>
      </Box>
    </Modal>
  )
}
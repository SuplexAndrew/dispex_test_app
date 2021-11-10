import * as React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton} from '@mui/material';

import {useStore} from "react-redux";
import {useState} from "react";
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import {useActions} from "../Hooks/useActions";

export const ClientsTable = () => {
  const store = useStore()
  const {updateClient, deleteClient} = useActions()
  const [clients, setClients] = useState([])
  store.subscribe(() => setClients(store.getState().client.clients))

  return (
    <TableContainer sx={{m: 3, width: '98%', height: '82vh'}} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Имя</TableCell>
            <TableCell>Телефон</TableCell>
            <TableCell>Почта</TableCell>
            <TableCell>Изменить</TableCell>
            <TableCell>Удалить</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client, index) =>
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{client.name !== '' ? client.name : '-'}</TableCell>
              <TableCell>{client.phone}</TableCell>
              <TableCell>{client.email !== '' ? client.email : '-'}</TableCell>
              <TableCell>
                <IconButton onClick={() => updateClient(client)}>
                  <UpdateIcon/>
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton onClick={() => deleteClient(client)}>
                  <DeleteIcon/>
                </IconButton>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
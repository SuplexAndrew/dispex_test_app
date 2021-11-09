import {useState} from "react";
import {useStore} from "react-redux";
import {useActions} from "../Hooks/useActions";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

export const StreetSelect = () => {
  const store = useStore()
  const {getStreets, selectStreet} = useActions()
  const [streetItems, setStreetItems] = useState([])
  const [selectedAddress, setSelectedAddress] = useState('')

  store.subscribe(() => setStreetItems(store.getState().address.streets))
  store.subscribe(() => setSelectedAddress(store.getState().address.selectedStreet))

  const onFirstOpen = () => {
    if (selectedAddress === '') {
      getStreets()
    }
  }

  return (
    <FormControl sx={{m: 1, minWidth: 180, background: '#eccd30', boxShadow: 4}}>
      <InputLabel>Улица</InputLabel>
      <Select value={selectedAddress}
              onOpen={onFirstOpen}
              onChange={(e) => selectStreet(e.target.value)}>
        {
          streetItems?.map((address) =>
            <MenuItem value={address} key={address.id}>{address.name}</MenuItem>)
        }
      </Select>
    </FormControl>
  )
}
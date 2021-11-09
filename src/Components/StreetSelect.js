import {useState} from "react";
import {useStore} from "react-redux";
import {useActions} from "../Hooks/useActions";
import {MenuItem, Select} from "@mui/material";

export const StreetSelect = () => {
  const store = useStore()
  const {getStreets, selectStreet} = useActions()
  const [streetItems, setStreetItems] = useState([])
  const [selectedAddress, setSelectedAddress] = useState('')
  // console.log(selectedAddress)
  store.subscribe(() => setStreetItems(store.getState().streets.items))
  store.subscribe(() => setSelectedAddress(store.getState().streets.selected))

  const onFirstOpen = () => {
    if (streetItems.length < 2) {
      getStreets()
    }
  }

  return (
    <div>
        <Select label='Адрес' value={selectedAddress}
                onOpen={onFirstOpen}
              onChange={(e) => selectStreet(e.target.value)}>
        {
          streetItems.map((address) =>
            <MenuItem value={address} key={address.id}>{address.name}</MenuItem>)
        }
      </Select>
    </div>
  )
}
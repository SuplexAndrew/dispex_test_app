import {useState} from "react";
import {useStore} from "react-redux";
import {useActions} from "../Hooks/useActions";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

export const FlatSelect = () => {
  const store = useStore()
  const {getFlats, selectFlat} = useActions()
  const [flatItems, setFlatItems] = useState([])
  const [selectedFlat, setSelectedFlat] = useState('')
  const [open, setOpen] = useState(false)

  store.subscribe(() =>
    setFlatItems(store.getState().address.flats))
  store.subscribe(() =>
    setSelectedFlat(store.getState().address.selectedFlat))
  store.subscribe(() =>
    setOpen(store.getState().address.selectedStreet !== '' && store.getState().address.selectedBuilding !== ''))

  const onFirstOpen = () => {
    const building = store.getState().address.selectedBuilding
    if (building?.id) {
      getFlats(building.id)
    }
  }
  return (
    <FormControl sx={{m: 1, minWidth: 100}} disabled={!open}>
      <InputLabel>Кв.</InputLabel>
      <Select value={selectedFlat}
              onOpen={onFirstOpen}
              onChange={(e) => selectFlat(e.target.value)}>
        {
          flatItems?.map((address) =>
            <MenuItem value={address} key={address.id}>{address.name}</MenuItem>)
        }
      </Select>
    </FormControl>
  )
}
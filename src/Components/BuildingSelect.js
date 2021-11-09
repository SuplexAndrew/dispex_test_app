import {useState} from "react";
import {useStore} from "react-redux";
import {useActions} from "../Hooks/useActions";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

export const BuildingSelect = () => {
  const store = useStore()
  const {getBuildings, selectBuilding} = useActions()
  const [buildingItems, setBuildingItems] = useState([])
  const [selectedBuilding, setSelectedBuilding] = useState('')
  const [open, setOpen] = useState(false)

  store.subscribe(() => setBuildingItems(store.getState().address.buildings))
  store.subscribe(() => setSelectedBuilding(store.getState().address.selectedBuilding))
  store.subscribe(() => setOpen(store.getState().address.selectedStreet !== ''))

  const onFirstOpen = () => {
    const street = store.getState().address.selectedStreet
    if (street?.id) {
      getBuildings(street.id)
    }
  }
  return (
    <FormControl sx={{m: 1, minWidth: 100, background: open ? '#eccd30' : '#d0d0d0', boxShadow: 4}} disabled={!open}>
      <InputLabel>Дом</InputLabel>
      <Select value={selectedBuilding}
              onOpen={onFirstOpen}
              onChange={(e) => selectBuilding(e.target.value)}>
        {
          buildingItems?.map((address) =>
            <MenuItem value={address} key={address.id}>{address.name}</MenuItem>)
        }
      </Select>
    </FormControl>
  )
}
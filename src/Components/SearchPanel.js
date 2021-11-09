import {StreetSelect} from "./StreetSelect";
import {BuildingSelect} from "./BuildingSelect";
import {useState} from "react";
import {useStore} from "react-redux";

export const SearchPanel = () => {
  const store = useStore()
  const [isBuildingOpen, setIsBuildingOpen] = useState(false)
  store.subscribe(() => setIsBuildingOpen(store.getState().address.selectedStreet !== ''))


  return (
    <div>
      <StreetSelect/>
      <BuildingSelect open={isBuildingOpen}/>
    </div>
  )
}
import {StreetSelect} from "./StreetSelect";
import {BuildingSelect} from "./BuildingSelect";
import {FlatSelect} from "./FlatSelect";

export const SearchPanel = () => {

  return (
    <div>
      <StreetSelect/>
      <BuildingSelect />
      <FlatSelect />
    </div>
  )
}
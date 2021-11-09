import {StreetSelect} from "./StreetSelect";
import {BuildingSelect} from "./BuildingSelect";
import {FlatSelect} from "./FlatSelect";
import {SearchButton} from "./SearchButton";
import {AppBar, Box, Toolbar} from "@mui/material";

export const SearchPanel = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar sx={{background: 'inherit'}} position="static">
        <Toolbar>
            <StreetSelect/>
            <BuildingSelect/>
            <FlatSelect/>
            <SearchButton/>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

import { Box, Grid } from "@mui/material";
import "./App.css";
import { PrimarySearchAppBar } from "./NavBar";
import { VerticalTabs } from "./SideBar";

function App() {
  return (
    <Grid>
      <PrimarySearchAppBar />
      <VerticalTabs />  
    </Grid>
  );
}

export default App;

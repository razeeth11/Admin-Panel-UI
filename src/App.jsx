import "./App.css";
import { PrimarySearchAppBar } from "./NavBar";
import { VerticalTabs } from "../SideBar";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <VerticalTabs />
      <PrimarySearchAppBar />
    </Box>
  );
}

export default App;

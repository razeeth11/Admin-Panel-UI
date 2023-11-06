import { Box } from "@mui/material";
import "./App.css";
import { PrimarySearchAppBar } from "./NavBar";
import { VerticalTabs } from "./SideBar";

function App() {
  return (
    <>
      <VerticalTabs />  
      <PrimarySearchAppBar />
    </>
  );
}

export default App;

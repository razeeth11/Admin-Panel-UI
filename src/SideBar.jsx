import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, CardContent, Grid, Stack } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabEdit = {
    color: "white",
    fontWeight: 300,
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100vh",
        marginTop: { xs: "55px", sm: "65px" },
        position: "fixed",
        width: "100%",
      }}
    >
      <Grid container>
        <Grid xs={3.5} md={2}>
          <Tabs
            orientation="vertical"
            variant={"scrollable"}
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              background: "#363740",
              height: "100vh",
              color: "white",
            }}
          >
            <Tab sx={tabEdit} label="Dashboard" {...a11yProps(0)} />
            <Tab sx={tabEdit} label="Tutor online" {...a11yProps(1)} />
            <Tab sx={tabEdit} label="Active subscription" {...a11yProps(2)} />
            <Tab sx={tabEdit} label="Earning/Spending" {...a11yProps(3)} />
          </Tabs>
        </Grid>
        <Grid xs={8.5} md={10}>
          <Box>
            <TabPanel value={value} index={0}>
              <DashBoardPanel />
            </TabPanel>
            <TabPanel value={value} index={1}>
              lorem1000
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item One
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              vitae.
            </TabPanel>
            <TabPanel value={value} index={3}>
              Item One
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              vitae.
            </TabPanel>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

function DashBoardPanel() {
  const dashOne = {
    textAlign: "center",
    fontWeight: 600,
    fontSize: "20px",
  };

  const dashTwo = {
    textAlign: "center",
    color: "#c2c2c2",
    fontSize: "16px",
  };

  return (
    <Grid container>
      <Grid xs={12}>
        <Card>
          <Grid container justifyContent="space-evenly">
            <Grid xs={12} sm={6} md={2}>
              <CardContent>
                <Typography sx={dashOne} component="div">
                  750K
                </Typography>
                <Typography sx={dashTwo} component="div">
                  Sale
                </Typography>
              </CardContent>
            </Grid>
            <Grid xs={12} sm={6} md={2}>
              <CardContent>
                <Typography sx={dashOne} component="div">
                  7,500
                </Typography>
                <Typography sx={dashTwo} component="div">
                  Cancels
                </Typography>
              </CardContent>
            </Grid>
            <Grid xs={12} sm={6} md={2}>
              <CardContent>
                <Typography sx={dashOne} component="div">
                  7,500
                </Typography>
                <Typography sx={dashTwo} component="div">
                  Total Earned
                </Typography>
              </CardContent>
            </Grid>
            <Grid xs={12} sm={6} md={2}>
              <CardContent>
                <Typography sx={dashOne} component="div">
                  7,500
                </Typography>
                <Typography sx={dashTwo} component="div">
                  Distributions
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

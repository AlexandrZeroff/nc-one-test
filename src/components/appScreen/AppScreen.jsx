import React, { useState } from "react";
import Favorites from "../favorites/Favorites";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const AppScreen = () => {
  const location = useLocation();
  const [id, setID] = useState(location.pathname.substring(1))
  console.log(location.pathname)

  return (
    <Box
      sx={{
        flexGrow: 1,
        id: "screen",
        boxSizing: "border-box",
        height: "calc(100vh - 6rem - 1px)",
        backgroundColor: "primary.contrastText",
      }}
    >
      <Grid container height="100%" columnSpacing={4}>
        <Grid item xs={4}>
          <Favorites />
        </Grid>
        <Grid item xs={8}>
          <Outlet context={{ id: id }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppScreen;

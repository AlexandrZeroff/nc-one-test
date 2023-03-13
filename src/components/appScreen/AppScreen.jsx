import React from "react";
import Favorites from "../favorites/Favorites";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Outlet } from "react-router-dom";
import { useStoreState } from "../../state";

const AppScreen = () => {

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
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppScreen;

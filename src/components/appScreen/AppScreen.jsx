import "./AppScreen.scss";
import React from "react";
import Favorites from "../favorites/Favorites";
import GoodsList from "../goodsList/GoodsList";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const AppScreen = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        id: "screen",
        paddingTop: "3rem",
        boxSizing: "border-box",
        height: "calc(100vh - 6rem - 1px)",
      }}
    >
      <Grid container height='100%' columnSpacing={4}>
        <Grid item xs={4}>
          <Favorites />
        </Grid>
        <Grid item xs={8}>
          <GoodsList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppScreen;

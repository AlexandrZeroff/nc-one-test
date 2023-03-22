import Favorites from "../Favorites/Favorites";
import Grid from "@mui/material/Grid";
import { Outlet } from "react-router-dom";
import { AppContainerStack } from "../../app/themeComponents";

const AppContainer = () => {
  return (
    <AppContainerStack>
      <Grid container height="100%" columnSpacing={4}>
        <Grid item xs={4}>
          <Favorites />
        </Grid>
        <Grid item xs={8}>
          <Outlet />
        </Grid>
      </Grid>
    </AppContainerStack>
  );
};

export default AppContainer;

import React from "react";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";

const Loading = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      className="Fullsize"
    >
      <Typography variant="h2" component="h2" color="secondary.main">
        Loading data...
      </Typography>
    </Stack>
  );
};

export default Loading;

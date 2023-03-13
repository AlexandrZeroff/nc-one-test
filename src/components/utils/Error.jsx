import React from "react";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

const Error = ({ error }) => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      className="Fullsize"
    >
      <Typography variant="h2" component="h2" color={red[600]}>
        Oops, something went wrong...
      </Typography>
      <Typography variant="p" component="p" color={red[600]}>
        {error}
      </Typography>
    </Stack>
  );
};

export default Error;

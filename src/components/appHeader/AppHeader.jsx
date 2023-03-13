import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import Stack from "@mui/material/Stack";

const AppHeader = () => {
  const { pathname } = useLocation();
  const title = pathname === "/" ? "Product List Page" : "Product Page";

  return (
    <Stack
      direction="row"
      justifyContent="end"
      alignItems="center"
      sx={{
        px: "2rem",
        height: "6rem",
        backgroundColor: "primary.main",
        borderBottom: "1px solid black",
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          textTransform: "uppercase",
        }}
        color="secondary.main"
      >
        {title}
      </Typography>
    </Stack>
  );
};

export default AppHeader;

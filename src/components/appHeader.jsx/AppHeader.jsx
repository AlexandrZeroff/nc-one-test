import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const AppHeader = () => {
  return (
    /*<section id="start">
      <div className="p-default header-wrapper flex">
        <h2>Product list page</h2>
      </div>
    </section>*/
    <Box
      sx={{
        px: "2rem",
        height: "6rem",
        backgroundColor: "primary.main",
        display: "flex",
        borderBottom: "1px solid black",
        alignItems: 'center',
        textTransform: 'uppercase'
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          ml: "auto",
        }}
        color="secondary.main"
      >
        Product List Page
      </Typography>
    </Box>
  );
};

export default AppHeader;

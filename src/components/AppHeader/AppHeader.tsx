import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import { AppHeaderStack } from "../../app/themeComponents";

const AppHeader = () => {
  const { pathname } = useLocation();
  const title = pathname === "/" ? "Product List Page" : "Product Page";

  return (
    <AppHeaderStack direction="row" justifyContent="end" alignItems="center">
      <Typography
        variant="h2"
        component="h2"
        color="secondary.main"
        className="Uppercase"
      >
        {title}
      </Typography>
    </AppHeaderStack>
  );
};

export default AppHeader;

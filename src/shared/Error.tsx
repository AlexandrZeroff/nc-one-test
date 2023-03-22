import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { APIError } from "../types/types";
import { AxiosError } from "axios";

type ErrorProp = {
  error: AxiosError | APIError;
};

const Error = ({ error }: ErrorProp) => {
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
      <Typography variant="body1" component="p" color={red[600]}>
        {error.message}
      </Typography>
    </Stack>
  );
};

export default Error;

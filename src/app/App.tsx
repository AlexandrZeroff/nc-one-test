import { ThemeProvider } from "@mui/material/styles";
import AppRouter from "./AppRouter";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;

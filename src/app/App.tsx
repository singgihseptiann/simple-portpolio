import { ThemeProvider } from "../context/theme.context";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;

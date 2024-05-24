import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { theme } from "./theme";
import "./App.css";
import { CSButton } from "../core/components/Button/CSButton.tsx";

function App() {
  return (
    <MantineProvider theme={theme}>
      <CSButton label="Test" variant="filled" />
    </MantineProvider>
  );
}

export default App;

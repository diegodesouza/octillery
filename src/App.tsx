import { MantineProvider } from '@mantine/core';
// import '@mantine/core/styles.css';
import './App.css'
import {CSButton} from "../core";
import {theme} from "./theme.tsx";

// const brand = useFetchBrand();
// const themes = useFetchThemes();

function App() {
    return (
        // <MantineProvider theme={themes[brand]}>
        <MantineProvider theme={theme}>
            <CSButton label="hello" variant="filled" />
        </MantineProvider>
    )
}

export default App

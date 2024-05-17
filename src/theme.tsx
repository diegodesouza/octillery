import { createTheme } from '@mantine/core';
// import "../build/scss/_variables.scss";

export const theme = createTheme({
    fontFamily: 'serif',
    primaryColor: 'ocean-blue',
    colors: {
        'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
    }
    // ... other theme override properties
});

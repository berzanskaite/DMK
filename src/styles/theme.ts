import { createTheme } from '@mui/material';

// palette #DCD7C4,#F8DDC2,#CB6A75,#7D6467,#D5AC74

const bakeryTheme = createTheme({
  palette: {
    primary: {
      main: '#D5AC74',
      light: '#DCD7C4',
      dark: '#332821',
      contrastText: '#ffffff',
    },

    manoSpalva: {
      main: '#CB6A75',
      light: '#e0a6ad',
      dark: '#6b2029',
    },

    background: {
      default: '#F8DDC2',
    },

  },
  typography: {
    fontFamily: 'Playfair Display',
  },
});

const bakeryThemeSection = createTheme(bakeryTheme, {
  mixins: {
    section: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      width: 800,
      margin: '40px 0',
    },
  },
});

export default bakeryThemeSection;

import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark', // black-based UI

    primary: {
      main: '#7C3AED', // violet / purple
    },

    secondary: {
      main: '#A3E635', // lime / bright green
    },

    background: {
      default: '#0B0B0F', // deep black
      paper: '#111118',   // cards, menus
    },

    text: {
      primary: '#FFFFFF',
      secondary: '#C7C7D1',
    },
  },

  typography: {
    fontFamily: `'Inter', 'Roboto', sans-serif`,
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 12,
  },
})

export default theme

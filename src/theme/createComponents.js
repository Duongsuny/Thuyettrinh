import {
  createTheme,
  filledInputClasses,
  inputLabelClasses,
  outlinedInputClasses,
  paperClasses,
  tableCellClasses
} from '@mui/material';

// Used only to create transitions
const muiTheme = createTheme();

export function createComponents(config) {
  const { palette } = config;

  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '3px',
        }
      },
      variants: [
        {
          props: { variant: "flat" },
          style: {
            backgroundColor: "white",
            color: "#12101A",
            width: '200px',
            margin: '20px',
            boxShadow: '0px 15px 15px 0px rgba(255, 255, 255, 0.15)',
            '&:hover': {
              backgroundColor: 'white', 
              color: "#12101A", 
            }
          }
        }, 
        {
          props: { variant: "second" },
          style: {
            backgroundColor: "transparent",
            color: "fcfcfb",
            width: '200px',
            margin: '20px',
            border: '1px solid white',
          }
        }, 
      ]
    }
  }
}
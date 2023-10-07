import { createTheme as createMuiTheme } from '@mui/material';


export function createTheme() {
  return createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1440
      }
    },
    shape: {
      borderRadius: 8
    },
    typography: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeightRegular: 400
    },
    palette: {
      primary: {
        main: "#5454FB"
      },
      secondary: {
        main: "#DD35A0"
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            backgroundColor: "white",
            color: "#212121",
            fontWeight: "bold",
            borderRadius: 4,
            disableRippe: true,
            height: "40px",
            width: "150px",
            textTransform: "none",
            boxShadow: "0px 10px 10px 0px rgba(255, 255, 255, 0.20)",

            '&:hover': {
              backgroundColor: "white",
              boxShadow: "0px 10px 10px 0px rgba(255, 255, 255, 0.20)",
            }
          },

          outlined: {
            backgroundColor: "transparent",
            color: "white",
            fontWeight: "bold",
            borderRadius: 4,
            disableRippe: true,
            height: "40px",
            width: "150px",
            textTransform: "none",
            borderColor: "white",
            '&:hover': {
              backgroundColor: "transparent",
              borderColor: "white",
              borderWidth: "1.5px",
              color: "rgba(255, 255, 255, 1)",
              boxShadow: " 0 5px 15px rgba(145, 92, 182, .4)"
            }
          }
        }
      }
    }
  });
}
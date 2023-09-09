import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#0052cc',
          },
          secondary: {
            main: '#edf2ff',
        },
        error:{
            main:red.A400
        },
        background:{
            default: '#008b8b',
        },
        text:{
            primary: '#nnnnnn',
        },
    },

    overides:{
        MuiButton: {
            outlined: {
                border: '2px solid red'
            }
        }
    }
})

export default theme;
import { createMuiTheme } from "@material-ui/core";

const currentTheme = createMuiTheme({
    typography: {
        h3: {
            color: "#846a6a",
            fontFamily: "Playfair Display, serif",
            letterSpacing: "8px",
        },
        h4: {
            fontSize: "1.68rem",
            fontFamily: 'verdana',
            
        },
        h6: {
            fontSize: "0.7rem",
            fontFamily: 'verdana',
        },
        h5: {
            fontSize: "1.2rem",
        },

      },
    palette: {
        primary: {
        main: "#000"
        },
        secondary: {
            main: "#7f9fac"
        },
        background:{
            paper: "#a2999e",
        },
        text: {
          primary: "#000",
          secondary: "#fff",
      },
  }
})

export default currentTheme;


// Using breakpoints
// currentTheme.typography.h4 = {
//     fontSize: "1.68rem",
//     [currentTheme.breakpoints.down('md')]: {
//         fontSize: '2.4rem',
//     },
// }



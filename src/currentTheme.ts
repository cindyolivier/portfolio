import { createMuiTheme } from "@material-ui/core";

const currentTheme = createMuiTheme({
    typography: {
        h3: {
            color: "#000000",
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


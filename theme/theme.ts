import { createTheme } from "@mui/material/styles";
import { Theme as MuiTheme } from "@mui/material";

declare module "@emotion/react" {
  export interface Theme extends MuiTheme {}
}

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 1011,
      lg: 1280,
      xl: 1400,
    },
  },
  palette: {
    primary: {
      main: "#CAF861",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: {
            variant: "contained" as "contained",
            color: "primary" as "primary",
          },
          style: {
            backgroundColor: "#CAF861",
            color: "black",
            "&:hover": {
              backgroundColor: "#CAF861",
            },
          },
        },
        {
          props: {
            variant: "outlined" as "outlined",
            color: "primary" as "primary",
          },
          style: {
            borderColor: "#CAF861",
          },
        },
      ],
    },
  },
});

theme = {
  ...theme,
  typography: {
    ...theme.typography,
    h1: {
      fontSize: 158,
      lineHeight: "128px",
      fontWeight: 400,
      fontFamily: "Nikkyou Sans",
      [theme.breakpoints.down("md")]: {
        fontSize: 48,
        fontWeight: 700,
        lineHeight: "56px",
      },
    },
    h2: {
      fontSize: 48,
      lineHeight: "56px",
      fontWeight: 400,
      fontFamily: "Nikkyou Sans",
      [theme.breakpoints.down("md")]: {
        fontSize: 40,
        fontWeight: 700,
        lineHeight: "48px",
      },
    },
    h3: {
      fontSize: 40,
      lineHeight: "48px",
      fontWeight: 400,
      fontFamily: "Nikkyou Sans",
    },
    h4: {
      fontSize: 32,
      lineHeight: "40px",
      fontWeight: 400,
      fontFamily: "Nikkyou Sans",
    },
    h5: {
      fontSize: 24,
      lineHeight: "32px",
      fontWeight: 400,
      fontFamily: "Nikkyou Sans",
    },
    h6: {
      fontSize: 16,
      lineHeight: "24px",
      fontWeight: 400,
      fontFamily: "Nikkyou Sans",
    },
    body1: {
      fontSize: 16,
      lineHeight: "24px",
      fontWeight: 400,
      fontFamily: "Rubik",
    },
    caption: {
      fontSize: 20,
      lineHeight: "32px",
      fontWeight: 400,
      fontFamily: "Rubik",
    },
  },
};

export default theme;

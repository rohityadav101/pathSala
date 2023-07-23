import _ from "lodash";
import { colors, createMuiTheme, responsiveFontSizes } from "@material-ui/core";

import typography from "./typography";

const baseOptions = {
  direction: "ltr",
  typography,
  overrides: {
    MuiPickersModal: {
      dialogRoot: {
        padding: "0px",
      },
    },
    MuiDialog: {
      paperWidthSm: {
        maxWidth: "460px",
      },
    },
    MuiFormControl: {
      root: {
        width: "100%",
      },
    },
    paperWidthSm: {
      maxWidth: "600px",
      padding: "20px 30px",
    },
    MuiCollapse: {
      wrapperInner: {
        paddingLeft: "44px",
      },
    },

    MuiInputAdornment: {
      positionStart: {
        paddingLeft: "14px",
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: "none",
      },
    },
    MuiFormHelperText: {
      contained: {
        marginLeft: "0px !important",
        // color: "rgb(255, 125, 104) !important",
      },
    },
    MuiPickersCalendarHeader: {
      iconButton: {
        backgroundColor: "transparent",
      },
    },
    MuiPickerDTToolbar: { toolbar: { borderRadius: "8px 8px 0px 0px" } },

    MuiButton: {
      root: {
        "&.Mui-disabled": {
          color: "rgb(112, 107, 107)",
        },
      },
      contained: {
        fontSize: "14px !important",
        fontWeight: "300",
        borderRadius: "5px",
        // whiteSpace: "pre",
        padding: "10px 20px",
      },
      outlined: {
        fontSize: "14px !important",
        fontWeight: "300",
        borderRadius: "50px",
        whiteSpace: "pre",
        padding: "10px 20px",
      },
      outlinedSizeLarge: {
        padding: "7px 35px",
      },
      containedSizeLarge: {},
    },
  },
};

const themesOptions = [
  {
    name: "DARK",
    overrides: {
      MuiMenu: {
        list: {
          outline: "0",
          background: "#ffffff",
        },
      },
      MuiDialog: {
        paper: {
          margin: "32px",
          background: "#ffffff",
          padding: "20px 30px",
          position: "relative",
          overflowY: "auto",
          // color: "#fff !important",
          borderRadius: "10px !important",
          "@media(max-width:767px)": {
            padding: "10px",
          },
        },
      },
      MuiSwitch: {
        switchBase: {
          color: "#FF6600 !important",
        },
        track: {
          backgroundColor: "#a8a4a4",
          opacity: "1",
        },
      },
      MuiInputBase: {
        root: {
          color: "#000",
          height: "50px",

          background: "#fff",
          borderRadius: "10px !important",
          height: "40px !important",
        },
      },
      MuiSelect: {
        icon: {
          color: "#000",
        },
      },
      MuiTableHead: {
        root: {
          background: "transparent",
          borderTop: "1px solid #b3aaaa",
        },
      },
      MuiTableBody: {
        root: {
          background:
            "linear-gradient(152.97deg, rgb(255 255 255 / 65%) 0%, rgb(62 60 60 / 27%) 100%)",
        },
      },
      MuiTableRow: {
        root: {
          borderBottom: "1px solid #b3aaaa",
          "&:hover": {
            backgroundColor: "#00000017",
          },
          "&:last-child": {
            borderBottom: "none",
          },
        },
      },
      MuiTableCell: {
        head: {
          padding: "8px 16px",
          fontWeight: "400",
        },
      },
      MuiDivider:{
        root:{
          backgroundColor:"#f1f1f1"
        }},
      MuiButton: {
        containedPrimary: {
          backgroundColor: "#3E53A0",
          borderRadius: "100px",
          color: "#fff",
          fontSize: "14px",
          fontWeight: "600",
          
          lineHeight: " 21px",
          padding: "10px 12px",

          "&:hover": {
            color: "#000",
            background: "transparent",
            boxShadow:
              "0 1px 0 0 #3E53A0, 0 -1px 0 0 #3E53A0, 1px 0 0 0 #3E53A0, -1px 0 0 0 #3E53A0, 1px -1px 0 0 #3E53A0, -1px 1px 0 0 #3E53A0, 1px 1px 0 0 #3E53A0, -1px -1px 0 0 #3E53A0",
            backgroundColor: "transparent",
          },
        },

        containedSecondary: {
          borderRadius: "10px",
          backgroundColor: "#fff",
          borderRadius: "100px",
          color: "#9DA9B9",
          fontSize: "14px",
          fontWeight: "600",
          border: "2px solid #72849AB2",
          lineHeight: " 21px",
          padding: "10px 12px",
          "&:hover": {
            color: "#fff",
            background:"#3E53A0",
          },
        },

        contained: {
          "&.Mui-disabled": {
            backgroundColor: "rgba(0, 0, 0, 0.03) ",
          },
        },
        outlinedPrimary: {
          color: "#000",
          border: "1px solid #000 !important",
          "&:hover": {
            color: "#fff",
            boxShadow: "none !important",
            backgroundColor:
              "linear-gradient(180deg, #FDA645 0%, #FF00CD 100%)",
            // backgroundColor: "#51ACED !important",
            // border: "1px solid #51ACED !important",
          },
        },
      },
      MuiPickersCalendarHeader: {
        dayLabel: { color: "#000" },
      },
      MuiPickersClockNumber: { clockNumber: { color: "#000" } },
      MuiPickersDay: {
        day: {
          color: "#000",
        },
      },

      MuiPaginationItem: {
        page: {
          "&.Mui-selected": {
            backgroundColor: "rgb(162 162 162 / 37%)",
          },
        },
        root: {
          color: "#000",
        },
      },
      MuiPaper: {
        root: { color: "#000" },
        elevation2: {
          position: "relative",
          zIndex: "999",
          overflow: "hidden",
          padding: "10px",
          boxShadow: "0px 4px 4px 0px #00000040",
          borderRadius: "30px !important",
          backgroundColor: "#fff",
          // "@media(max-width:767px)": {
          //   padding: "20px !important",
          // },
        },
      },
      MuiIconButton: {
        root: {
          color: "#000000",
        },
      },

      MuiOutlinedInput: {
        inputMultiline: {
          padding: "1px !important",
        },
        root: {
          background:"#fff",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
           
            boxShadow: "none",
            borderColor: "#3E53A0 !important",
          },
        },
        notchedOutline: {
        
          borderColor: "#E6EBF1 ",
        },
        input: {
          borderRadius: "10px",
          color: "#000",
          padding: "16px 14px",
          "&:-webkit-autofill": {
            "-webkit-background-clip": "text !important",
            // transitionDelay: "9999s",
            "caret-color": "transparent",
            "-webkit-box-shadow": "0 0 0 100px transparent inset",
            "-webkit-text-fill-color": "#000",
          },
          "&:-internal-autofill-selected": {
            color: "#fff",
          },
        },
      },
    },
    typography: {
      fontFamily: "'Saira', sans-serif",
    },
    palette: {
      background: {
        card: "linear-gradient(152.97deg, rgb(168 164 164 / 10%) 0%, rgb(66 64 64 / 19%) 100%)",
        tab: "#fff",
        header: "#fff",
        default: "#F5F5F5",
        price: "#fef7fa",
        pricename: "#fef7fa",
        blackCard: "#fef7fa",
        tablehead: "#fef7fa",
      },
      primary: {
        main: "#000000", //black
      },
      secondary: {
        main: "#000000", //black
        icons: "#009900", //white
      },
      text: {
        primary: "#000", //black
        secondary: "#000", //white
        gray: "#000",
        graydark: "#000",
        white: "#000",
      },
    },
  },

];

export const createTheme = (config = {}) => {
  let themeOptions = themesOptions.find((theme) => theme.name === config.theme);

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOptions] = themesOptions;
  }

  let theme = createMuiTheme(
    _.merge({}, baseOptions, themeOptions, { direction: config.direction })
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};

import { createTheme } from '@mui/material/styles';
export const STYLES = {
  borderRadius: {
    input: 32,
    default: 16,
    card: '1.5rem',
  },
  fontWeight: {
    regular: 400,
    semiBold: 600,
    bold: 700,
  },
};

const BASE_OPTIONS = {
  typography: {
    // fontFamily: ['Roboto'].join(','),
    // overline: {
    //   fontWeight: STYLES.fontWeight.semiBold,
    //   textTransform: 'none'
    // },
    h4: {
      fontWeight: STYLES.fontWeight.bold,
    },
    h6: {
      fontWeight: STYLES.fontWeight.bold,
      lineHeight: 1.4
    },
    caption: {
      fontSize: 'small'
    },
    subtitle1: {
      fontWeight: STYLES.fontWeight.bold,
    },
    subtitle2: {
      fontWeight: STYLES.fontWeight.bold,
    },
    button: {
      fontWeight: STYLES.fontWeight.bold,
    },
  },
  components: {
    MuiCard: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          borderRadius: STYLES.borderRadius.card,
          padding: '1rem',
        },
      }
    },
  },
  // shape: {
  //   borderRadius: STYLES.borderRadius.input,
  // },
  // components: {
  //   MuiListItemText: {
  //     styleOverrides: {
  //       primary: {
  //         fontWeight: STYLES.fontWeight.bold,
  //         fontSize: '0.825rem'
  //       }
  //     }
  //   },
  //   MuiTab: {
  //     styleOverrides: {
  //       root: {
  //         textTransform: 'none',
  //         borderBottom: '2px solid'
  //       }
  //     }
  //   },
  //   MuiTextField: {
  //     defaultProps: {
  //       color: 'secondary',
  //     },
  //   },
  //   MuiAutocomplete: {
  //     styleOverrides: {
  //       paper: theme => ({
  //         borderRadius: STYLES.borderRadius.card,
  //         boxShadow: theme.theme.shadows[4],
  //       })
  //     }
  //   },
  //   MuiPopover: {
  //     styleOverrides: {
  //       paper: {
  //         borderRadius: STYLES.borderRadius.default,
  //         minWidth: 150
  //       }
  //     }
  //   },
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         borderRadius: STYLES.borderRadius.input,
  //         textTransform: 'none',
  //       },
  //       sizeLarge: {
  //         fontSize: '1rem'
  //       }
  //     },
  //   },
  //   MuiDialog: {
  //     styleOverrides: {
  //       paper: {
  //         borderRadius: STYLES.borderRadius.card,
  //       }
  //     }
  //   },
  //   MuiDialogActions: {
  //     styleOverrides: {
  //       root: {
  //         padding: '16px',
  //       }
  //     }
  //   },
  //   MuiAccordion: {
  //     styleOverrides: {
  //       root: (theme) => ({
  //         borderRadius: STYLES.borderRadius.input,
  //         boxShadow: 'none',
  //         border: `1px solid ${theme.theme.palette.divider}`,
  //         '&:before': {
  //           backgroundColor: 'transparent',
  //         },
  //         '&.Mui-expanded': {
  //           margin: '0',
  //         },
  //         '&:last-of-type': {
  //           borderRadius: STYLES.borderRadius.input,
  //           boxShadow: 'none',
  //           border: `1px solid ${theme.theme.palette.divider}`,
  //         }
  //       }),
  //     }
  //   },
  //   MuiAccordionSummary: {
  //     styleOverrides: {
  //       root: {
  //         border: 'none',
  //       },
  //       content: {
  //         margin: '12px 0px',
  //         '&.Mui-expanded': {
  //           margin: '12px 0px',
  //           minHeight: 0,
  //         }
  //       },
  //     }
  //   }
  // },
};

const lightTheme = createTheme({
  ...BASE_OPTIONS as object,
  palette: {
    background: {
      default: '#FCFCFC',
      paper: '#FFFFFF'
    },
    mode: 'light',
    primary: {
      main: '#EFA742', //'#EA1930'
    },
    secondary: {
      main: '#655C5B',
    },
    success: {
      main: '#0F9918',
    },
    text: {
      primary: '#555555',
      secondary: '#777777',
      disabled: '#D0C4C3',
    },
  },
});

const darkTheme = createTheme({
  ...BASE_OPTIONS as object,
  palette: {
    mode: 'dark',
    background: {
      default: '#303030',
      paper: '#252525',
    },
    primary: {
      main: '#EFA742',
    },
    success: {
      main: '#0F9918',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
});

export const MUI_THEMES = {
  'light': lightTheme,
  'dark': darkTheme,
};
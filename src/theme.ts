import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#ffcc26',
            contrastText: '#fbfbfb',
        },
        secondary: {
            main: '#414141',
        },
    },
    shape: {
        borderRadius: 30,
    },
    typography: {
        fontFamily: 'Poppins',
        h1: {
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: 48,
            lineHeight: '62px',
        },
        h2: {
            fontFamily: 'Anek Telugu',
            fontWeight: 600,
            fontSize: 24,
            lineHeight: '34px',
        },
        h3: {
            fontFamily: 'Anek Telugu',
            fontWeight: 600,
            fontSize: 20,
            lineHeight: '30px',
        },
        h4: {
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: '24px',
        },
        body1: {
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: 14,
            lineHeight: '20px',
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h1',
                    h2: 'h2',
                    h3: 'h3',
                    h4: 'h4',
                    h5: 'h5',
                    h6: 'h6',
                    subtitle1: 'h2',
                    subtitle2: 'h2',
                    body1: 'span',
                    body2: 'span',
                },
            },
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '0px',
                    ':last-child': {
                        paddingBottom: '0px'
                    }
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: 'none'
                }
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    padding: 3
                }
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    padding: 0
                }
            }
        },
        MuiGrid: {
            styleOverrides: {
                root: {
                    scrollbarColor: "primary",
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        backgroundColor: "#c3c3c3",
                        borderRadius: 6
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                        borderRadius: 6,
                        backgroundColor: "#ffcc26",
                        minHeight: 12,
                    },
                    "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
                    {
                        backgroundColor: "#959595",
                    },
                    "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
                    {
                        backgroundColor: "#959595",
                    },
                    "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
                    {
                        backgroundColor: "#959595",
                    },
                    "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                        backgroundColor: "#2b2b2b",
                    },
                }
            }
        }
    }
})

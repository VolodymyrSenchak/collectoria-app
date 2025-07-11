import Box from '@mui/material/Box';
import {Outlet} from 'react-router';
import {MUI_THEMES} from '../muiTheme.ts';
import {CssBaseline, ThemeProvider} from '@mui/material';
import authLogo from '../assets/auth-logo.png';

export const AuthLayout = () => {
  return (
    <ThemeProvider theme={MUI_THEMES['light']}>
      <CssBaseline/>
      <Box
        className="auth-layout"
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        padding={1}
        gap={8}
      >
        <Box sx={{ width: 'min(100%, 25rem)' }}>
          <Outlet/>
        </Box>
        <Box>
          <img src={authLogo} alt="Logo" width={380} height={380}/>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
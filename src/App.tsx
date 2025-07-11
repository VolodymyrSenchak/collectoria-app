import { Outlet } from 'react-router';
import './App.scss';
import { ThemeProvider } from '@mui/material';
import {MUI_THEMES} from './muiTheme.ts';
import { CssBaseline } from '@mui/material';
import {SidePanel} from './layout/sidePanel';
import Box from '@mui/material/Box';

export const App = () => {
  const themeMode = 'light'; // Use theming later

  return (
    <ThemeProvider theme={MUI_THEMES[themeMode]}>
      <CssBaseline />
      <Box display="flex" className="collectoria-app">
        <Box
          className="side-panel"
          sx={tm => ({
            borderRight: '1px solid',
            borderRightColor: tm.palette.divider,
            background: tm.palette.background.paper,
            borderTopRightRadius: '1.5rem',
            borderBottomRightRadius: '1.5rem',
          })}
        >
          <SidePanel />
        </Box>
        <Box sx={{ height: '100vh', width: '100%', overflowY: 'auto' }} className="page-wrapper ">
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

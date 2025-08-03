import { Outlet } from 'react-router';
import './App.scss';
import { ThemeProvider } from '@mui/material';
import { MUI_THEMES } from './muiTheme.ts';
import { CssBaseline } from '@mui/material';
import { SidePanel } from './layout/sidePanel';
import Box from '@mui/material/Box';
import { useUserSettings } from './shared/hooks';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export const App = () => {
  const { userSettings } = useUserSettings();

  console.log('Settings', userSettings);

  return (
    <ThemeProvider theme={MUI_THEMES[userSettings?.theme || 'light']}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
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
      </LocalizationProvider>
    </ThemeProvider>
  );
};

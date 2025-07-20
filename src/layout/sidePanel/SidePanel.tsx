import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from '../../assets/logo.png';
import {List, ListItem} from '@mui/material';
import {DarkModeOutlined, InfoOutlined, LightModeOutlined, type SvgIconComponent} from '@mui/icons-material';
import {NavLink} from 'react-router';
import {NavMenuItemButton} from './NavMenuItemButton.tsx';
import LibraryBooks from '@mui/icons-material/LibraryBooks';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import {useState} from 'react';
import {InfoAndServicesNavItemsPopover} from '../infoAndServices/InfoAndServicesPopover.tsx';
import {useUserSettings} from "../../shared/hooks";

export const SidePanel = () => {
  const [infoAndServicesAnchorEl, setInfoAndServicesAnchorEl] = useState<HTMLDivElement | null>(null);
  const { userSettings, saveSettings } = useUserSettings();

  const handleThemeChange = async () => {
    const theme = userSettings?.theme === 'dark' ? 'light' : 'dark';
    await saveSettings({ ...userSettings, theme });
  };

  const navLink = (name: string, to: string, Icon: SvgIconComponent) => (
    <NavLink to={to} style={{textDecoration: 'none', color: 'inherit'}}>
      {({isActive}) => <NavMenuItemButton isActive={isActive} name={name} Icon={Icon}/>}
    </NavLink>
  );

  return (
    <Box height="100vh" width="100%" p={2} pr={4} display="flex" flexDirection="column" gap={2}>
      <Box display="flex" gap={1} alignItems="center" paddingLeft={1}>
        <img src={logo} alt="Logo" width={42} height={42}/>
        <Typography variant="h4" marginTop={0.5}>Collectoria</Typography>
      </Box>
      <Box flex="1" height={0}>
        <List>
          <ListItem disablePadding sx={{display: 'block'}}>
            {navLink('Collections', '/app/collections', LibraryBooks)}
            {navLink('Profile', '/app/profile', AccountCircleOutlined)}
          </ListItem>
        </List>
      </Box>
      <Box>
        <List>
          <ListItem disablePadding sx={{display: 'block'}}>
            <NavMenuItemButton
              name={userSettings?.theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              Icon={userSettings?.theme === 'dark' ? LightModeOutlined : DarkModeOutlined}
              onClick={handleThemeChange}
            />
            <NavMenuItemButton
              name="Info & services"
              Icon={InfoOutlined}
              onClick={({currentTarget}) => setInfoAndServicesAnchorEl(currentTarget)}
            />
            <InfoAndServicesNavItemsPopover
              anchorEl={infoAndServicesAnchorEl!}
              close={() => setInfoAndServicesAnchorEl(null)}
            />
          </ListItem>
        </List>

        <Typography variant="caption" ml={2.2}>
          © Collectoria - {new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  );
};

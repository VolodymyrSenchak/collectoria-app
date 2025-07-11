import { List, ListItem, ListItemButton, ListItemText, Popover } from '@mui/material';
import { NavLink } from 'react-router';

interface InfoAndServicesNavItemsPopoverProps {
  anchorEl: HTMLDivElement;
  close: () => void;
}

export const InfoAndServicesNavItemsPopover: React.FC<InfoAndServicesNavItemsPopoverProps> = ({ anchorEl, close }) => {
  const navLink = (text: string, to: string) => (
    <NavLink to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      <ListItemButton>
        <ListItemText primary={text} />
      </ListItemButton>
    </NavLink>
  );

  // TODO: links are now only placeholders. When new pages will appear, change to real links.
  return (
    <Popover
      open={!!anchorEl}
      anchorEl={anchorEl}
      onClose={close}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    >
      <List>
        <ListItem disablePadding sx={{ display: 'block' }}>
          {navLink('Copyright', '/')}
          {navLink('Contact us', '/')}
          {navLink('For creator', '/')}
          {navLink('For advertises', '/')}
          {navLink('Terms of use', '/')}
          {navLink('Privacy policy', '/')}
        </ListItem>
      </List>
    </Popover>
  );
};

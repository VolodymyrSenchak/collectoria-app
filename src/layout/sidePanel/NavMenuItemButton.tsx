import type {SvgIconComponent} from '@mui/icons-material';
import { ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import * as React from 'react';

interface NavMenuItemButtonProps {
  Icon: SvgIconComponent;
  name: string;
  isActive?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const NavMenuItemButton: React.FC<NavMenuItemButtonProps> = ({
  Icon,
  isActive,
  name,
  onClick,
}) => {
  return (
    <ListItemButton
      onClick={onClick}
      sx={({palette, shape}) => ({
        borderRadius: shape.borderRadius,
        ...(isActive && { color: palette.primary.main }),
      })}
    >
      <ListItemIcon sx={{ marginRight: '0.5rem', minWidth: 0, justifyContent: 'center' }}>
        <Icon color={isActive ? 'primary' : 'action'}></Icon>
      </ListItemIcon>

      <ListItemText primary={name} slotProps={{ primary: { fontWeight: '500' } }} />
    </ListItemButton>
  );
};

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router';

type PageHeaderProps = {
  title: string;
  children?: React.ReactNode | React.ReactNode[];
  backTo?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, children, backTo }) => {
  const navigate = useNavigate();

  return (
    <Box display="flex" alignItems="center" width="100%" gap={1} mt={1} mb={3}>
      {backTo && (
        <IconButton onClick={() => navigate(backTo)}>
          <ArrowBackIcon />
        </IconButton>
      )}
      <Typography variant="h4">{title}</Typography>
      <Box ml={1}>
        { children }
      </Box>
    </Box>
  );
};

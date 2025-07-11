import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';

type PageHeaderProps = {
  title: string;
  children?: React.ReactNode | React.ReactNode[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
  return (
    <Box display="flex" alignItems="center" width="100%" gap={2} mt={1} mb={3}>
      <Typography variant="h4">{title}</Typography>
      <Box>
        { children }
      </Box>
    </Box>
  );
};

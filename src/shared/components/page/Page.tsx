import * as React from 'react';
import Box from '@mui/material/Box';

type PageProps = {
  children: React.ReactNode | React.ReactNode[];
}

export const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <Box display="flex" gap={1} flexDirection="column" className="page-content" sx={{
      marginLeft: { xs: '0', sm: '5rem' },
      height: '100%',
      width: '100%',
      maxWidth: '50rem',
      padding: '1rem',
    }}>
      {children}
    </Box>
  );
};

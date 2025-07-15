import {Box, Modal, Typography} from '@mui/material';
import * as React from 'react';

export const AppModal = (params: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode | React.ReactNode[];
  width?: string | number;
}) => {
  return (
    <Modal
      open={params.open}
      onClose={params.onClose}
      aria-labelledby="Modal title"
      aria-describedby="Modal description"
    >
      <Box sx={(theme) => ({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: params.width ? params.width : 'min(350px, 95vw)',
        borderRadius: theme.shape.borderRadius,
        bgcolor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        p: 4,
      })}>
        <Box mb={1}>
          <Typography variant="h6">{params.title}</Typography>
        </Box>
        {params.children}
      </Box>
    </Modal>
  );
};

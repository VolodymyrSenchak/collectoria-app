import {Box, LinearProgress, Typography} from '@mui/material';

export const Loading = (params: {
  title: string;
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={1}
      py={3}
      sx={{ width: '100%' }}
    >
      <Typography variant="subtitle2">{params.title}</Typography>
      <LinearProgress sx={{
        width: '100%',
        height: '0.5rem',
        borderRadius: '1rem'
      }} />
    </Box>
  );
};

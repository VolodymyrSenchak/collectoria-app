import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const CardTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Box>
      <Typography variant="h4">{title}</Typography>
    </Box>
  );
};

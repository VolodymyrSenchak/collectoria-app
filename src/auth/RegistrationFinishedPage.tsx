import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router';

export const RegistrationFinishedPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Registration Complete!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Your account has been successfully created. You can now log in.
      </Typography>
      <Button
        component={Link}
        to="/auth/login"
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
      >
        Go to Login
      </Button>
    </Box>
  );
};

import {Box, Button, Typography} from "@mui/material";
import {Link} from "react-router";

export const ResetPasswordRequestSentPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Password Reset Request Sent!
      </Typography>
      <Typography variant="body1" gutterBottom>
        We've sent a password reset link to your email. Please check your inbox.
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
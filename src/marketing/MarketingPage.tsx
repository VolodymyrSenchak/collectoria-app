import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router';

export const MarketingPage = () => {
  return (
    <div className="marketing-page">
      <Typography variant="h2">Welcome to Collectoria</Typography>
      <Typography variant="body2" color="textSecondary">
        Here you will find collections and a lot of staff
      </Typography>
      <Button
        component={Link}
        to="/app/collections"
        variant="contained"
        color="primary"
        sx={{mt: 3}}
      >
        Go to collectoria
      </Button>
    </div>
  );
};

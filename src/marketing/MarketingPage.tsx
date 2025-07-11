import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const MarketingPage = () => {
  return (
    <div className="marketing-page">
      <Typography variant="h2">Welcome to Collectoria</Typography>
      <Typography variant="body2" color="textSecondary">
        Here you will find collections and a lot of staff
      </Typography>
      <Button href="app/collections" variant="outlined">Go to collectoria</Button>
    </div>
  );
};

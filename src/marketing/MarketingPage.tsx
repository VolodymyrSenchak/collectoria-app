import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router';
import StarIcon from '@mui/icons-material/Star';
import CollectionsIcon from '@mui/icons-material/Collections';
import PublicIcon from '@mui/icons-material/Public';
import SecurityIcon from '@mui/icons-material/Security';
import {MUI_THEMES} from '../muiTheme.ts';
import { ThemeProvider } from '@mui/material';

// Just temporary until we have a proper marketing page
export const MarketingPage = () => {
  return (
    <ThemeProvider theme={MUI_THEMES['light']}>
      <Box
        className="marketing-page"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #F19D2788 0%, #c3cfe2 100%)',
        }}
      >
        <StarIcon sx={{fontSize: 64, color: '#F19D27', mb: 2}}/>
        <Typography variant="h2" sx={{fontWeight: 700, mb: 2, color: '#F19D27'}}>
          Welcome to Collectoria
        </Typography>
        <Typography variant="h5" sx={{mb: 2, color: 'text.secondary', maxWidth: 700, textAlign: 'center'}}>
          Discover, organize, and showcase your unique collections. Collectoria helps you keep track of your favorite
          items, connect with fellow collectors, and share your passion with the world. Start building your digital
          showcase today!
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: {xs: 'column', md: 'row'},
            gap: 3,
            mt: 2,
            mb: 3,
          }}
        >
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 220}}>
            <CollectionsIcon sx={{fontSize: 48, color: '#43a047', mb: 1}}/>
            <Typography variant="h6" sx={{fontWeight: 600, mb: 1}}>
              Organize Effortlessly
            </Typography>
            <Typography variant="body1" sx={{color: 'text.secondary', textAlign: 'center'}}>
              Easily add, categorize, and manage your collections with intuitive tools.
            </Typography>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 220}}>
            <PublicIcon sx={{fontSize: 48, color: '#1976d2', mb: 1}}/>
            <Typography variant="h6" sx={{fontWeight: 600, mb: 1}}>
              Share & Connect
            </Typography>
            <Typography variant="body1" sx={{color: 'text.secondary', textAlign: 'center'}}>
              Showcase your collections and connect with a vibrant community of enthusiasts.
            </Typography>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 220}}>
            <SecurityIcon sx={{fontSize: 48, color: '#fbc02d', mb: 1}}/>
            <Typography variant="h6" sx={{fontWeight: 600, mb: 1}}>
              Safe & Secure
            </Typography>
            <Typography variant="body1" sx={{color: 'text.secondary', textAlign: 'center'}}>
              Your data is protected with industry-leading security and privacy features.
            </Typography>
          </Box>
        </Box>
        <Button
          component={Link}
          to="/app/collections"
          variant="contained"
          color="primary"
          size="large"
          sx={{mt: 3, px: 5, py: 1.5, fontSize: 18, borderRadius: 3, boxShadow: 3}}
        >
          Get Started
        </Button>
      </Box>
    </ThemeProvider>
  );
};
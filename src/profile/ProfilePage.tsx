import {Page, PageHeader} from '../shared/components';
import Box from '@mui/material/Box';

export const ProfilePage = () => {
  return (
    <Page>
      <PageHeader title="User profile"></PageHeader>
      <Box>
        User profile page content goes here.
        This is where you can manage your account settings, view your collections,
        and update your profile information.
      </Box>
    </Page>
  );
};
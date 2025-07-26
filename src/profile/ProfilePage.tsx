import {Page, PageHeader} from '../shared/components';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import {authStore} from "../shared/store";
import { useNavigate } from 'react-router';
import {NAV_LINKS} from "../shared/utils";

export const ProfilePage = () => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    authStore.logout();
    navigate(NAV_LINKS.auth.login);
  }

  return (
    <Page>
      <PageHeader title="User profile"></PageHeader>
      <Box>
        User profile page content goes here.
        This is where you can manage your account settings, view your collections,
        and update your profile information.
      </Box>
      <Box>
        <Button onClick={handleLogoutClick} >Logout</Button>
      </Box>
    </Page>
  );
};
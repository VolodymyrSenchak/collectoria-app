import Button from '@mui/material/Button';
import {Page, PageHeader} from '../shared/components';
import Box from '@mui/material/Box';
import {Card} from '@mui/material';
import LibraryAddOutlined from '@mui/icons-material/LibraryAddOutlined';
import Typography from '@mui/material/Typography';


export const CollectionsPage = () => {
  return (
    <Page>
      <PageHeader title="Collections">
        <Box>
          <Button size="medium" variant="outlined" color="primary">New collection</Button>
        </Box>
      </PageHeader>
      <Box>
        <Card>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <LibraryAddOutlined sx={{ fontSize: 64, color: 'disabled', mb: 2 }} />
            <Typography fontWeight="bold" mb={1}>
              <Button variant="text">Create your first collection</Button>
            </Typography>
            <Typography color="secondary">
              Add your collections here. You can create a new collection by clicking the button above.
            </Typography>
          </Box>

        </Card>
      </Box>
    </Page>
  );
};

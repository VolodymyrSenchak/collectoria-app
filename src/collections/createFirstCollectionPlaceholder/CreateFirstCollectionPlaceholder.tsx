import {Card} from '@mui/material';
import Box from '@mui/material/Box';
import LibraryAddOutlined from '@mui/icons-material/LibraryAddOutlined';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const CreateFirstCollectionPlaceholder = ({onCreateCollection}: {
  onCreateCollection: () => void;
}) => {
  return (
    <Card>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <LibraryAddOutlined sx={{fontSize: 64, color: 'disabled', mb: 2}}/>
        <Typography fontWeight="bold" mb={1}>
          <Button variant="text" onClick={onCreateCollection}>Create your first collection</Button>
        </Typography>
        <Typography color="secondary">
          Add your collections here. You can create a new collection by clicking the button above.
        </Typography>
      </Box>
    </Card>
  );
};

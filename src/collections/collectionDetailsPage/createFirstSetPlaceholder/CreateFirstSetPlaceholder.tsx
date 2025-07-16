import {Card} from '@mui/material';
import Box from '@mui/material/Box';
import LibraryAddOutlined from '@mui/icons-material/LibraryAddOutlined';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const CreateFirstSetPlaceholder = ({onCreateNewSet}: {
  onCreateNewSet: () => void;
}) => {
  return (
    <Card>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <LibraryAddOutlined sx={{fontSize: 64, color: 'disabled', mb: 2}}/>
        <Typography fontWeight="bold" mb={1}>
          <Button variant="text" onClick={onCreateNewSet}>Create your first collection set</Button>
        </Typography>
        <Typography color="secondary">
          Don't have any sets yet? Click the button above to create your first set.
        </Typography>
      </Box>
    </Card>
  );
};

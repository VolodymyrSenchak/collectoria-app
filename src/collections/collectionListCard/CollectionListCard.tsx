import {Box, Card, IconButton} from '@mui/material';
import Typography from '@mui/material/Typography';
import type {ICollection} from '../../shared/models/collections';
import {NavLink} from 'react-router';
import DeleteIcon from '@mui/icons-material/Delete';

export const CollectionListCard = (params: {
  collection: ICollection;
  onDelete: (collectionId: string) => void;
}) => {
  const collection = params.collection;
  return (
    <Card sx={{mb: 2, p: 2}}>
      <Box display="flex">
        <Box flex={1}>
          <NavLink to={collection.id} style={{textDecoration: 'none', color: 'inherit'}}>
            <Typography variant="h6">{collection.name}</Typography>
          </NavLink>

          <Typography variant="body2" color="textSecondary">{collection.description}</Typography>
        </Box>
        <Box>
          <IconButton aria-label="delete" onClick={e => {
            e.stopPropagation();
            params.onDelete(collection.id);
          }}>
            <DeleteIcon/>
          </IconButton>
        </Box>
      </Box>

    </Card>
  );
};

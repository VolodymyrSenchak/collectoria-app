import Typography from '@mui/material/Typography';
import type {ICollectionSet} from '../../../shared/models/collections';
import {Box, Card, IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const CollectionSetListCard = (params: {
  collectionSet: ICollectionSet;
  onClick: () => void;
  onDelete: () => void;
}) => {
  const {collectionSet, onClick, onDelete} = params;
  return (
    <Card sx={{mb: 2, p: 2, ':hover': {cursor: 'pointer'}}} onClick={onClick}>
      <Box display="flex">
        <Box flex={1}>
          <Typography variant="h6">{collectionSet.name}</Typography>
          <Typography variant="body2" color="textSecondary">Details will be here</Typography>
        </Box>
        <Box>
          <IconButton aria-label="delete" onClick={e => {
            e.stopPropagation();
            onDelete();
          }}>
            <DeleteIcon/>
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

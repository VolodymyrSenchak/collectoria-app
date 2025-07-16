import {Card} from '@mui/material';
import Typography from '@mui/material/Typography';
import type {ICollectionSet} from '../../../shared/models/collections';
import Button from '@mui/material/Button';

export const CollectionSetListCard = (params: {
  collectionSet: ICollectionSet;
  onClick?: () => void
}) => {
  const { collectionSet, onClick } = params;
  return (
    <Card sx={{mb: 2, p: 2}}>
      <Button variant="text" onClick={onClick}>{collectionSet.name}</Button>
      <Typography variant="body2" color="textSecondary">Details will be here</Typography>
    </Card>
  );
};

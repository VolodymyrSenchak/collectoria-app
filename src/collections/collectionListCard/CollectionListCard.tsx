import {Card} from '@mui/material';
import Typography from '@mui/material/Typography';
import type { ICollection } from '../../shared/models/collections';
import {NavLink} from 'react-router';

export const CollectionListCard = (params: {
  collection: ICollection;
  onCollectionDelete?: (collectionId: string) => void;
}) => {
  const collection = params.collection;
  return (
    <Card sx={{mb: 2, p: 2}}>
      <NavLink to={collection.id} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography variant="h6">{collection.name}</Typography>
      </NavLink>

      <Typography variant="body2" color="textSecondary">{collection.description}</Typography>
    </Card>
  );
};

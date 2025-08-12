import Typography from '@mui/material/Typography';
import type {ICollectionSet} from '../../../shared/models/collections';
import {Box, Card, Divider, IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ValueWithLabel = ({label, value}: { label: string, value: string }) => (
  <Box>
    <Typography variant="subtitle2">{label}</Typography>
    <Typography>{value}</Typography>
  </Box>
);

export const CollectionSetListCard = (params: {
  collectionSet: ICollectionSet;
  onClick: () => void;
  onDelete: () => void;
}) => {
  const {collectionSet, onClick, onDelete} = params;

  return (
    <Card sx={{mb: 2, p: 2, ':hover': {cursor: 'pointer'}}} onClick={onClick}>
      <Box display="flex" gap={2}>
        <Box display="flex" alignItems="center">
          {collectionSet.imageUrl ? (
            <img src={collectionSet.imageUrl} alt={collectionSet.name} style={{maxWidth: 100, maxHeight: '100%'}}/>
          ) : (
            <Box bgcolor={tm => tm.palette.grey[200]} width={100} height={100} display="flex" flexDirection="column"
                 justifyContent="center" alignItems="center" borderRadius={2}>
              <Typography color="textSecondary">No image</Typography>
            </Box>
          )}
        </Box>
        <Box flex={1}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" gutterBottom>
              {collectionSet.name}
            </Typography>
            <IconButton
              aria-label="delete"
              onClick={e => {
                e.stopPropagation();
                onDelete();
              }}
            >
              <DeleteIcon/>
            </IconButton>
          </Box>
          <Divider sx={{mb: 1}}/>
          <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={1}>
            <ValueWithLabel label="No" value={collectionSet.no} />
            <ValueWithLabel label="Year released" value={collectionSet.yearReleased.toString()} />
            <ValueWithLabel label="Weight" value={collectionSet.weight} />
            <ValueWithLabel label="Dimensions" value={`${collectionSet.dimX} × ${collectionSet.dimY} × ${collectionSet.dimZ}`} />
            <ValueWithLabel label="Buy Price" value={collectionSet.buyPrice.toString()} />
            <ValueWithLabel label="Buy date" value={collectionSet.buyDate.toString()} />
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

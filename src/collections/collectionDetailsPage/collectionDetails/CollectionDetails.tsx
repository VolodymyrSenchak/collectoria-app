import type {ICollection} from '../../../shared/models/collections';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const CollectionDetails = ({ collection }: { collection: ICollection }) => {
  return (
    <Box mt={-1}>
      <Typography variant="subtitle2">{collection.description}</Typography>
    </Box>
  );
};

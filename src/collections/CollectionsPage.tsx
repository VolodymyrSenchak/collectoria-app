import Button from '@mui/material/Button';
import {Page, PageHeader} from '../shared/components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useCollections} from '../shared/store/collections';
import {CreateFirstCollectionPlaceholder} from './createFirstCollectionPlaceholder';
import {CollectionListCard} from './collectionListCard';
import { useState } from 'react';
import {NewCollectionModal} from './newCollectionModal';


export const CollectionsPage = () => {
  const [isNewCollectionModalOpened, setNewCollectionModalOpened] = useState(false);
  const {
    collections,
    isCollectionsLoading
  } = useCollections();

  const handleCreateNewCollection = () => setNewCollectionModalOpened(true);

  const getCollectionsTemplate = () => {
    if (isCollectionsLoading)
      return <Typography>Loading collections...</Typography>;
    if (!collections || collections.length === 0)
      return <CreateFirstCollectionPlaceholder onCreateCollection={handleCreateNewCollection}/>;

    return collections.map((collection, idx) => (<CollectionListCard collection={collection} key={idx} />));
  };

  return (
    <Page>
      <PageHeader title="Collections">
        <Box>
          <Button size="medium" variant="outlined" color="primary" onClick={handleCreateNewCollection}>
            New collection
          </Button>
        </Box>
      </PageHeader>
      <Box>
        {getCollectionsTemplate()}
      </Box>
      <NewCollectionModal open={isNewCollectionModalOpened} onClose={() => setNewCollectionModalOpened(false)} />
    </Page>
  );
};

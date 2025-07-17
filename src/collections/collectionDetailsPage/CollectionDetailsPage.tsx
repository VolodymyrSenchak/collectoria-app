import {useParams} from 'react-router';
import {Page, PageHeader, PageSkeleton} from '../../shared/components';
import {useCollection} from '../../shared/store/collections/useCollection.ts';
import {CollectionDetails} from './collectionDetails/CollectionDetails.tsx';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {CollectionSetListCard} from './collectionSetListCard/CollectionSetListCard.tsx';
import type {ICollectionSetMetadata} from '../../shared/models/collections';
import {useState} from 'react';
import {CollectionSetDetailsModal} from './collectionSetDetails/CollectionSetDetailsModal.tsx';
import Button from '@mui/material/Button';
import {CreateFirstSetPlaceholder} from './createFirstSetPlaceholder/CreateFirstSetPlaceholder.tsx';
import {useCollectionSaver} from '../../shared/store/collections';

export const CollectionDetailsPage = () => {
  const {id: collectionId} = useParams();
  const {collection, collectionSets, isLoading} = useCollection(collectionId!);
  const { deleteCollectionSet } = useCollectionSaver();
  const [isSetModalOpened, setSetModalOpened] = useState(false);
  const [setToEdit, setSetToEdit] = useState<ICollectionSetMetadata | undefined>();

  const openSetDetailsModal = (set: ICollectionSetMetadata | undefined = undefined) => {
    setSetToEdit(set);
    setSetModalOpened(true);
  };

  return (
    <Page>
      {isLoading ? (
        <PageSkeleton heights={[50, 100, 100, 100, 100]}/>
      ) : (
        <>
          <PageHeader title={collection?.name ?? 'Collection Details'} backTo="/app/collections"/>
          <CollectionDetails collection={collection!}/>

          <Box mt={2} mb={1} display="flex" alignItems="center" gap={1}>
            <Typography variant="h6">Sets</Typography>
            {(collectionSets?.length ?? 0) > 0 && (
              <Button size="medium" variant="outlined" color="primary" onClick={() => openSetDetailsModal()}>
                New collection set
              </Button>
            )}
          </Box>

          <Box>
            {collectionSets && collectionSets.length > 0 ? (
              collectionSets.map(setMetadata => (
                <CollectionSetListCard
                  collectionSet={setMetadata.payload}
                  onClick={() => openSetDetailsModal(setMetadata)}
                  onDelete={() => deleteCollectionSet(collectionId!, setMetadata.id!)}
                  key={setMetadata.id}
                />
              ))
            ) : (
              <CreateFirstSetPlaceholder onCreateNewSet={() => openSetDetailsModal()}/>
            )}
          </Box>
        </>
      )}
      <CollectionSetDetailsModal
        open={isSetModalOpened}
        onClose={() => setSetModalOpened(false)}
        collectionSet={setToEdit}
        collectionId={collection?.id}
      />
    </Page>
  );
};

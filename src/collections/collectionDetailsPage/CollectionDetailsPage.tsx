import {useParams} from 'react-router';
import {Page, PageHeader, PageSkeleton} from '../../shared/components';
import {useCollection} from '../../shared/store/collections/useCollection.ts';
import {CollectionDetails} from './collectionDetails/CollectionDetails.tsx';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {CollectionSetListCard} from './collectionSetListCard/CollectionSetListCard.tsx';
import type {ICollectionSet} from '../../shared/models/collections';
import {useState} from 'react';
import {CollectionSetDetailsModal} from './collectionSetDetails/CollectionSetDetailsModal.tsx';
import Button from '@mui/material/Button';
import {CreateFirstSetPlaceholder} from './createFirstSetPlaceholder/CreateFirstSetPlaceholder.tsx';

export const CollectionDetailsPage = () => {
  const {id} = useParams();
  const {collection, collectionSets, isLoading} = useCollection(id as string);
  const [isSetModalOpened, setSetModalOpened] = useState(false);
  const [setToEdit, setSetToEdit] = useState<ICollectionSet | undefined>();

  const openSetDetailsModal = (set: ICollectionSet | undefined = undefined) => {
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

          <Box mt={2} display="flex" gap={1}>
            <Typography variant="h5">Sets</Typography>
            {(collectionSets?.length ?? 0) > 0 && (
              <Button size="medium" variant="outlined" color="primary" onClick={() => openSetDetailsModal()}>
                New collection set
              </Button>
            )}
          </Box>

          <Box>
            {collectionSets && collectionSets.length > 0 ? (
              collectionSets.map((set, idx) => (
                <CollectionSetListCard
                  collectionSet={set}
                  onClick={() => openSetDetailsModal(set)}
                  key={idx}
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

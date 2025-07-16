import type { ICollectionSet} from '../../../shared/models/collections';
import {AppModal, Loading} from '../../../shared/components';
import {useCollectionSaver} from '../../../shared/store/collections';
import {CollectionSetDetailsForm} from './CollectionSetDetailsForm.tsx';

export interface ICollectionSetDetailsParams {
  open: boolean;
  onClose: () => void;
  collectionId?: string;
  collectionSet?: ICollectionSet;
}

export const CollectionSetDetailsModal = (params: ICollectionSetDetailsParams) => {
  const { collectionSetSavingStatus } = useCollectionSaver();

  const handleSubmit = async (set: ICollectionSet) => {
    try {
      console.log(set);
      // save the collection set here
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppModal
      title="Collection set details"
      open={params.open}
      onClose={params.onClose!}
      width="min(400px, 95vw)"
    >
      {collectionSetSavingStatus === 'pending' && (
        <Loading title="Saving set..." />
      )}
      {collectionSetSavingStatus !== 'pending' && (
        <CollectionSetDetailsForm
          collectionSet={params.collectionSet}
          onSubmit={handleSubmit}
          onCancel={params.onClose}
        />
      )}
    </AppModal>
  );
};

import type {ICollectionSet, ICollectionSetMetadata} from '../../../shared/models/collections';
import {AppModal, Loading} from '../../../shared/components';
import {useCollectionSaver} from '../../../shared/hooks/collections';
import {CollectionSetDetailsForm} from './CollectionSetDetailsForm.tsx';

export interface ICollectionSetDetailsParams {
  open: boolean;
  onClose: () => void;
  collectionId?: string;
  collectionSet?: ICollectionSetMetadata;
}

export const CollectionSetDetailsModal = (params: ICollectionSetDetailsParams) => {
  const { collectionSetSavingStatus, saveCollectionSet } = useCollectionSaver();

  const handleSubmit = async (set: ICollectionSet) => {
    try {
      await saveCollectionSet(params.collectionId!, set, params.collectionSet?.id);
      params.onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppModal
      title="Collection set details"
      open={params.open}
      onClose={params.onClose!}
      width="min(1024px, 95vw)"
    >
      {collectionSetSavingStatus === 'pending' && (
        <Loading title="Saving set..." />
      )}
      {collectionSetSavingStatus !== 'pending' && (
        <CollectionSetDetailsForm
          collectionSet={params.collectionSet?.payload}
          onSubmit={handleSubmit}
          onCancel={params.onClose}
        />
      )}
    </AppModal>
  );
};

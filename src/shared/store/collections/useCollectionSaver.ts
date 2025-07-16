import {useMutation, useQueryClient } from '@tanstack/react-query';
import type {ICollection, ICollectionSet} from '../../models/collections';
import { collectionsService } from '../api/collectionsApi';

export const useCollectionSaver = () => {
  const queryClient = useQueryClient();

  const getInvalidationHandler = (...queryKeys: string[]) => {
    return {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: queryKeys});
      }
    };
  };

  const collectionSaveMutation = useMutation({
    mutationFn: (collection: ICollection) => collectionsService.saveCollection(collection),
    ...getInvalidationHandler('collections')
  });

  const collectionSetSaveMutation = useMutation({
    mutationFn: ({ collectionId, collectionSet }: {
      collectionId: string;
      collectionSet: ICollectionSet;
    }) => collectionsService.saveCollectionSet(collectionId, collectionSet),
    ...getInvalidationHandler('collectionSets'),
  });

  return {
    saveCollection: (collection: ICollection) => collectionSaveMutation.mutateAsync(collection),
    collectionSavingStatus: collectionSaveMutation.status,
    saveCollectionSet: (collectionId: string, collectionSet: ICollectionSet) => collectionSetSaveMutation.mutateAsync({
      collectionId,
      collectionSet,
    }),
    collectionSetSavingStatus: collectionSetSaveMutation.status,
  };
};

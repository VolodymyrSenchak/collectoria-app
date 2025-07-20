import {useMutation, useQueryClient } from '@tanstack/react-query';
import type {ICollection, ICollectionSet } from '../../models/collections';
import { collectionsService } from '../../api/collectionsApi.ts';
import {QUERY_KEYS} from '../../utils/queryKeys.ts';

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
    ...getInvalidationHandler(QUERY_KEYS.collections)
  });

  const collectionDeleteMutation = useMutation({
    mutationFn: (collectionId: string) => collectionsService.deleteCollection(collectionId),
    ...getInvalidationHandler(QUERY_KEYS.collections)
  });

  const collectionSetSaveMutation = useMutation({
    mutationFn: ({ collectionId, collectionSet, setId }: {
      collectionId: string;
      collectionSet: ICollectionSet;
      setId: string | undefined;
    }) => collectionsService.saveCollectionSet(collectionId, collectionSet, setId),
    ...getInvalidationHandler(QUERY_KEYS.collectionSets),
  });

  const collectionSetDeleteMutation = useMutation({
    mutationFn: ({ collectionId, setId }: {
      collectionId: string;
      setId: string;
    }) => collectionsService.deleteCollectionSet(collectionId, setId),
    ...getInvalidationHandler(QUERY_KEYS.collectionSets)
  });

  return {
    saveCollection: (collection: ICollection) => collectionSaveMutation.mutateAsync(collection),
    collectionSavingStatus: collectionSaveMutation.status,

    deleteCollection: (collectionId: string) => collectionDeleteMutation.mutateAsync(collectionId),
    collectionDeleteStatus: collectionDeleteMutation.status,

    saveCollectionSet: (collectionId: string, collectionSet: ICollectionSet, setId: string | undefined = undefined) =>
      collectionSetSaveMutation.mutateAsync({ collectionId, collectionSet, setId }),
    collectionSetSavingStatus: collectionSetSaveMutation.status,

    deleteCollectionSet: (collectionId: string, setId: string) =>
      collectionSetDeleteMutation.mutateAsync({ collectionId, setId }),
    collectionSetDeleteStatus: collectionSetDeleteMutation.status,
  };
};

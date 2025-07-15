import {useMutation, useQueryClient } from '@tanstack/react-query';
import type {ICollection} from '../../models/collections';
import { collectionsService } from '../api/collectionsApi';

export const useCollectionSaver = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (collection: ICollection) => collectionsService.saveCollection(collection),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['collections'] });
    },
  });

  return {
    saveCollection: (collection: ICollection) => mutation.mutateAsync(collection),
    collectionSavingStatus: mutation.status,
  }; 
};

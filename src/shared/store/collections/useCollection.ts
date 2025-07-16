import {useQuery} from '@tanstack/react-query';
import {collectionsService} from '../api/collectionsApi.ts';

export const useCollection = (collectionId: string) => {
  const collectionQuery = useQuery({
    queryKey: ['collection', collectionId],
    queryFn: () => collectionsService.getCollection(collectionId),
    refetchOnWindowFocus: false
  });

  const collectionSetsQuery = useQuery({
    queryKey: ['collectionSets', collectionId],
    queryFn: () => collectionsService.getCollectionSets(collectionId),
    refetchOnWindowFocus: false
  });

  return {
    collection: collectionQuery.data,
    collectionSets: collectionSetsQuery.data,
    isLoading: collectionQuery.isLoading || collectionSetsQuery.isLoading,
  };
};
import {useQuery} from '@tanstack/react-query';
import {collectionsService} from '../../api/collectionsApi.ts';

export const useCollections = () => {
  const collectionsQuery = useQuery({
    queryKey: ['collections'],
    queryFn: () => collectionsService.getCollections(),
    refetchOnWindowFocus: false
  });

  return {
    collections: collectionsQuery.data,
    isCollectionsLoading: collectionsQuery.isLoading,
  };
};

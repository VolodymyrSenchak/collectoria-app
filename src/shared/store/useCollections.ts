import {useQuery} from '@tanstack/react-query';
import {collectionsService} from './api/collectionsApi.ts';

export const useCollections = () => {
  const collectionsQuery = useQuery({
    queryKey: ['collections'],
    queryFn: () => collectionsService.getCollections()
  });

  return {
    collections: collectionsQuery.data
  };
};

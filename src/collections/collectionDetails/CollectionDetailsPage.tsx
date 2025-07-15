import {useParams} from 'react-router';
import {Page, PageHeader, PageSkeleton} from '../../shared/components';
import {useCollection} from '../../shared/store/collections/useCollection.ts';

export const CollectionDetailsPage = () => {
  const {id} = useParams();
  const {
    collection,
    collectionSets,
    isCollectionLoading,
    isSetsLoading
  } = useCollection(id as string);

  return (
    <Page>
      {isCollectionLoading ? (
        <PageSkeleton heights={[50, 100, 100, 100, 100]}/>
      ) : (
        <>
          <PageHeader title={collection?.name ?? 'Collection Details'}/>
        </>
      )}
    </Page>
  );
};

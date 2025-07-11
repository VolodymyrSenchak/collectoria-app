import { useParams } from 'react-router';

export const CollectionDetailsPage = () => {
  const { id } = useParams();

  return (
    <div className="collection-details-page">
      <h1>Collection Details</h1>
      <p>View and manage your collection details here.</p>
      <button className="cta-button">Edit Collection {id}</button>
    </div>
  );
};

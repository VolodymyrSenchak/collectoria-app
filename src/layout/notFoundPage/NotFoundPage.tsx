export const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <button className="cta-button" onClick={() => window.location.href = '/'}>
        Go to Home
      </button>
    </div>
  );
};

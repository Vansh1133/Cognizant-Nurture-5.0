export default function BookDetails({ showDetails }) {
  if (!showDetails) {
    return null;
  }

  return (
    <section className="panel">
      <h2>Book Details</h2>
      <p>React Made Easy by Dan Abramov</p>
    </section>
  );
}
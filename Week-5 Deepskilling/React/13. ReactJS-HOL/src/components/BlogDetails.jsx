export default function BlogDetails({ showDetails }) {
  const content = showDetails ? (
    <section className="panel">
      <h2>Blog Details</h2>
      <p>How to build maintainable UI with React components.</p>
    </section>
  ) : null;

  return content;
}
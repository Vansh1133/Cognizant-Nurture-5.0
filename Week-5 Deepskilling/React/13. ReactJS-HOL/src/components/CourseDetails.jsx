export default function CourseDetails({ showDetails }) {
  return showDetails && (
    <section className="panel">
      <h2>Course Details</h2>
      <p>React Fundamentals and Hands-on Lab Practice</p>
    </section>
  );
}
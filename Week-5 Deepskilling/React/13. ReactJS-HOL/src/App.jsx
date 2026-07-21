import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

export default function App() {
  const showBook = true;
  const showBlog = true;
  const showCourse = true;

  return (
    <main className="page">
      <h1>Blogger App</h1>

      <BookDetails showDetails={showBook} />
      <BlogDetails showDetails={showBlog} />
      <CourseDetails showDetails={showCourse} />

      <section className="panel note-panel">
        <h2>Conditional Rendering Approaches</h2>
        <ul>
          <li>If/else in BookDetails</li>
          <li>Ternary operator in BlogDetails</li>
          <li>Logical && in CourseDetails</li>
        </ul>
      </section>
    </main>
  );
}
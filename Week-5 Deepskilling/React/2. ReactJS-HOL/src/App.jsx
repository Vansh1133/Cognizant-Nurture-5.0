import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <main className="page">
      <h1>Student Management Portal</h1>
      <section className="card-stack">
        <article className="card">
          <h2>Home</h2>
          <Home />
        </article>
        <article className="card">
          <h2>About</h2>
          <About />
        </article>
        <article className="card">
          <h2>Contact</h2>
          <Contact />
        </article>
      </section>
    </main>
  );
}
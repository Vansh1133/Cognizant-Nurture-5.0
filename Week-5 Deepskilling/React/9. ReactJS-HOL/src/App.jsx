import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';

export default function App() {
  const flag = true;

  return (
    <main className="page">
      <header>
        <h1>Cricket App</h1>
        <p>{flag ? 'Displaying the player list component' : 'Displaying the Indian players component'}</p>
      </header>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </main>
  );
}
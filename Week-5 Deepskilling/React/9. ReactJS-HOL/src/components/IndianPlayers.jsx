export default function IndianPlayers() {
  const T20players = ['Rohit', 'Gill', 'Virat', 'Rahul', 'Surya'];
  const RanjiTrophyPlayers = ['Ajinkya', 'Mayank', 'Pujara', 'Sarfaraz', 'Ishan'];

  const [odd1, , odd3, , odd5] = T20players;
  const [even1, even2, even3, even4, even5] = RanjiTrophyPlayers;
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <section className="panel">
      <h2>Indian Players</h2>

      <h3>Odd Team Players</h3>
      <p>{odd1}, {odd3}, {odd5}</p>

      <h3>Even Team Players</h3>
      <p>{even1}, {even2}, {even3}, {even4}, {even5}</p>

      <h3>Merged Team Players</h3>
      <p>{mergedPlayers.join(', ')}</p>
    </section>
  );
}
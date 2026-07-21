const players = [
  { name: 'Virat Kohli', score: 84 },
  { name: 'Rohit Sharma', score: 91 },
  { name: 'Shubman Gill', score: 68 },
  { name: 'KL Rahul', score: 73 },
  { name: 'Rishabh Pant', score: 55 },
  { name: 'Hardik Pandya', score: 79 },
  { name: 'Suryakumar Yadav', score: 88 },
  { name: 'Jasprit Bumrah', score: 46 },
  { name: 'Ravindra Jadeja', score: 69 },
  { name: 'Shreyas Iyer', score: 72 },
  { name: 'Mohammed Shami', score: 62 }
];

export default function ListofPlayers() {
  const lowScorePlayers = players.filter((player) => player.score < 70);

  return (
    <section className="panel">
      <h2>List of Players</h2>
      <div className="grid">
        {players.map((player) => (
          <article key={player.name} className="item">
            <strong>{player.name}</strong>
            <span>Score: {player.score}</span>
          </article>
        ))}
      </div>

      <h3>Players with scores below 70</h3>
      <ul>
        {lowScorePlayers.map((player) => (
          <li key={player.name}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </section>
  );
}
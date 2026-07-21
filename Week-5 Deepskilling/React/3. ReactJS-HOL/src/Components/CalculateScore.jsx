export default function CalculateScore({ name, school, total, goal }) {
  const averageScore = (Number(total) + Number(goal)) / 2;

  return (
    <section className="score-card">
      <h1>Student Score Calculator</h1>
      <p>Name: {name}</p>
      <p>School: {school}</p>
      <p>Total Score: {total}</p>
      <p>Goal: {goal}</p>
      <p className="highlight">Average Score: {averageScore}</p>
    </section>
  );
}
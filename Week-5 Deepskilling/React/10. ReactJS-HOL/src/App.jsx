const offices = [
  { name: 'Central Tower', rent: 58000, address: '12 MG Road, Bengaluru' },
  { name: 'Skyline Hub', rent: 72000, address: '44 Salt Lake, Kolkata' },
  { name: 'Lakeview Plaza', rent: 61000, address: '3 OMR, Chennai' }
];

export default function App() {
  return (
    <main className="page">
      <h1>Office Space Rental</h1>
      <img src="/office-space.svg" alt="Office space" className="hero-image" />

      <section className="office-list">
        {offices.map((office) => (
          <article key={office.name} className="office-card">
            <h2>{office.name}</h2>
            <p>Address: {office.address}</p>
            <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>Rent: {office.rent}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
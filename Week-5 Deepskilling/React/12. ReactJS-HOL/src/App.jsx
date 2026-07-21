import { useState } from 'react';

const flights = [
  { airline: 'Air India', source: 'Bengaluru', destination: 'Delhi', time: '09:30 AM' },
  { airline: 'IndiGo', source: 'Mumbai', destination: 'Hyderabad', time: '01:15 PM' },
  { airline: 'Vistara', source: 'Chennai', destination: 'Kolkata', time: '06:05 PM' }
];

function GuestPage({ onLogin }) {
  return (
    <section className="panel">
      <h2>Guest Page</h2>
      <p>Browse flight details and log in to book tickets.</p>
      <div className="flight-list">
        {flights.map((flight) => (
          <article key={flight.airline} className="flight-card">
            <strong>{flight.airline}</strong>
            <span>{flight.source} to {flight.destination}</span>
            <span>{flight.time}</span>
          </article>
        ))}
      </div>
      <button type="button" onClick={onLogin}>Login</button>
    </section>
  );
}

function UserPage({ onLogout }) {
  const [passengerName, setPassengerName] = useState('');
  const [selectedFlight, setSelectedFlight] = useState(flights[0].airline);
  const [bookingMessage, setBookingMessage] = useState('');

  const handleBooking = (event) => {
    event.preventDefault();
    setBookingMessage(`Ticket booked for ${passengerName} on ${selectedFlight}`);
  };

  return (
    <section className="panel">
      <h2>User Page</h2>
      <p>You can now book tickets.</p>
      <form className="booking-form" onSubmit={handleBooking}>
        <label>
          Passenger Name
          <input value={passengerName} onChange={(event) => setPassengerName(event.target.value)} />
        </label>
        <label>
          Select Flight
          <select value={selectedFlight} onChange={(event) => setSelectedFlight(event.target.value)}>
            {flights.map((flight) => (
              <option key={flight.airline} value={flight.airline}>{flight.airline}</option>
            ))}
          </select>
        </label>
        <button type="submit">Book Ticket</button>
        <button type="button" className="secondary" onClick={onLogout}>Logout</button>
      </form>
      {bookingMessage && <p className="message">{bookingMessage}</p>}
    </section>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <main className="page">
      <h1>Ticket Booking App</h1>
      {isLoggedIn ? (
        <UserPage onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <GuestPage onLogin={() => setIsLoggedIn(true)} />
      )}
    </main>
  );
}
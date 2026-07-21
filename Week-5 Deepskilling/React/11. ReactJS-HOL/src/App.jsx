import { useState } from 'react';

function CounterPanel() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const sayHello = () => setMessage('Hello, this is a static message.');
  const handleWelcome = (word) => setMessage(`Welcome ${word}`);

  const handleIncrement = () => {
    setCount((currentCount) => currentCount + 1);
    sayHello();
  };

  const handleDecrement = () => setCount((currentCount) => currentCount - 1);
  const handlePress = () => setMessage('I was clicked');

  return (
    <section className="panel">
      <h2>Counter</h2>
      <p className="count">{count}</p>
      <div className="button-row">
        <button type="button" onClick={handleIncrement}>Increment</button>
        <button type="button" onClick={handleDecrement}>Decrement</button>
      </div>
      <div className="button-row">
        <button type="button" onClick={sayHello}>Say Hello</button>
        <button type="button" onClick={() => handleWelcome('welcome')}>Say Welcome</button>
        <button type="button" onClick={handlePress}>OnPress</button>
      </div>
      <p className="message">{message}</p>
    </section>
  );
}

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const converted = Number(rupees) / 90;
    setEuro(Number.isFinite(converted) ? converted.toFixed(2) : '0.00');
  };

  return (
    <section className="panel">
      <h2>Currency Convertor</h2>
      <form className="converter" onSubmit={handleSubmit}>
        <label>
          Indian Rupees
          <input
            type="number"
            value={rupees}
            onChange={(event) => setRupees(event.target.value)}
            placeholder="Enter rupees"
          />
        </label>
        <button type="submit">Convert</button>
      </form>
      <p className="message">Euro: {euro}</p>
    </section>
  );
}

export default function App() {
  return (
    <main className="page">
      <h1>Event Examples App</h1>
      <CounterPanel />
      <CurrencyConvertor />
    </main>
  );
}
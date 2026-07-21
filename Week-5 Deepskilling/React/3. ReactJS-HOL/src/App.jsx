import CalculateScore from './Components/CalculateScore';
import './Stylesheets/mystyle.css';

export default function App() {
  return (
    <main className="page">
      <CalculateScore name="John" school="Green Valley High School" total={78} goal={90} />
    </main>
  );
}
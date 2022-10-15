import './App.css';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <Card income={false} amount={1500} ></Card>
    </div>
  );
}

export default App;

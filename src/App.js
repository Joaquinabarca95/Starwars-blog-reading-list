
import './App.css';
import Characters from './components/Characters';
import Navbar from './components/Navbar';
import Planets from './components/Planets';
import Vehicles from './components/Vehicles';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Characters />
      <Planets />
      <Vehicles />
      </div>
  );
}

export default App;

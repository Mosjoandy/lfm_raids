import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topper from './components/Topper.js';
import Raid from './components/Raid.js';
import Classes from './components/Classes.js';

function App() {
  return (
    <div>
      <Topper />
      <Raid />
      <Classes />
    </div>
  );
};

export default App;

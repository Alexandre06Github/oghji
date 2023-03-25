import logo from './logo.svg';
import './App.css';
import Gauge from "./Gauge";

import Component2 from './components/views/composant2';
import Composant from './components/views/composant';

function App() {
  return (
    <div className="App">

<h1>OGHJI</h1>
  <div>
      <Gauge value={50} />
    </div>
<Gauge/>

<div>
     
    <Composant/>
    </div>

    </div>
  );
}

export default App;

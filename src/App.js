import "./App.css";
import router from "./router";
import { RouterProvider } from "react-router-dom";


// import Component2 from './components/views/composant2';
// import Composant from './components/views/composant';

function App() {
  
  return (
    <div className="App">

    

      <RouterProvider router={router} />
    </div>
  );
}

export default App;

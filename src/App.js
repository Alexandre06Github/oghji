import "./App.css";
import router from "./router";
import { RouterProvider } from "react-router-dom";

import Composant from "./components/views/composant";


function App() {
  
  return (
    <div className="App">
      <h1>OGHJI</h1>

      <RouterProvider router={router} />
    </div>
  );
}

export default App;

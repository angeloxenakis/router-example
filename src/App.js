import './App.css';
import { Card } from "./components/Card"
import { Home } from "./components/Home"
import { NavBar } from "./components/NavBar"
import { BrowserRouter, Route } from "react-router-dom"

function App() {
  
  return (
    <div className="App">
      <Home />
      {/* <Card /> */}
    </div>
  );
}

export default App;

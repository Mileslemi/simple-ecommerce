import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        {/* put navbar here to be accessible all through */}
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/cart" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

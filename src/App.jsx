// App.jsx
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MainGame from "./pages/MainGame";

function App() {
  return (
    // Aquí se establece el basename para que las rutas funcionen en el contexto de /Color-Game/
    <Router basename="/Color-Game">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<MainGame />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

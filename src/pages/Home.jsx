// Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate("/game"); // Redirige a la ruta del juego principal
  };

  return (
    <div className="home-container">
      <h1 className="game-title">JUEGO</h1>
      <button className="play-button" onClick={handlePlayClick}>
        Play
      </button>
    </div>
  );
}

export default Home;

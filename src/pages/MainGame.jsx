import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import GameRulesContext from "../context/GameRulesContext";
import { registerSessionServ } from "../services/crudService";
import {
  COLORS,
  LABELS,
  PERSONAJES,
  TANGRAMS,
  WALLPAPERS,
} from "../utils/constantes";
import "./mainGame.css";

function MainGame() {
  const { state } = useLocation();
  const {
    isWrongColor,
    isWinner,
    setIsWinner,
    startGameTimer,
    stopGameTimer,
    pauseGameTimer,
    resumeGameTimer,
    totalTime,
  } = useContext(GameRulesContext);
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [sessionData] = useState(state?.sessionData || {});
  const [patientName] = useState(sessionData?.patientName || "Paciente");
  const [bgImg, setBgImg] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedLabel, setSelectedLabel] = useState(null);
  const [selectedTangrams, setSelectedTangrams] = useState([]);
  const [completedTangrams, setCompletedTangrams] = useState(0);
  const [numCorrects, setNumCorrects] = useState(0);
  const [numIncorrects, setNumIncorrects] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [showResume, setShowResume] = useState(false); // Controla visibilidad de estadísticas
  const [isPaused, setIsPaused] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (!sessionData?.patient || !sessionData?.therapist) {
      console.error("Datos de la sesión no proporcionados.");
      navigate("/dashboard");
    }
  }, [sessionData, navigate]);

  useEffect(() => {
    const randomTangrams = TANGRAMS.sort(() => Math.random() - 0.5).slice(0, 2);
    setSelectedTangrams(randomTangrams);
  }, []);

  const handleColorSelection = (colorObj) => {
    setSelectedColor(colorObj.color);
    setSelectedLabel(colorObj.label);

    if (!gameStarted) {
      setGameStarted(true);
      startGameTimer();
    }
  };

  const handleClearSelection = () => {
    setSelectedColor("lightgray");
    setSelectedLabel(null);
  };

  useEffect(() => {
    const randomImg = WALLPAPERS[Math.floor(Math.random() * WALLPAPERS.length)];
    setBgImg(randomImg);
  }, []);

  const handleCompleteTangram = () => {
    setCompletedTangrams((prev) => prev + 1);

    if (completedTangrams + 1 === selectedTangrams.length) {
      stopGameTimer();
      setIsWinner(true);
      setTimeout(() => {
        setShowResume(true);
      }, 5000);
    }
  };

  const updateStats = ({ correct }) => {
    setTotalAttempts((prev) => prev + 1);
    if (correct) {
      setNumCorrects((prev) => prev + 1);
    } else {
      setNumIncorrects((prev) => prev + 1);
    }
  };

  const handleEndGame = async () => {
    try {
      const finalSession = {
        idSesion: sessionData.idSesion,
        patient: sessionData.patient,
        therapist: sessionData.therapist,
        num_corrects: parseInt(numCorrects, 10),
        num_incorrects: parseInt(numIncorrects, 10),
        time_total: parseFloat(totalTime),
        session_at: new Date(sessionData.session_at).toISOString(),
      };

      await registerSessionServ(finalSession);
    } catch (error) {
      console.error("Error al registrar la sesión:", error);
    }
  };

  useEffect(() => {
    if (isWinner) {
      handleEndGame();
    }
  }, [isWinner]);

  const handlePause = () => {
    setIsPaused(true);
    pauseGameTimer();
  };

  const handleResume = () => {
    setIsPaused(false);
    resumeGameTimer();
  };

  return (
    <div className="main-game">
      <h1>MEMORIA ARTÍSTICA</h1>
      <h2>Jugando: {patientName}</h2>
      <div className="game-layout">
        <div
          className="tangram-area"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {selectedTangrams.map((TangramComponent, index) => (
            <TangramComponent
              key={index}
              selectedColor={selectedColor}
              selectedLabel={selectedLabel}
              letters={LABELS}
              onComplete={handleCompleteTangram}
              updateStats={updateStats}
            />
          ))}
        </div>
        <div className="color-section">
          <div className="color-selected-text">Color Seleccionado</div>
          <div
            className="selected-color-box"
            style={{ backgroundColor: selectedColor }}
          >
            {selectedLabel}
          </div>
            <div className="color-columns">
            {COLORS.map((colorObj, index) => (
              <div key={index} className="color-item">
                <span className="color-label">{colorObj.label}</span>
                <button
                  className="color-button"
                  style={{ backgroundColor: colorObj.color }}
                  onClick={() => handleColorSelection(colorObj)}
                />
              </div>
            ))}
          </div>
          <button className="action-button" onClick={handlePause}>
            PAUSAR
          </button>
          <button className="action-button" onClick={() => navigate("/")}>
            VOLVER
          </button>
        </div>
      </div>
      {isPaused && (
        <div className="paused">
          <div className="personajes">
            <h1>¡Recarguemos energías! </h1>
            <img src={PERSONAJES[2]} alt="Personaje descansando" />
            <img src={PERSONAJES[3]} alt="Personaje descansando" />
          </div>
          <button className="action-button" onClick={handleResume}>
            CONTINUAR
          </button>
        </div>
      )}
      
      {showResume && (
        <section className="resume">
          <h2>Estadísticas</h2>
          <p>Aciertos: {numCorrects}</p>
          <p>Errores: {numIncorrects}</p>
          <p>Intentos Totales: {totalAttempts}</p>
          <p>Tiempo Total: {totalTime}s</p>
          <button className="action-button" onClick={() => navigate("/dashboard")}>
            VOLVER
          </button>
        </section>
      )}

      <div className="feedback">
        {isWrongColor && (
          <>
            <h2 className="incorrect-txt">¡Ups! Ese color no es correcto</h2>
            <img src={PERSONAJES[0]} alt="Error" className="incorrect" />
          </>
        )}
        {isWinner && (
          <>
            <h2 className="winner-txt">
              ¡GANASTE! <br /> ¡FELICITACIONES!
            </h2>
            <img src={PERSONAJES[1]} alt="Ganador" className="winner-img" />
          </>
        )}
      </div>
    </div>
  );
}

export default MainGame;

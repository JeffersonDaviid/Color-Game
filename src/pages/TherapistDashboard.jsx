import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

import {
  getPatientsServ,
  registerPatientService,
  transferPatientService,
} from "../services/crudService";
import "./TherapistDashboard.css";

const TherapistDashboard = () => {
  const navigate = useNavigate();
  const { logout, userloged } = useContext(AuthContext);
  const [patients, setPatients] = useState([]);
  const [showTransferDiv, setShowTransferDiv] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [transferData, setTransferData] = useState({
    therapistTo: "",
    detail: "",
  });
  const [newPatient, setNewPatient] = useState({
    cedulaP: "",
    name: "",
    lastname: "",
    phone: "",
    cedulaT: userloged?.therapist?.cedulaT || "", // Incluye la cédula del terapeuta
  });

  // Función para obtener los pacientes del terapeuta
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        console.log("userloged en TherapistDashboard:", userloged); // Verificar contenido
        if (userloged && userloged.therapist && userloged.therapist.cedulaT) {
          const response = await getPatientsServ(userloged.therapist.cedulaT);
          setPatients(response.data || []);
        }
      } catch (error) {
        handleAPIError(error);
      }
    };
    fetchPatients();
  }, [userloged]);

  // Manejador para los cambios en el formulario de registro de paciente
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPatient({
      ...newPatient,
      [name]: value,
    });
  };

  const handleTransferChange = (e) => {
    const { name, value } = e.target;
    setTransferData({ ...transferData, [name]: value });
  };

  const handleTransferCancel = () => {
    setShowTransferDiv(false);
    setSelectedPatient(null);
    setTransferData({ therapistTo: "", detail: "" });
  };

  const handleTransferAccept = async () => {
    if (!transferData.therapistTo) {
      alert("Debe ingresar la cédula del terapeuta destino.");
      return;
    }
    try {
      const transferPayload = {
        idTransfer: generateSessionId(),
        patient: selectedPatient.cedulaP,
        therapist_from: userloged.therapist.cedulaT,
        therapist_to: transferData.therapistTo,
        detail: transferData.detail,
        transfer_at: new Date().toISOString(),
      };
      console.log("Transferencia enviada:", transferPayload);
      await transferPatientService(transferPayload);
      setShowTransferDiv(false);
      setSelectedPatient(null);
      setTransferData({ therapistTo: "", detail: "" });
      const response = await getPatientsServ(userloged.therapist.cedulaT);
      setPatients(response.data || []);
    } catch (error) {
      console.error("Error al realizar la transferencia:", error);
    }
  };

  // Manejador para el envío del formulario de registro de paciente
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(
        "Datos enviados al backend desde TherapistDashboard:",
        newPatient
      );

      // Registra al paciente
      await registerPatientService(newPatient);

      // Resetea el formulario pero conserva el campo 'cedulaT'
      setNewPatient({
        cedulaP: "",
        name: "",
        lastname: "",
        phone: "",
        cedulaT: userloged.therapist.cedulaT,
      });

      // Vuelve a cargar la lista de pacientes
      const response = await getPatientsServ(userloged.therapist.cedulaT);
      setPatients(response.data || []);
    } catch (error) {
      handleAPIError(error);
    }
  };

  const generateSessionId = () => {
    const randomPart = Math.floor(Math.random() * 10000);
    const timePart = new Date().getTime() % 100000;
    return `${timePart}${randomPart}`;
  };

  // Manejador para iniciar el juego con un paciente
  const handleStartGame = (patient) => {
    const sessionData = {
      idSesion: generateSessionId(),
      patient: patient.cedulaP,
      patientName: `${patient.name} ${patient.lastname}`,
      therapist: userloged.therapist.cedulaT,
      session_at: new Date().toISOString(),
    };
    navigate("/game", { state: { sessionData } });
  };

  // Manejador para redirigir a estadísticas de paciente
  const handleViewStats = (patient) => {
    navigate("/patient", {
      state: {
        cedulaP: patient.cedulaP,
        patientName: `${patient.name} ${patient.lastname}`,
        cedulaT: userloged.therapist.cedulaT,
        therapistName: `${userloged.therapist.name} ${userloged.therapist.lastname}`,
      },
    });
  };

  return (
    <div className="dashboard-container">
      <h5 className="dashboard-header">
        Bienvenido, {userloged?.therapist?.name}{" "}
        {userloged?.therapist?.lastname}
      </h5>

      <button
        className="dashboard-button"
        onClick={async () => {
          await logout();
          navigate("/login");
        }}
      >
        CERRAR SESIÓN
      </button>

      <h2>Pacientes</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Cédula</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Teléfono</th>
            <th>Acción</th>
            <th>Estadísticas</th>
            <th>Transferir</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(patients) &&
            patients.map((patient) => (
              <tr key={patient.cedulaP}>
                <td>{patient.cedulaP}</td>
                <td>{patient.name}</td>
                <td>{patient.lastname}</td>
                <td>{patient.phone}</td>
                <td>
                  <button
                    className="play-button"
                    onClick={() => handleStartGame(patient)}
                  >
                    Play
                  </button>
                </td>
                <td>
                  <button
                    className="stats-button"
                    onClick={() => handleViewStats(patient)}
                  >
                    Ver estadísticas
                  </button>
                </td>
                <td>
                  <button
                    className="transfer-button"
                    onClick={() => {
                      setSelectedPatient(patient);
                      setShowTransferDiv(true);
                    }}
                  >
                    Transferir
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <div className="form-container">
        <h3>Registrar Nuevo Paciente</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Cédula:</label>
            <input
              type="text"
              name="cedulaP"
              value={newPatient.cedulaP}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              value={newPatient.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Apellido:</label>
            <input
              type="text"
              name="lastname"
              value={newPatient.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Teléfono:</label>
            <input
              type="text"
              name="phone"
              value={newPatient.phone}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Registrar Paciente
          </button>
        </form>
      </div>

      {showTransferDiv && (
        <>
          <div className="overlay" onClick={handleTransferCancel}></div>
          <div className="transfer-container">
            <h3>Transferir Paciente</h3>
            <p>
              Paciente seleccionado: {selectedPatient?.name}{" "}
              {selectedPatient?.lastname}
            </p>
            <div className="form-group">
              <label>Cédula del terapeuta destino:</label>
              <input
                type="text"
                name="therapistTo"
                value={transferData.therapistTo}
                onChange={handleTransferChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Detalle (opcional):</label>
              <textarea
                name="detail"
                value={transferData.detail}
                onChange={handleTransferChange}
              />
            </div>
            <div className="transfer-buttons">
              <button className="accept-button" onClick={handleTransferAccept}>
                Aceptar
              </button>
              <button className="cancel-button" onClick={handleTransferCancel}>
                Cancelar
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TherapistDashboard;

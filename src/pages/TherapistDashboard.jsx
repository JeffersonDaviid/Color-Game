import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import {
  getPatientsServ,
  registerPatientService,
} from "../services/crudService";
import { handleAPIError } from "../utils/HandleAPIError";
import "./therapistDashboard.css";

const TherapistDashboard = () => {
  const navigate = useNavigate();
  const { logout, userloged } = useContext(AuthContext); // Obtén los datos del terapeuta desde el contexto
  const [patients, setPatients] = useState([]);
  const [newPatient, setNewPatient] = useState({
    cedulaP: "",
    name: "",
    lastname: "",
    phone: "",
  });

  // Función para obtener los pacientes del terapeuta
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await getPatientsServ(userloged.cedulaT);
        setPatients(response.data || []); // Se asume que la respuesta tiene la propiedad `data`
      } catch (error) {
        handleAPIError(error);
      }
    };

    if (userloged && userloged.cedulaT) {
      fetchPatients(); // Llama a la función si el terapeuta está logueado
    }
  }, [userloged]);

  // Manejador para los cambios en el formulario de registro de paciente
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPatient({
      ...newPatient,
      [name]: value,
    });
  };

  // Manejador para el envío del formulario de registro de paciente
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Incluimos la cédula del terapeuta logueado en el objeto del nuevo paciente
      const patientToRegister = {
        ...newPatient,
        cedulaT: userloged.cedulaT, // Aquí se asocia la cédula del terapeuta con el nuevo paciente
      };

      // Registra al paciente
      await registerPatientService(patientToRegister);
      setNewPatient({ cedulaP: "", name: "", lastname: "", phone: "" }); // Resetea el formulario

      // Vuelve a cargar la lista de pacientes
      const response = await getPatientsServ(userloged.cedulaT);
      setPatients(response.data || []);
    } catch (error) {
      handleAPIError(error);
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">
        Bienvenido, {userloged?.name} {userloged?.lastname}
      </h1>

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
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.cedulaP}>
              <td>{patient.cedulaP}</td>
              <td>{patient.name}</td>
              <td>{patient.lastname}</td>
              <td>{patient.phone}</td>
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
    </div>
  );
};

export default TherapistDashboard;

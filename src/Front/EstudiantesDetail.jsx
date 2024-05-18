import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Tabla from './Components/Table';

const columnasMaterias = [
  { header: 'Materia', accessor: 'nombre' },
  { header: 'Nota', accessor: 'nota' },
];

function EstudiantesDetail({ estudiantes }) {
  const { legajo } = useParams();
  const navigate = useNavigate();
  const estudiante = estudiantes.find(e => e.legajo === legajo);

  if (!estudiante) {
    return <div>Estudiante no encontrado</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen pt-16 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-11/12 max-w-2xl p-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Detalles del Estudiante</h2>
        <div className="mb-4">
          <p className="text-lg font-semibold text-gray-800">{`${estudiante.nombre} ${estudiante.apellido}`}</p>
          <p className="text-gray-600">Legajo: {estudiante.legajo}</p>
          <p className="text-gray-600">Edad: {estudiante.edad}</p>
          <p className="text-gray-600">Carrera: {estudiante.carrera}</p>
          <p className="text-gray-600">Email: {estudiante.email}</p>
          <p className="text-gray-600">Teléfono: {estudiante.telefono}</p>
          <p className="text-gray-600">Dirección: {estudiante.direccion}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Materias que cursa</h3>
          <Tabla columnas={columnasMaterias} datos={estudiante.materias} />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>
    </div>
  );
}

export default EstudiantesDetail;
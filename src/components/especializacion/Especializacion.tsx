import { useState } from 'react';

const temas = [
  {
    titulo: 'Terapia Cognitivo-Conductual',
    descripcion: 'Enfocada en modificar patrones de pensamiento y comportamiento para mejorar la salud mental.',
  },
  {
    titulo: 'Terapia Cognitiva Conductual en Niños y Adolescentes',
    descripcion: 'Adaptada para jóvenes, aborda desafíos emocionales y conductuales específicos de estas edades.',
  },
  {
    titulo: 'Evaluaciones Psicolaborales',
    descripcion: 'Procesos de selección y evaluación para determinar la idoneidad de candidatos en entornos laborales.',
  },
  {
    titulo: 'Certificada en Crianzas Respetuosas',
    descripcion: 'Promueve prácticas parentales basadas en el respeto mutuo y la empatía hacia los niños.',
  },
  {
    titulo: 'Certificada en Aptos Psicológicos para Licencia de Conducir',
    descripcion: 'Evaluaciones psicológicas necesarias para obtener o renovar licencias de conducir.',
  },
  {
    titulo: 'Diplomada en Psicología Infantil',
    descripcion: 'Diagnosticar e intervenir en problemas psicológicos y emocionales en niños, aplicando técnicas terapéuticas especializadas.',
  },
];

const Especializacion = () => {
  const [descripcionActiva, setDescripcionActiva] = useState<number | null>(null);

  const manejarClick = (index: number) => {
    setDescripcionActiva(index === descripcionActiva ? null : index);
  };

  return (
    <div className="flex flex-col items-center py-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Especializaciones</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {temas.map((tema, index) => (
          <div key={index} className="flex flex-col items-center w-full max-w-xs">
            <button
              onClick={() => manejarClick(index)}
              className={`w-40 h-40 flex items-center justify-center rounded-full text-center p-4 transition-all duration-300 ${
                descripcionActiva === index ? 'bg-blue-600 text-white' : 'bg-blue-200 text-gray-800 hover:bg-blue-500 hover:text-white'
              }`}
            >
              {tema.titulo}
            </button>
            {descripcionActiva === index && (
              <div className="mt-4 p-4 bg-gray-200 rounded-lg shadow-md text-center">
                <p>{tema.descripcion}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Especializacion;

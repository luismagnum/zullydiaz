import { IoStarSharp } from "react-icons/io5";

const Action = () => {
    return (
      <section className="relative bg-blue-100 text-center py-12 px-6 mx-4 rounded-lg shadow-md overflow-hidden">
        <div className="absolute inset-0 bg-cover opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-gray-900">Invierta en su activo más preciado</h2>
          <p className="text-lg text-gray-700 mt-2 mb-8">
            Inicie ahora su camino a una mente saludable. Agende su consulta ahora mismo.
          </p>
          <a 
          href="https://wa.me/542984792488?text=Hola quiero agendar una cita"
          className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          Agenda un turno
          </a>
        </div>
      </section>
    );
  };
  
  export default Action;
  
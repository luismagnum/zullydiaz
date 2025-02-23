import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

const Direccion = () => {
  return (
    <section className="bg-white p-6 md:p-2  mt-10 rounded-lg">
      <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-12">
        <div className="md:w-1/2 lg:w-1/3 mb-6 md:mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Dirección de mi Consultorio</h2>
          <ul className="space-y-8">
            <li className="flex items-center text-gray-600">
              <FaPhoneAlt className="text-blue-500 mr-3" />
              <span>+54 9 2984792488</span>
            </li>
            <li className="flex items-center text-gray-600">
              <FaEnvelope className="text-blue-500 mr-3" />
              <span>zullydiaz@gmail.com</span>
            </li>
            <li className="flex items-center text-gray-600">
              <FaMapMarkerAlt className="text-blue-500 mr-3" />
              <span>Saavedra 70. Instituto del Diagnostico</span>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 lg:w-1/3 flex justify-center">
          <Image
            src="/consultorio.png" 
            alt="Imagen del consultorio"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <a
          href="https://wa.me/542984792488?text=Hola quiero agendar una cita" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agenda un turno
        </a>
      </div>
    </section>
  );
};

export default Direccion;


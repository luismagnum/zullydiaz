import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-6 md:mb-0">
        <h2 className="text-2xl font-semibold text-white">Zully Diaz</h2>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold text-white">Enlaces</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#mett" className="hover:text-gray-100 transition">Sobre Mi</a>
            </li>
            <li>
              <a href="#psychotherapy" className="hover:text-gray-100 transition">Terapias</a>
            </li>
            <li>
              <a href="#action" className="hover:text-gray-100 transition">Contacto</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Síguenos</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="https://wa.me/542984792488" target="_blank" rel="noopener noreferrer" className="text-green-500 text-2xl hover:text-green-400 transition">
              <FaWhatsapp />
            </a>
            <a href="#home" className="text-blue-600 text-2xl hover:text-blue-400 transition">
              <FaFacebookF />
            </a>
            <a href="#home" className="text-pink-500 text-2xl hover:text-pink-400 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Zully Diaz - Todos los derechos reservados.
        <p>Devs Luis E. Diaz</p>
      </div>
    </footer>
  );
};

export default Footer;

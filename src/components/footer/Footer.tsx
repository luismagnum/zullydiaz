import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src="/psico.png"
            alt="Logo"
            width={50}
            height={50}
          />
          <span className="ml-1 text-xl font-semibold align-middle">Psico. Zully Diaz</span>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com/tuperfil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://www.instagram.com/tuperfil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-4 px-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Lic. Zully Díaz. Todos los derechos reservados.
          </p>
          <p className="text-sm text-gray-400">
            Desarrollado por Luis E. Díaz
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

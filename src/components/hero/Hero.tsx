"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-100 to-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="text-center md:text-left md:w-1/2 ml-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-10">
            Encuentra el equilibrio <span className="text-blue-600">mental y emocional</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Terapia psicológica profesional para ayudarte a mejorar tu bienestar y calidad de vida.
          </p>
          <div className="mt-6">
            <a
              href="https://wa.me/542984792488?text=Hola quiero agendar una cita" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agende su cita
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <Image
            src='/zully1.png'
            alt="Psicóloga en consulta"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

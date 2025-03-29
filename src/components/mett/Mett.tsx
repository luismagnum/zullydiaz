import Image from "next/image";

const Meet= () => {
    return (
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Licenciada Zully Diaz</h1>
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Conozca a su Psicóloga</h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <div className="relative lg:w-1/2">
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-600"></div>
            <div className="pl-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Experiencia</h3>
                <p className="text-gray-600">
                  Con más de 10 años de práctica, ha ayudado a numerosas personas a superar sus desafíos emocionales y mejorar su bienestar.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Atención integral a adultos, niños y adolescentes</h3>
                <p className="text-gray-600">
                  Ofrece un enfoque personalizado para cada etapa de la vida, asegurando un tratamiento adecuado y efectivo para todas las edades.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Más que consultorio</h3>
                <p className="text-gray-600">
                  Un espacio seguro y acogedor donde cada paciente se siente escuchado y comprendido, promoviendo un proceso de cambio real.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Compromiso con la excelencia</h3>
                <p className="text-gray-600">
                  Se mantiene en constante actualización y formación para ofrecer las mejores estrategias terapéuticas basadas en la evidencia.
                </p>
              </div>
            </div>
          </div>
  
          <div className="lg:w-1/2 flex justify-center">
            <Image
            src="/zully2.png"
            alt="Psicóloga"
            width={400}
            height={400}
            className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex justify-center mt-8">
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
  
  export default Meet;
  
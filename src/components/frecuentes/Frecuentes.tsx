import { SetStateAction, useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPlus, FaMinus } from 'react-icons/fa';
import Image from 'next/image';

const Frecuentes = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: '¿Usted atiende por obra social?',
      answer: 'No, por ahora no trabajo con ninguna obra social.',
    },
    {
      question: '¿Cómo funciona la psicoterapia?',
      answer: 'La psicoterapia es un proceso colaborativo donde trabajamos juntos para mejorar tu bienestar emocional.',
    },
    {
      question: '¿Cuánto tiempo dura una psicoterapia?',
      answer: 'La duración varía según las necesidades individuales, pero generalmente las sesiones son semanales y duran alrededor de 50 minutos.',
    },
    {
      question: '¿Cómo escoger una psicóloga adecuada para mí?',
      answer: 'Es importante sentirte cómodo y comprendido. Te recomiendo una consulta inicial para evaluar si encajamos bien.',
    },
    {
      question: '¿La psicoterapia es solo para problemas mentales graves?',
      answer: 'No, la psicoterapia también es útil para manejar el estrés diario, mejorar relaciones y crecimiento personal.',
    },
    {
      question: '¿Cómo es la confidencialidad en la psicoterapia?',
      answer: 'Toda la información compartida es confidencial y se maneja con el máximo respeto y profesionalismo.',
    },
  ];

  return (
    <section className="bg-white p-6 md:p-12 mx-8 rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Preguntas frecuentes</h2>
      <div className="flex flex-col md:flex-row md:space-x-12">
        <div className="md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 ml-8">¿Tienes algunas dudas?</h3>
          <p className="text-gray-600 mb-4 ml-8">No dudes en contactarme directamente.</p>
          <div className="flex items-center mb-4">
            <Image
              src="/zully1.png" 
              alt="Imagen de contacto"
              width={50}
              height={50}
              className="rounded-full ml-8"
            />
          </div>
          <a
            href="https://wa.me/542984792488?text=Hola quiero agendar una cita" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition ml-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactarme
          </a>
        </div>
        <div className="md:w-1/2 lg:w-2/3">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleQuestion(index)}
                className="flex justify-between items-center w-full text-left text-gray-800 font-semibold bg-gray-100 p-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              >
                <span>{faq.question}</span>
                {openQuestion === index ? <FaMinus /> : <FaPlus />}
              </button>
              {openQuestion === index && (
                <p className="mt-2 text-gray-600 p-4 bg-gray-50 rounded-lg">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Frecuentes;

import { FaHeart, FaBriefcase, FaSmile, FaUserCheck, FaClock, FaUtensils } from "react-icons/fa";

const Psychotherapy = () => {
  const benefits = [
    { icon: <FaHeart size={40} />, title: "Relaciones", description: "Mejora la comunicación y fortalece vínculos afectivos." },
    { icon: <FaBriefcase size={40} />, title: "Productividad", description: "Desarrolla hábitos y estrategias para gestionar el tiempo." },
    { icon: <FaSmile size={40} />, title: "Emociones", description: "Aprende a manejar el estrés, la ansiedad y el estado de ánimo." },
    { icon: <FaUserCheck size={40} />, title: "Autoestima", description: "Fortalece tu confianza y seguridad en ti mismo." },
    { icon: <FaClock size={40} />, title: "Procrastinación", description: "Supera la postergación y mejora tu enfoque." },
    { icon: <FaUtensils size={40} />, title: "Pérdida de peso", description: "Cambia hábitos alimenticios y mejora tu bienestar." },
  ];

  return (
    <section className="py-12 px-12 text-center">
      <h2 className="text-3xl text-gray-800 font-bold mb-8">¿Cómo la psicoterapia te puede ayudar?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="text-gray-800 mb-3">{benefit.icon}</div>
            <h3 className="text-lg text-gray-800 font-semibold">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <a
          href="https://wa.me/542984792488?text=Hola quiero agendar una cita" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agende su cita
        </a>
      </div>
    </section>
  );
};

export default Psychotherapy;

import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Ubicacion = () => {
  return (
    <section className="my-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <FaMapMarkerAlt className="text-red-500 text-3xl" />
          <h2 className="text-3xl font-bold text-gray-800">Ubicacion del Consultorio</h2>
        </div>

        <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden shadow-xl border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.2872901047344!2d-67.08621732486664!3d-39.099929008633204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95e219f2bf91f155%3A0x222a321c9a3415c6!2sSaavedra%2070%2C%20R8336%20Villa%20Regina%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses!2sar!4v1743216464842!5m2!1ses!2sar"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Ubicacion;

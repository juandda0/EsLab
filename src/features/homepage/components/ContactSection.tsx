import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Contáctanos
        </h2>
        <p className="text-gray-600 mb-8">
          Si tienes preguntas o quieres colaborar con nosotros, envíanos un mensaje.
        </p>
        <form className="grid gap-4 text-left">
          <input type="text" placeholder="Nombre" className="p-3 rounded-lg border border-gray-300" />
          <input type="email" placeholder="Correo" className="p-3 rounded-lg border border-gray-300" />
          <textarea placeholder="Mensaje" rows={5} className="p-3 rounded-lg border border-gray-300"></textarea>
          <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

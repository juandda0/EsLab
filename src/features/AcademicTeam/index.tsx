import React from "react";

const team = [
  { 
    name: "Ricardo Guzmán", 
    role: " Jefe Departamento de Matemáticas y Estadística", 
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=&auto=format&fit=crop&w=300&q=80" 
  },
  { 
    name: "Dra. Ana Gómez", 
    role: "Investigadora principal", 
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=&auto=format&fit=crop&w=300&q=80" 
  },
  { 
    name: "Juan Diego Diaz Avendaño", 
    role: "Asistente de sistemas", 
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=&auto=format&fit=crop&w=300&q=80" 
  },
];

const AcademicTeam: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Equipo Académico
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicTeam;

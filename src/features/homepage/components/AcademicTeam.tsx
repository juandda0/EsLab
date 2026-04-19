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
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#1d1d1f] max-w-sm leading-tight">
            Nuestro Equipo Académico
          </h2>
          <p className="text-xl text-[#86868b] font-medium max-w-xs">
            Excelencia investigativa y compromiso institucional en cada proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {team.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col"
            >
              <div className="relative mb-8 overflow-hidden rounded-2xl aspect-[4/5]">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#1d1d1f] tracking-tight mb-2 group-hover:text-[#16a34a] transition-colors duration-300">
                {member.name}
              </h3>
              <div className="h-[1px] w-8 bg-[#16a34a] mb-3 transition-all duration-300 group-hover:w-full"></div>
              <p className="text-[#86868b] font-medium text-lg leading-tight uppercase tracking-tight text-sm">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicTeam;

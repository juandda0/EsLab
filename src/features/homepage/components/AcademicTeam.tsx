import React from "react";
import teonilaPhoto from "../../../assets/Teonila Aguilar Jimenez.jpg";
import jairoPhoto from "../../../assets/Jairo Arturo Angel Guzman.jpg";
import juanDiegoPhoto from "../../../assets/Juan Diego Diaz Avendaño.webp";

const team = [
  { 
    name: "Teonila Aguilar Jimenez", 
    role: "Jefe Departamento de Geografía y Medio Ambiente", 
    img: teonilaPhoto 
  },
  { 
    name: "Jairo Arturo Angel Guzmán", 
    role: "Investigador Principal", 
    img: jairoPhoto 
  },
  { 
    name: "Juan Diego Diaz Avendaño", 
    role: "Asistente de sistemas", 
    img: juanDiegoPhoto 
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

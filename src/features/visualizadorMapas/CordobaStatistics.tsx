import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import { municipiosCordoba, getValor, type Categoria } from './data/cordobaData';

interface Props {
  categoria: Categoria;
  color: string;
}

const CordobaStatistics: React.FC<Props> = ({ categoria, color }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_filters, _setFilters] = useState({
    year: '2024',
    sexo: 'Todas',
    cursoVida: 'Todas',
    actorVial: 'Todas'
  });

  const total = municipiosCordoba.reduce((acc, m) => acc + getValor(m, categoria), 0);
  
  // Data simulada para replicar el Dashboard ANSV
  const monthlyData = [
    { name: 'Ene', value: Math.round(total * 0.45) },
    { name: 'Feb', value: Math.round(total * 0.55) },
  ];

  const yearlyData = [
    { year: '2016', v: 45231 }, { year: '2017', v: 40088 }, { year: '2018', v: 39517 },
    { year: '2019', v: 36812 }, { year: '2020', v: 14458 }, { year: '2021', v: 24364 },
    { year: '2022', v: 32235 }, { year: '2023', v: 33107 }, { year: '2024', v: 31044 }
  ];

  const genderData = [
    { name: 'Hombre', value: 62.1 },
    { name: 'Mujer', value: 37.9 }
  ];

  const actorVialData = [
    { name: 'Peatón', value: 16.6 },
    { name: 'U. Moto', value: 64.6 },
    { name: 'U. Vehículo', value: 12.8 },
    { name: 'U. Bicicleta', value: 6.0 }
  ];

  const lifeCycleData = [
    { label: 'Persona Mayor (60+)', val: 10.6, color: '#f97316' },
    { label: 'Adultez (29-59)', val: 48.5, color: '#f43f5e' },
    { label: 'Juventud (18-28)', val: 31.4, color: '#3b82f6' },
    { label: 'Adolescencia (12-17)', val: 6.0, color: '#16a34a' },
    { label: 'Infancia (6-11)', val: 2.4, color: '#8b5cf6' },
    { label: 'Primera Infancia (0-5)', val: 1.1, color: '#6366f1' }
  ];

  const GENDER_COLORS = [color, '#3b82f6'];
  const ACTOR_COLORS = ['#3b82f6', '#f59e0b', '#10b981', '#ef4444'];

  return (
    <div className="mt-12 space-y-6">
      
      {/* ── SECCIÓN DE FILTROS ── */}
      <div className="bg-[#1d1d1f] p-8 rounded-3xl shadow-2xl flex flex-col lg:flex-row gap-8 items-center border border-white/5">
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {[
            { label: 'Año del siniestro', options: ['2024', '2023', '2022'] },
            { label: 'Depto/Municipio', options: ['Córdoba'] },
            { label: 'Región', options: ['Todas'] },
            { label: 'Sexo', options: ['Todas', 'Hombre', 'Mujer'] },
            { label: 'Curso de vida', options: ['Todas'] },
            { label: 'Actor vial', options: ['Todas'] }
          ].map((f) => (
            <div key={f.label} className="space-y-2">
              <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] ml-1">{f.label}</label>
              <select className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-xs outline-none focus:ring-1 focus:ring-white/30 transition-all cursor-pointer appearance-none hover:bg-white/10">
                {f.options.map(opt => <option key={opt} value={opt} className="bg-[#1d1d1f]">{opt}</option>)}
              </select>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center border-l border-white/10 pl-10 hidden lg:flex">
          <div className="text-white text-3xl font-bold tracking-tighter">LAGeo</div>
          <div className="text-white/30 text-[9px] uppercase font-black tracking-[0.3em] mt-1">OBSERVATORIO</div>
        </div>
      </div>

      {/* ── FILA SUPERIOR: RESUMEN Y TENDENCIAS ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
        {/* KPI: Total */}
        <div className="lg:col-span-3 bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
          <h3 className="text-[11px] font-bold text-[#86868b] uppercase tracking-widest mb-6 leading-tight max-w-[180px]">
            Número de {categoria} acumulado 2024
          </h3>
          <div className="text-8xl font-bold tracking-tighter text-[#1d1d1f] mb-4">
            {total.toLocaleString('es-CO')}
          </div>
          <div className="w-16 h-1 bg-[#16a34a] rounded-full"></div>
        </div>

        {/* Gráfico Mensual */}
        <div className="lg:col-span-4 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
          <h3 className="text-[10px] font-bold text-[#86868b] uppercase tracking-widest mb-8">Evolución mensual (Ene-Feb)</h3>
          <div className="flex-1 min-h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#86868b', fontWeight: 600 }} />
                <YAxis hide />
                <Tooltip cursor={{ fill: '#f5f5f7' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }} />
                <Bar dataKey="value" fill="#0071e3" radius={[8, 8, 0, 0]} barSize={50} label={{ position: 'top', fontSize: 10, fontWeight: 700, fill: '#1d1d1f' }} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico Histórico */}
        <div className="lg:col-span-5 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
          <h3 className="text-[10px] font-bold text-[#86868b] uppercase tracking-widest mb-8">Tendencia anual 2016-2024</h3>
          <div className="flex-1 min-h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={yearlyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#86868b' }} />
                <YAxis hide />
                <Tooltip cursor={{ fill: '#f5f5f7' }} contentStyle={{ borderRadius: '12px', border: 'none' }} />
                <Bar dataKey="v" fill="#5ac8fa" radius={[4, 4, 0, 0]} label={{ position: 'top', fontSize: 9, fill: '#86868b' }} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* ── FILA INTERMEDIA: DISTRIBUCIONES ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-[10px] font-bold text-[#86868b] uppercase tracking-widest mb-10 text-center">Distribución según Sexo</h3>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={genderData} innerRadius={70} outerRadius={95} paddingAngle={8} dataKey="value" stroke="none">
                  {genderData.map((_e, i) => <Cell key={i} fill={GENDER_COLORS[i]} />)}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '11px', fontWeight: 600 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-4 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-[10px] font-bold text-[#86868b] uppercase tracking-widest mb-10 text-center">Distribución según Actor Vial</h3>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={actorVialData} innerRadius={70} outerRadius={95} paddingAngle={2} dataKey="value" stroke="none">
                  {actorVialData.map((_e, i) => <Cell key={i} fill={ACTOR_COLORS[i % ACTOR_COLORS.length]} />)}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 600 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Panel informativo (No Aplica / Nota) */}
        <div className="lg:col-span-4 bg-[#f5f5f7] p-10 rounded-3xl flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
               <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xs font-black text-[#1d1d1f] mb-3 uppercase tracking-[0.2em]">Cruce de variables</h3>
            <p className="text-[11px] text-[#86868b] leading-relaxed max-w-[200px]">
              El análisis cruzado de <span className="text-[#1d1d1f] font-bold">Actor vial vs Curso de vida</span> requiere datos de Medicina Legal específicos.
            </p>
            <div className="mt-6 px-4 py-2 border border-[#d2d2d7] rounded-full text-[9px] font-bold text-[#86868b] uppercase tracking-widest">
               No Aplica para esta muestra
            </div>
        </div>
      </div>

      {/* ── FILA INFERIOR: TABLA Y DETALLE ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-20">
        {/* Tabla de Municipios */}
        <div className="lg:col-span-7 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 border-b border-gray-50 bg-[#fbfbfd]">
            <h3 className="font-bold text-[11px] uppercase tracking-[0.2em] text-[#86868b]">Incidencia por Municipio de ocurrencia</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#f5f5f7] text-[#86868b] font-bold">
                <tr>
                  <th className="px-8 py-5 tracking-widest uppercase text-[9px]">Municipio</th>
                  <th className="px-8 py-5 tracking-widest uppercase text-[9px]">Casos</th>
                  <th className="px-8 py-5 tracking-widest uppercase text-[9px] text-right">% Participación</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {municipiosCordoba.slice(0, 8).map((m) => (
                  <tr key={m.codigo} className="hover:bg-[#fbfbfd] transition-colors group">
                    <td className="px-8 py-4 font-bold text-[#1d1d1f] group-hover:text-[#16a34a] transition-colors">{m.nombre}</td>
                    <td className="px-8 py-4 text-[#424245]">{getValor(m, categoria)}</td>
                    <td className="px-8 py-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <span className="font-black text-[#1d1d1f]">{((getValor(m, categoria) / total) * 100).toFixed(1)}%</span>
                        <div className="w-12 h-1 bg-gray-100 rounded-full overflow-hidden">
                           <div className="h-full bg-[#16a34a]" style={{ width: `${(getValor(m, categoria) / total) * 100}%` }}></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Barras de Curso de Vida */}
        <div className="lg:col-span-5 bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-[10px] font-bold text-[#86868b] uppercase tracking-widest mb-10 leading-tight">Distribución por Curso de Vida</h3>
          <div className="space-y-7">
            {lifeCycleData.map(item => (
              <div key={item.label} className="group cursor-default">
                <div className="flex justify-between items-end mb-2.5">
                  <span className="text-[11px] font-bold text-[#424245] group-hover:text-[#1d1d1f] transition-colors uppercase tracking-tight">{item.label}</span>
                  <span className="text-xs font-black text-[#1d1d1f]">{item.val}%</span>
                </div>
                <div className="h-2 w-full bg-[#f5f5f7] rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${item.val}%`, backgroundColor: item.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CordobaStatistics;

import React, { useState, useMemo } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {
  municipiosCordoba,
  categorias,
  getValor,
  type Categoria,
} from './data/cordobaData';
import mapaCordobaExcel from '../../assets/MAPA DE CORDOBA_USANDO MACROS.xlsx';
import municipiosColombiaGeoJson from '../../assets/municipios_colombia.json';


// Fix leaflet icons in Vite
import L from 'leaflet';
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Interpolate between two hex colors
function interpolateColor(color1: string, color2: string, factor: number): string {
  const r1 = parseInt(color1.slice(1, 3), 16);
  const g1 = parseInt(color1.slice(3, 5), 16);
  const b1 = parseInt(color1.slice(5, 7), 16);
  const r2 = parseInt(color2.slice(1, 3), 16);
  const g2 = parseInt(color2.slice(3, 5), 16);
  const b2 = parseInt(color2.slice(5, 7), 16);
  const r = Math.round(r1 + (r2 - r1) * factor);
  const g = Math.round(g1 + (g2 - g1) * factor);
  const b = Math.round(b1 + (b2 - b1) * factor);
  return `rgb(${r}, ${g}, ${b})`;
}

const databases = [
  { id: 'excel', name: 'Excel (Muestra Actual)', source: 'Archivo local' },
  { id: 'siedco', name: 'SIEDCO (Policía Nacional)', source: 'Portal de Datos' },
  { id: 'forensis', name: 'Forensis (Medicina Legal)', source: 'API Institucional' },
  { id: 'ins', name: 'Instituto Nacional de Salud', source: 'SIVIGILA' },
  { id: 'dane', name: 'DANE (Censo Nacional)', source: 'Microdatos' },
];

const CORDOBA_CENTER: [number, number] = [8.4, -75.7];
const CORDOBA_ZOOM = 8;

const CordobaView: React.FC = () => {
  const [categoria, setCategoria] = useState<Categoria>('Víctimas');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredMunicipio, setHoveredMunicipio] = useState<string | null>(null);
  const [dbSource, setDbSource] = useState(databases[0].id);
  const [isSyncing, setIsSyncing] = useState(false);

  // Simular sincronización al cambiar de base de datos
  const handleDbChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDb = e.target.value;
    setIsSyncing(true);
    setDbSource(newDb);
    setTimeout(() => setIsSyncing(false), 800);
  };

  // Filtrar el GeoJSON para tener solo los municipios de Córdoba (DPTO_CCDGO === '23')
  const cordobaMunicipiosGeoJson = useMemo(() => {
    const filtered = (municipiosColombiaGeoJson as any).features.filter(
      (f: any) => f.properties.DPTO_CCDGO === '23'
    );
    return {
      type: 'FeatureCollection',
      features: filtered,
    };
  }, []);

  const catInfo = categorias.find((c) => c.key === categoria)!;

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return municipiosCordoba;
    const term = searchTerm.toLowerCase();
    return municipiosCordoba.filter((m) => m.nombre.toLowerCase().includes(term));
  }, [searchTerm]);

  const valores = municipiosCordoba.map((m) => getValor(m, categoria));
  const minVal = Math.min(...valores);
  const maxVal = Math.max(...valores);

  const totalValor = filteredData.reduce(
    (sum, m) => sum + getValor(m, categoria),
    0
  );
  const municipioMax = filteredData.reduce(
    (prev, curr) => (getValor(curr, categoria) > getValor(prev, categoria) ? curr : prev),
    filteredData[0]
  );

  const formatNumber = (n: number) => n.toLocaleString('es-CO');

  // Función para obtener el color del polígono
  const getStyle = (feature: any) => {
    // El código en el geojson es DPTO_CCDGO + MPIO_CCDGO
    const mpioCode = feature.properties.DPTO_CCDGO + feature.properties.MPIO_CCDGO;
    const municipio = municipiosCordoba.find((m) => m.codigo === mpioCode);
    const valor = municipio ? getValor(municipio, categoria) : 0;
    
    const factor = maxVal === minVal ? 0 : (valor - minVal) / (maxVal - minVal);
    const fillColor = interpolateColor('#f8fafc', catInfo.color, factor);
    
    const isActive = hoveredMunicipio === mpioCode;

    return {
      fillColor: fillColor,
      weight: isActive ? 3 : 1.5,
      opacity: 1,
      color: isActive ? '#fff' : '#475569', // Color de los bordes (subrayado)
      fillOpacity: 0.8,
    };
  };

  return (
    <section className="min-h-screen bg-[#f5f5f7] py-12 text-[#1d1d1f]">
      {/* Indicador de sincronización */}
      {isSyncing && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[2000] bg-white/90 backdrop-blur-lg px-6 py-2 rounded-full shadow-2xl border border-gray-100 flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="w-2 h-2 bg-[#16a34a] rounded-full animate-ping"></div>
          <span className="text-[10px] font-bold text-[#1d1d1f] uppercase tracking-widest">Sincronizando Datos...</span>
        </div>
      )}

      <div className="max-w-[1440px] mx-auto px-6 md:px-8">

        {/* ── HEADER ── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 pb-6 border-b border-[#d2d2d7] gap-6">
          <div className="space-y-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter margin-0">
                Córdoba
              </h1>
              <p className="text-[#86868b] mt-2 text-lg font-medium">
                Análisis Geoespacial Territorial
              </p>
            </div>
            
            <div className="space-y-1.5 pt-2">
              <label className="text-[10px] font-bold text-[#86868b] uppercase tracking-[0.2em] ml-1">Base de Datos Actual</label>
              <div className="relative group max-w-sm">
                <select 
                  value={dbSource}
                  onChange={handleDbChange}
                  className="w-full bg-white border border-[#d2d2d7] text-[#1d1d1f] rounded-xl pl-4 pr-10 py-3 text-sm font-bold outline-none focus:ring-2 focus:ring-[#16a34a]/20 focus:border-[#16a34a] appearance-none cursor-pointer hover:bg-gray-50 transition-all"
                >
                  {databases.map(db => (
                    <option key={db.id} value={db.id}>{db.name}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#86868b]">
                  <span className="text-xs">↓</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="text-[9px] font-black text-[#86868b] uppercase tracking-widest">Estado del Origen</div>
              <div className="text-[11px] font-bold text-[#16a34a]">Archivo Excel Conectado</div>
            </div>
            <a
              href={mapaCordobaExcel}
              download
              className="bg-[#16a34a] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-[#15803d] transition-all shadow-xl active:scale-95"
            >
              Descargar Datos
            </a>
          </div>
        </div>

        {/* ── STATS CARDS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Municipios', value: 30 },
            { label: `Total ${categoria}`, value: formatNumber(totalValor) },
            { label: 'Máximo Histórico', value: municipioMax?.nombre ?? '-' },
            { label: 'Frecuencia', value: 'Anual' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="text-[#86868b] text-[10px] font-bold uppercase tracking-widest mb-2">
                {stat.label}
              </div>
              <div className="text-2xl font-bold">
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* ── CONTROLS ── */}
        <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center mb-8 gap-4">
          <div className="flex overflow-x-auto pb-2 lg:pb-0 gap-2 bg-[#e8e8ed] p-1.5 rounded-xl no-scrollbar">
            {categorias.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setCategoria(cat.key)}
                className={`whitespace-nowrap px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                  categoria === cat.key 
                    ? 'bg-white text-black shadow-sm' 
                    : 'text-[#424245] hover:bg-white/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Buscar municipio"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-6 py-3 rounded-xl border border-[#d2d2d7] bg-white text-sm w-full lg:w-72 outline-none focus:ring-2 focus:ring-[#16a34a]/20 focus:border-[#16a34a] transition-all"
          />
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,360px] gap-8 items-start">
          
          {/* MAP CONTAINER */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-[700px] lg:h-[800px]">
            <div className="flex-1 w-full bg-[#f5f5f7]">
              <MapContainer
                center={CORDOBA_CENTER}
                zoom={CORDOBA_ZOOM}
                style={{ height: '100%', width: '100%' }}
                zoomControl={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
                  url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
                />

                <GeoJSON
                  data={cordobaMunicipiosGeoJson as any}
                  style={getStyle}
                  onEachFeature={(feature, layer) => {
                    const mpioCode = feature.properties.DPTO_CCDGO + feature.properties.MPIO_CCDGO;
                    const municipio = municipiosCordoba.find((m) => m.codigo === mpioCode);
                    
                    layer.on({
                      mouseover: () => setHoveredMunicipio(mpioCode),
                      mouseout: () => setHoveredMunicipio(null),
                    });

                    if (municipio) {
                      layer.bindTooltip(`
                        <div style="padding: 10px; font-family: -apple-system, sans-serif; border: none !important;">
                          <div style="font-weight: 700; font-size: 1.1rem; color: #1d1d1f; margin-bottom: 8px;">
                            ${municipio.nombre}
                          </div>
                          <div style="display: grid; grid-template-columns: 1fr auto; gap: 8px; font-size: 0.9rem; color: #424245;">
                            <span>${categoria}:</span> <strong style="color: #1d1d1f">${formatNumber(getValor(municipio, categoria))}</strong>
                          </div>
                        </div>
                      `, { sticky: true, opacity: 1, className: 'apple-tooltip' });
                    }
                  }}
                />
              </MapContainer>
            </div>

            {/* LEGEND */}
            <div className="bg-white p-6 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-center gap-6">
              <span className="text-[10px] font-bold text-[#86868b] uppercase tracking-widest">Intensidad</span>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold text-[#86868b]">BAJA</span>
                <div
                  className="w-40 md:w-60 h-2 rounded-full"
                  style={{
                    background: `linear-gradient(to right, #f8fafc, ${catInfo.color})`,
                  }}
                />
                <span className="text-[10px] font-bold text-[#86868b]">ALTA</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR: LIST */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col h-[550px] lg:h-[600px]">
            <div className="p-6 border-b border-gray-50">
              <h3 className="text-xl font-bold">Distribución</h3>
              <p className="text-[#86868b] text-sm font-medium">Orden jerárquico</p>
            </div>

            <div className="overflow-y-auto flex-1 p-2 custom-scrollbar">
              {[...filteredData]
                .sort((a, b) => getValor(b, categoria) - getValor(a, categoria))
                .map((mun) => {
                  const valor = getValor(mun, categoria);
                  const factor = maxVal === minVal ? 0 : (valor - minVal) / (maxVal - minVal);
                  const isHovered = hoveredMunicipio === mun.codigo;

                  return (
                    <div
                      key={mun.codigo}
                      onMouseEnter={() => setHoveredMunicipio(mun.codigo)}
                      onMouseLeave={() => setHoveredMunicipio(null)}
                      className={`p-4 m-1 rounded-2xl cursor-pointer transition-all ${
                        isHovered ? 'bg-[#f5f5f7]' : 'bg-transparent'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-bold text-sm">{mun.nombre}</span>
                        <span className={`font-bold ${isHovered ? 'text-[#16a34a]' : 'text-[#1d1d1f]'}`}>
                          {formatNumber(valor)}
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full transition-all duration-700 ease-out"
                          style={{
                            width: `${factor * 100}%`,
                            backgroundColor: catInfo.color,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>



        <div className="mt-12 text-center">
          <p className="text-[#86868b] text-xs font-medium">
            © {new Date().getFullYear()} GeoLab — Departamento de Córdoba, Colombia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CordobaView;

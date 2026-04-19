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

const CORDOBA_CENTER: [number, number] = [8.4, -75.7];
const CORDOBA_ZOOM = 8;

const CordobaView: React.FC = () => {
  const [categoria, setCategoria] = useState<Categoria>('Víctimas');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredMunicipio, setHoveredMunicipio] = useState<string | null>(null);

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
    <section
      style={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f7',
        padding: '3rem 0',
        color: '#1d1d1f',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>

        {/* ── HEADER ── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '2.5rem',
            borderBottom: '1px solid #d2d2d7',
            paddingBottom: '1.5rem',
          }}
        >
          <div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, margin: 0, letterSpacing: '-0.02em' }}>
              Córdoba
            </h1>
            <p style={{ color: '#86868b', margin: '0.5rem 0 0', fontSize: '1.1rem', fontWeight: 500 }}>
              Análisis Estadístico Territorial
            </p>
          </div>

          <a
            href={mapaCordobaExcel}
            download
            style={{
              padding: '0.6rem 1.2rem',
              borderRadius: '20px',
              backgroundColor: '#16a34a',
              color: '#ffffff',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#15803d'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#16a34a'; }}
          >
            Descargar Datos
          </a>
        </div>

        {/* ── STATS CARDS ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {[
            { label: 'Municipios', value: 30 },
            { label: `Total ${categoria}`, value: formatNumber(totalValor) },
            { label: 'Máximo Histórico', value: municipioMax?.nombre ?? '-' },
            { label: 'Frecuencia', value: 'Anual' },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '18px',
                padding: '1.5rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                border: '1px solid #e5e7eb',
              }}
            >
              <div style={{ color: '#86868b', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* ── CONTROLS ── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', gap: '0.5rem', backgroundColor: '#e8e8ed', padding: '0.4rem', borderRadius: '12px' }}>
            {categorias.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setCategoria(cat.key)}
                style={{
                  padding: '0.5rem 1.2rem',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: categoria === cat.key ? '#ffffff' : 'transparent',
                  color: categoria === cat.key ? '#000000' : '#424245',
                  boxShadow: categoria === cat.key ? '0 2px 6px rgba(0,0,0,0.1)' : 'none',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  transition: 'all 0.2s',
                }}
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
            style={{
              padding: '0.7rem 1.2rem',
              borderRadius: '10px',
              border: '1px solid #d2d2d7',
              backgroundColor: '#ffffff',
              fontSize: '0.9rem',
              width: '280px',
              outlineColor: '#16a34a',
            }}
          />
        </div>

        {/* ── MAIN CONTENT ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 400px',
            gap: '2rem',
            alignItems: 'start',
          }}
        >
          {/* MAP CONTAINER */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              border: '1px solid #e5e7eb',
            }}
          >
            <MapContainer
              center={CORDOBA_CENTER}
              zoom={CORDOBA_ZOOM}
              style={{ height: '650px', width: '100%', background: '#f5f5f7' }}
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

            {/* LEGEND overlay style */}
            <div
              style={{
                backgroundColor: '#ffffff',
                padding: '1.2rem 2rem',
                borderTop: '1px solid #f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.5rem',
              }}
            >
              <span style={{ fontSize: '0.85rem', color: '#86868b', fontWeight: 600 }}>INTENSIDAD</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#86868b' }}>BAJA</span>
                <div
                  style={{
                    width: '180px',
                    height: '10px',
                    borderRadius: '5px',
                    background: `linear-gradient(to right, #f8fafc, ${catInfo.color})`,
                  }}
                />
                <span style={{ fontSize: '0.75rem', color: '#86868b' }}>ALTA</span>
              </div>
            </div>
          </div>

          {/* LIST SIDEBAR */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              border: '1px solid #e5e7eb',
              overflow: 'hidden',
              maxHeight: '730px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ padding: '1.5rem', borderBottom: '1px solid #f0f0f0' }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700 }}>Distribución</h3>
              <p style={{ margin: '0.3rem 0 0', color: '#86868b', fontSize: '0.9rem' }}>Orden jerárquico</p>
            </div>

            <div style={{ overflowY: 'auto', flex: 1, padding: '0 0.5rem' }}>
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
                      style={{
                        padding: '1.2rem 1rem',
                        margin: '0.4rem',
                        borderRadius: '14px',
                        cursor: 'pointer',
                        backgroundColor: isHovered ? '#f5f5f7' : 'transparent',
                        transition: 'background-color 0.2s',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                        <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{mun.nombre}</span>
                        <span style={{ fontWeight: 700, fontSize: '1rem', color: isHovered ? '#16a34a' : '#1d1d1f' }}>
                          {formatNumber(valor)}
                        </span>
                      </div>
                      <div style={{ height: '6px', borderRadius: '3px', backgroundColor: '#e5e7eb', overflow: 'hidden' }}>
                        <div
                          style={{
                            height: '100%',
                            width: `${factor * 100}%`,
                            backgroundColor: catInfo.color,
                            transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: '#86868b', fontSize: '0.85rem' }}>
            © 2024 EstLab — Departamento de Córdoba, Colombia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CordobaView;

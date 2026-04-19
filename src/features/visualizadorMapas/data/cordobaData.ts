// Datos consolidados de los municipios de Córdoba
// Fuente: Mapa de Córdoba (Excel original) + coordenadas geográficas DANE

export type Categoria = 'Todos' | 'Víctimas' | 'Homicidios' | 'Desplazamiento' | 'Población';

export interface MunicipioDato {
  nombre: string;
  codigo: string; // Código DIVIPOLA
  lat: number;
  lng: number;
  victimas: number;
  homicidios: number;
  desplazamiento: number;
  poblacion: number;
}

export const municipiosCordoba: MunicipioDato[] = [
  { nombre: 'Montería',        codigo: '23001', lat: 8.7574,  lng: -75.8846, victimas: 12450, homicidios: 87,  desplazamiento: 4500, poblacion: 495450 },
  { nombre: 'Ayapel',          codigo: '23068', lat: 8.3147,  lng: -75.1479, victimas: 3200,  homicidios: 45,  desplazamiento: 1800, poblacion: 52000  },
  { nombre: 'Buenavista',      codigo: '23079', lat: 8.2581,  lng: -74.9778, victimas: 980,   homicidios: 12,  desplazamiento: 420,  poblacion: 14500  },
  { nombre: 'Canalete',        codigo: '23090', lat: 8.7723,  lng: -76.2327, victimas: 1230,  homicidios: 22,  desplazamiento: 560,  poblacion: 25000  },
  { nombre: 'Cereté',          codigo: '23162', lat: 8.8847,  lng: -75.7918, victimas: 4800,  homicidios: 38,  desplazamiento: 2100, poblacion: 98000  },
  { nombre: 'Chimá',           codigo: '23168', lat: 9.1503,  lng: -75.6211, victimas: 890,   homicidios: 8,   desplazamiento: 310,  poblacion: 16000  },
  { nombre: 'Chinú',           codigo: '23182', lat: 9.1113,  lng: -75.3921, victimas: 2100,  homicidios: 28,  desplazamiento: 980,  poblacion: 42000  },
  { nombre: 'Ciénaga de Oro',  codigo: '23189', lat: 8.8863,  lng: -75.6237, victimas: 3400,  homicidios: 42,  desplazamiento: 1500, poblacion: 58000  },
  { nombre: 'Cotorra',         codigo: '23300', lat: 8.9882,  lng: -75.8023, victimas: 780,   homicidios: 9,   desplazamiento: 280,  poblacion: 20000  },
  { nombre: 'La Apartada',     codigo: '23350', lat: 8.0010,  lng: -74.9703, victimas: 1100,  homicidios: 18,  desplazamiento: 490,  poblacion: 17500  },
  { nombre: 'Lorica',          codigo: '23417', lat: 9.2368,  lng: -75.8115, victimas: 5600,  homicidios: 55,  desplazamiento: 2800, poblacion: 120000 },
  { nombre: 'Los Córdobas',    codigo: '23419', lat: 8.8790,  lng: -76.3488, victimas: 1700,  homicidios: 30,  desplazamiento: 780,  poblacion: 29000  },
  { nombre: 'Momil',           codigo: '23464', lat: 9.2391,  lng: -75.6759, victimas: 650,   homicidios: 7,   desplazamiento: 210,  poblacion: 14000  },
  { nombre: 'Montelíbano',     codigo: '23466', lat: 7.9798,  lng: -75.4279, victimas: 6800,  homicidios: 92,  desplazamiento: 3200, poblacion: 95000  },
  { nombre: 'Moñitos',         codigo: '23500', lat: 9.2460,  lng: -76.1423, victimas: 920,   homicidios: 14,  desplazamiento: 380,  poblacion: 22000  },
  { nombre: 'Planeta Rica',    codigo: '23555', lat: 8.4085,  lng: -75.5836, victimas: 4200,  homicidios: 50,  desplazamiento: 1950, poblacion: 82000  },
  { nombre: 'Pueblo Nuevo',    codigo: '23570', lat: 8.2847,  lng: -75.3892, victimas: 1450,  homicidios: 20,  desplazamiento: 620,  poblacion: 28000  },
  { nombre: 'Puerto Escondido', codigo: '23574', lat: 8.5669, lng: -76.2453, victimas: 1800,  homicidios: 32,  desplazamiento: 850,  poblacion: 32000  },
  { nombre: 'Puerto Libertador', codigo: '23580', lat: 7.8945, lng: -75.6784, victimas: 5500, homicidios: 78,  desplazamiento: 2600, poblacion: 56000  },
  { nombre: 'Purísima',        codigo: '23586', lat: 9.2396,  lng: -75.7257, victimas: 780,   homicidios: 10,  desplazamiento: 290,  poblacion: 18000  },
  { nombre: 'Sahagún',         codigo: '23660', lat: 8.9506,  lng: -75.4448, victimas: 4900,  homicidios: 62,  desplazamiento: 2300, poblacion: 96000  },
  { nombre: 'San Andrés de Sotavento', codigo: '23670', lat: 9.1591, lng: -75.1881, victimas: 2800, homicidios: 35, desplazamiento: 1300, poblacion: 55000 },
  { nombre: 'San Antero',      codigo: '23672', lat: 9.3768,  lng: -75.7575, victimas: 1600,  homicidios: 22,  desplazamiento: 720,  poblacion: 30000  },
  { nombre: 'San Bernardo del Viento', codigo: '23675', lat: 9.3578, lng: -75.9547, victimas: 1200, homicidios: 16, desplazamiento: 510, poblacion: 26000 },
  { nombre: 'San Carlos',      codigo: '23678', lat: 8.7749,  lng: -75.6986, victimas: 2100,  homicidios: 29,  desplazamiento: 960,  poblacion: 37000  },
  { nombre: 'San José de Uré', codigo: '23682', lat: 7.7264,  lng: -75.5340, victimas: 3200,  homicidios: 48,  desplazamiento: 1500, poblacion: 28000  },
  { nombre: 'San Pelayo',      codigo: '23686', lat: 9.0103,  lng: -75.8369, victimas: 2400,  homicidios: 31,  desplazamiento: 1100, poblacion: 45000  },
  { nombre: 'Tierralta',       codigo: '23807', lat: 8.1739,  lng: -76.0596, victimas: 7800,  homicidios: 105, desplazamiento: 3700, poblacion: 115000 },
  { nombre: 'Tuchín',         codigo: '23815', lat: 9.1805,  lng: -75.5478, victimas: 980,   homicidios: 13,  desplazamiento: 390,  poblacion: 22000  },
  { nombre: 'Valencia',        codigo: '23855', lat: 8.2601,  lng: -76.1460, victimas: 3600,  homicidios: 55,  desplazamiento: 1700, poblacion: 52000  },
];

export const categorias: { label: string; key: Categoria; color: string }[] = [
  { label: 'Víctimas',       key: 'Víctimas',       color: '#ef4444' },
  { label: 'Homicidios',     key: 'Homicidios',     color: '#f97316' },
  { label: 'Desplazamiento', key: 'Desplazamiento', color: '#a855f7' },
  { label: 'Población',      key: 'Población',      color: '#3b82f6' },
];

export function getValor(m: MunicipioDato, cat: Categoria): number {
  switch (cat) {
    case 'Víctimas':       return m.victimas;
    case 'Homicidios':     return m.homicidios;
    case 'Desplazamiento': return m.desplazamiento;
    case 'Población':      return m.poblacion;
    default:               return m.victimas;
  }
}

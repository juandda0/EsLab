import React from 'react';
import FeaturedNewsCard from './components/FeaturedNewsCard';
import NewsListItem from './components/NewsListItem';

// Importa la imagen local desde la carpeta de assets
import noticiaPrincipalImg from './assets/thpubInt_1200X400_1693.webp';

// --- Interfaz de Datos ---
interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  imageUrl?: string;
  isFeatured: boolean;
}

// --- Datos de las Noticias ---
const newsData: NewsArticle[] = [
  {
    id: 1,
    title: 'Observatorio del delito de Córdoba destaca reducción en delitos de alto impacto',
    excerpt: '',
    imageUrl: noticiaPrincipalImg, // Se usa la imagen importada
    isFeatured: true,
  },
  {
    id: 2,
    title: 'Gobernación de Córdoba lideró el Foro Ecos de Paz: “Conversaciones sobre Derechos Humanos y la Realidad del Delito”',
    excerpt: 'Gobernación de Córdoba lideró el Foro Ecos de Paz: “Conversaciones sobre Derechos Humanos y la Realidad del Delito”',
    isFeatured: false,
  },
  {
    id: 3,
    title: 'Avances del plan de trabajo observatorio del delito',
    excerpt: 'Avances del plan de trabajo observatorio del delito',
    isFeatured: false,
  },
    {
    id: 4,
    title: 'Observatorio del delito de Córdoba destaca reducción en delitos de alto impacto',
    excerpt: 'Observatorio del delito de Córdoba destaca reducción en delitos de alto impacto',
    isFeatured: false,
  },
];

// --- Componente Principal de la Sección ---
const NewsSection: React.FC = () => {
  // Separa la noticia destacada de las demás para renderizarlas por separado
  const featuredArticle = newsData.find(article => article.isFeatured);
  const otherArticles = newsData.filter(article => !article.isFeatured);

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Título de la Sección */}
        <h2 className="text-4xl font-bold text-center text-black mb-15">
          Laboratorio de Estadistica
        </h2>

        {/* Grid para el contenido con la proporción ajustada */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Columna Izquierda: Noticia Principal (ocupa 2 de 5 columnas) */}
          <div className="lg:col-span-2">
            {featuredArticle && (
              <FeaturedNewsCard
                imageUrl={featuredArticle.imageUrl!}
                title={featuredArticle.title}
                excerpt={featuredArticle.excerpt}
              />
            )}
          </div>

          {/* Columna Derecha: Lista de Noticias (ocupa 3 de 5 columnas) */}
          <div className="lg:col-span-3 flex flex-col space-y-6">
            {otherArticles.map((article) => (
              <NewsListItem
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
              />
            ))}
          </div>
        </div>

        {/* Botón "Ver más noticias" */}
        <div className="text-center mt-12">
          <button className="bg-green-800 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-900 transition-colors duration-300">
            VER MÁS NOTICIAS
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
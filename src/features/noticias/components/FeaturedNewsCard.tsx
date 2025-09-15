import React from 'react';

interface FeaturedNewsCardProps {
  imageUrl: string;
  title: string;
  excerpt: string;
}

const FeaturedNewsCard: React.FC<FeaturedNewsCardProps> = ({ imageUrl, title, excerpt }) => {
  return (
    <div className="group">
      <div className="overflow-hidden rounded-md mb-4">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <h3 className="text-xl font-semibold text-green-600 mb-2 group-hover:text-green-700 transition-colors">
        <a href="#">{title}</a>
      </h3>
      <p className="text-gray-600 text-sm">
        {excerpt}
      </p>
    </div>
  );
};

export default FeaturedNewsCard;
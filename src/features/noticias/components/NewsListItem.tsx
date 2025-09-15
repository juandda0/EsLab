import React from 'react';

interface NewsListItemProps {
  title: string;
  excerpt: string;
}

const NewsListItem: React.FC<NewsListItemProps> = ({ title, excerpt }) => {
  return (
    <div className="group">
      <h4 className="text-lg font-semibold text-green-600 mb-1 group-hover:text-green-700 transition-colors">
        <a href="#">{title}</a>
      </h4>
      <p className="text-gray-600 text-sm">
        {excerpt}
      </p>
    </div>
  );
};

export default NewsListItem;
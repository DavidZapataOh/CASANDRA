'use client';
import React from 'react';


const CategoryCard = ({ imageUrl, title, link }) => {
    return (
      <div className="flex flex-col items-center rounded-lg bg-primary shadow-primary shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
        <div className="w-full h-4/5">
        <a href={link}>
            <img src={imageUrl} alt={title} className="w-full h-full object-cover saturate-50 hover:saturate-100" />
        </a>
        </div>
        <div className="w-full h-1/5 flex flex-col items-center justify-center p-4 bg-primary">
          <h3 className="text-2xl font-semibold text-thirty">{title}</h3>
        </div>
      </div>
    );
};

  const categories = [
    { imageUrl: '/categories/futbol.png', title: 'Futbol', link: '/futbol' },
    { imageUrl: '/categories/box.png', title: 'Boxeo', link: '/boxeo' },
    { imageUrl: '/categories/stream.png', title: 'Streaming', link: '/streaming' },
    { imageUrl: '/categories/dados.png', title: 'Dado', link: 'dado' },
  ];

export const Supported = () => {
  return (
    <section className="text-left md:px-20 px-80 2xl:px-60 py-20 bg-dark">
        <h2 className="text-3xl font-bold text-center mb-8">Categorías</h2>
      <div className="container mx-auto grid md:grid-cols-1 lg:grid-cols-2 grid-cols-4 gap-4 px-4 lg:px-0">
        {categories.map((category, index) => (
            <CategoryCard
            key={index}
            imageUrl={category.imageUrl}
            title={category.title}
            link={category.link}
            />
        ))}
        </div>
    </section>
  );
};

export default Supported;

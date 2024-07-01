'use client';

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsCard = ({ imageUrl, linkUrl }) => {
    return (
      <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="block">
        <div className="p-2 rounded-lg overflow-hidden">
          <img src={imageUrl} alt="News" className="w-full h-full object-cover rounded-lg transition-transform transform hover:scale-105" />
        </div>
      </a>
    );
  };

  export const News = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
    return (
    <section className="text-left md:px-20 px-60 py-20 sm:p-5 bg-dark">
        <div className="container mx-auto">
        <Slider {...settings}>
          <NewsCard
            imageUrl="/banners/banner-1.png" // Reemplaza con la URL correcta de la imagen
            linkUrl="https://yourwebsite.com/vip-cashback" // Reemplaza con la URL correcta del enlace
          />
          <NewsCard
            imageUrl="/banners/banner-2.png" // Reemplaza con la URL correcta de la imagen
            linkUrl="https://yourwebsite.com/ton-available" // Reemplaza con la URL correcta del enlace
          />
          <NewsCard
            imageUrl="/banners/banner-1.png" // Reemplaza con la URL correcta de la imagen
            linkUrl="https://yourwebsite.com/another-news" // Reemplaza con la URL correcta del enlace
          />
          {/* Agrega más NewsCard según sea necesario */}
        </Slider>
      </div>
    </section>
  )
}

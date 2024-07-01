import React from 'react'

export const Footer = () => {
  return (
    <section className="text-left md:px-20 px-60 py-20 bg-gradient-to-b from-dark via-thirty to-thirty">
      <div className="flex flex-col text-center mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">CASANDRA</h2>
          <p className="text-light">Inscribete a nuestro newsletter y mantente enterado de todas las novedades.</p>
          <div className="flex mt-4 justify-center text-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 md:w-full w-auto rounded-l-lg bg-thirty text-light"
            />
            <button className="px-4 py-2 bg-gold rounded-r-lg text-thirty bg-primary hover:bg-secundary">Subscribe</button>
          </div>
        </div>
      <div className="container mx-auto grid md:grid-cols-1 grid-cols-5 gap-8">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-primary mb-4">Acceso Rápido</h3>
          <ul className="text-light space-y-2">
            <li>
                <a href="#" className='hover:text-secundary'>Home</a>
            </li>
            <li>
                <a href="#" className='hover:text-secundary'>Perfil</a>
            </li>
            <li>
                <a href="#" className='hover:text-secundary'>Leaderboard</a>
            </li>
            <li>
                <a href="#" className='hover:text-secundary'>Cómo Funciona</a>
            </li>
            <li>
                <a href="#" className='hover:text-secundary'>Terminos y Condiciones</a>
            </li>
            <li>
                <a href="#" className='hover:text-secundary'>Politicas de Privacidad</a>
            </li>
            <li>
                <a href="#" className='hover:text-secundary'>FAQs</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-primary mb-4">Categorías</h3>
          <ul className="text-light space-y-2">
            <li>
                <a href="#" className='hover:text-secundary'>Futbol</a>
            </li>
            <li>
                <a href="#" className='hover:text-secundary'>Boxeo</a>
            </li>
            <li>
                <a href="#" className='hover:text-secundary'>Streaming</a>
            </li>
            <li>
                <a href="#" className='hover:text-secundary'>Dados</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-primary mb-4">Recursos</h3>
          <ul className="text-light space-y-2">
            <li>
                <a href="#" className='hover:text-secundary'>Token</a>
            </li>
            <li>
                <a href="#" className='hover:text-secundary'>Whitepaper</a>
            </li>
            <li>
                <a href="#" className='hover:text-secundary'>GitHub</a>
            </li>
            <li>
                <a href="#" className='hover:text-secundary'>Documentación</a>
            </li>
            <li>
                <a href="#" className='hover:text-secundary'>Contact us</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-primary mb-4">Comunidad</h3>
          <ul className="text-light space-y-2">
            <li>
                <a href="#" className='hover:text-secundary'>Discord</a>
            </li>
            <li>
                <a href="#" className='hover:text-secundary'>Telegram</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-primary mb-4">Social Media</h3>
          <ul className="text-light space-y-2">
            <li>
                <a href="#" className='hover:text-secundary'>Twitter</a>
            </li>
            <li>
                <a href="#" className='hover:text-secundary'>TikTok</a>
            </li>
            <li>
                <a href="#" className='hover:text-secundary'>YouTube</a>
            </li>
            <li>
                <a href="#" className='hover:text-secundary'>Instagram</a>
            </li>
            <li>
                <a href="#" className='hover:text-secundary'>Linkedin</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-md text-light mt-8">
        <p className="mt-4">© Copyright 2024. All rights reserved | CASANDRA.GG</p>
      </div>
    </section>
  )
}

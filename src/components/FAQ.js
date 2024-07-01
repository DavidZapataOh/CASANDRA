'use client';
import React from 'react'
import Faq from 'react-faq-component';

const data = {
    rows: [
      {
        title: "¿Cómo me registro en la plataforma?",
        content: `Puedes registrarte utilizando tu correo electrónico, redes sociales o directamente con tu wallet de criptomonedas.`,
      },
      {
        title: "¿Qué es el sistema Pari Mutuel?",
        content: `El sistema Pari Mutuel agrupa todas las apuestas en un fondo común. Las probabilidades se calculan en función de la cantidad total apostada en cada resultado y las ganancias se distribuyen entre los ganadores en proporción a su apuesta.`,
      },
      {
        title: "¿Cómo encuentro las apuestas disponibles?",
        content: `Navega por nuestra sección de apuestas donde encontrarás una variedad de eventos deportivos y de entretenimiento.`,
      },
      {
        title: "¿Qué es un NFT de apuesta?",
        content: `Un NFT de apuesta es un token único que simboliza tu participación en una apuesta. Este NFT te permitirá reclamar tus ganancias si tu predicción es correcta.`,
      },
      {
        title: "¿Cómo recibo mis ganancias?",
        content: `Las ganancias se deciden de manera descentralizada utilizando contratos inteligentes y se transferirán automáticamente a tu wallet si aciertas tu predicción.`,
      },
    ],
  };

  const styles = {
    bgColor: 'dark',
    titleTextColor: "white",
    rowTitleColor: "white",
    rowContentColor: 'gray',
    arrowColor: "white",
  };
  
  const config = {
    animate: true,
    arrowIcon: "V",
    tabFocus: true
  };

export const FAQ = () => {
  return (
    <section className="text-left md:px-20 px-60 py-20 bg-dark">
        <h2 className="text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
        <div className="container mx-auto">
            <Faq
            data={data}
            styles={styles}
            config={config}
            />
        </div>
    </section>
  )
}

import React from 'react'
import { FaUserSecret, FaMoneyBillWave, FaLock, FaRocket, FaGift, FaCoins } from 'react-icons/fa';


const ProcessStep = ({ icon: Icon, title, description }) => {
    return (
      <div className="flex flex-col items-center p-4 rounded-lg bg-primary shadow-lg">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-dark text-primary mb-2">
            <Icon size={24} />
        </div>
        <h3 className="text-lg font-semibold text-thirty">{title}</h3>
        <p className="text-center text-dark">{description}</p>
      </div>
    );
};

export const Features = () => {
  return (
    <section className="text-left md:px-20 px-60 py-20 bg-dark">
        <h2 className="text-3xl font-bold text-center mb-8">Qué nos caracteriza</h2>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-3 gap-4 lg:px-4 px-0 sm:px-0">
            <ProcessStep icon={FaUserSecret} title="ANONIMATO" description="Interactúa de manera anónima en la plataforma sin necesidad de registro o verificación KYC." />
            <ProcessStep icon={FaMoneyBillWave} title="CASHBACK" description="Recibe bonificaciones por cada predicción acertada. Cuantas más aciertes, más obtendrás." />
            <ProcessStep icon={FaLock} title="TRANSPARENTE" description="Todas las interacciones en la plataforma son completamente transparentes." />

            <ProcessStep icon={FaRocket} title="RÁPIDO" description="Deposita y retira tus tokens en cuestión de segundos." />
            <ProcessStep icon={FaGift} title="SORTEOS" description="Participa en sorteos mensuales para ganar bonos y mercancía exclusiva." />
            <ProcessStep icon={FaCoins} title="MULTIPLES TOKENS" description="Utiliza una amplia variedad de tokens de distintas redes." />
            </div>
    </section>
  )
}

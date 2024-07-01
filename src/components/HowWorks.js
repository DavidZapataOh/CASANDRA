import React from 'react'

export const HowWorks = () => {
  return (
    <section className="text-left md:px-20 px-60 py-20 sm:px-10 bg-primary">
        <h2 className="text-3xl font-bold text-center mb-8 text-dark">Cómo funciona</h2>
        <div className="grid grid-cols-4 grid-rows-3 gap-4 w-full h-full sm:grid-cols-1 sm:grid-rows-1">
            <div className="col-span-2 row-span-1 bg-dark p-8 rounded-xl">
                <div className='flex items-center'>
                    <div className='bg-primary p-2 rounded-full w-14 h-14 flex  text-center items-center justify-center'>
                        <p className='text-dark text-2xl font-bold'>1</p>
                    </div>
                    <p className='text-primary font-bold text-lg ml-4'>Inicia Sesión</p>
                </div>
                <p className='mt-2 text-md text-secundary'>Accede a nuestra plataforma con tu cuenta existente o crea una nueva. Si no tienes una wallet, no te preocupes, puedes iniciar sesión con tu correo electrónico o redes sociales.</p>
            </div>

            <div className="col-span-2 row-span-1 bg-dark p-8 rounded-xl">
                <div className='flex items-center'>
                    <div className='bg-primary p-2 rounded-full w-14 h-14 flex  text-center items-center justify-center'>
                        <p className='text-dark text-2xl font-bold'>2</p>
                    </div>
                    <p className='text-primary font-bold text-lg ml-4'>Encuentra Apuestas</p>
                </div>
                <p className='mt-2 text-md text-secundary'>Navega por nuestra sección de apuestas y elige entre una variedad de eventos deportivos y de entretenimiento. Filtra y selecciona las apuestas que más te interesen.</p>
            </div>

            <div className="col-span-2 row-span-2 bg-dark p-8 rounded-xl">
            <div className='flex items-center'>
                <div className='bg-primary p-2 rounded-full w-14 h-14 flex  text-center items-center justify-center'>
                        <p className='text-dark text-2xl font-bold'>3</p>
                    </div>
                    <p className='text-primary font-bold text-lg ml-4'>Sistema Pari Mutuel</p>
                </div>
                <p className='mt-2 text-md text-secundary'>
                En nuestro sistema Pari Mutuel, todas las apuestas se agrupan en un fondo común. Las probabilidades (odds) se determinan en función de la cantidad total apostada en cada resultado. <br/><br/> A diferencia de las casas de apuestas tradicionales, donde las probabilidades son fijadas por la casa, aquí se ajustan dinámicamente según la cantidad de dinero apostada en cada opción. <br/><br/> Esto asegura equidad y transparencia, ya que las ganancias se distribuyen entre los ganadores en proporción a su apuesta. Esto significa que las probabilidades fluctúan hasta el cierre de la ventana de apuestas.
                </p>
            </div>

            <div className="col-span-2 row-span-1 bg-dark p-8 rounded-xl">
                <div className='flex items-center'>
                    <div className='bg-primary p-2 rounded-full w-14 h-14 flex  text-center items-center justify-center'>
                        <p className='text-dark text-2xl font-bold'>4</p>
                    </div>
                    <p className='text-primary font-bold text-lg ml-4'>NFT de Apuesta</p>
                </div>
                <p className='mt-2 text-md text-secundary'>
                Recibe un NFT único que simboliza tu apuesta. Este NFT es una prueba digital de tu participación y te permitirá reclamar tus ganancias si tu predicción es correcta.
                </p>
                
            </div>
            
            <div className="col-span-2 row-span-1 bg-dark p-8 rounded-xl">
                <div className='flex items-center'>
                    <div className='bg-primary p-2 rounded-full w-16 h-16 flex  text-center items-center justify-center'>
                        <p className='text-dark text-2xl font-bold'>5</p>
                    </div>
                    <p className='text-primary font-bold text-lg ml-4'>Ganancias Descentralizadas</p>
                </div>
                <p className='mt-2 text-md text-secundary'>
                El ganador se decide de manera descentralizada utilizando contratos inteligentes. Si aciertas tu predicción, las ganancias se transferirán automáticamente a tu wallet, asegurando transparencia y rapidez en el proceso.
                </p>
            </div>
        </div>
    </section>
  )
}

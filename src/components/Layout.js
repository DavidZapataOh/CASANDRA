"use client";
import { ConnectWallet } from '@thirdweb-dev/react';
import React from 'react';
import { FaVideo, FaDice } from 'react-icons/fa';
import { GiBoxingGlove, GiSoccerBall  } from "react-icons/gi";


const Categories = () => {
  return (
    <div className="flex space-x-8 items-center ml-12 sm:hidden">
      <a href='/futbol' className="flex items-center space-x-2 hover:bg-dark py-2 px-4 hover:rounded-2xl">
        <GiSoccerBall  className="text-primary" size={20} />
        <span>Fútbol</span>
      </a>
      <a href='/boxeo' className="flex items-center space-x-2 hover:bg-dark py-2 px-4 hover:rounded-2xl">
        <GiBoxingGlove className="text-primary" size={20} />
        <span>Boxeo</span>
      </a>
      <a href='/streaming' className="flex items-center space-x-2 hover:bg-dark py-2 px-4 hover:rounded-2xl">
        <FaVideo className="text-primary" size={20} />
        <span>Streaming</span>
      </a>
      <a href='/dados' className="flex items-center space-x-2 hover:bg-dark py-2 px-4 hover:rounded-2xl">
        <FaDice className="text-primary" size={20} />
        <span>Dados</span>
      </a>
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="bg-dark text-white font-sans">
      <header className="p-5 px-20 bg-thirty sm:px-2 lg:px-12">
        <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-12">
            <a href="/" className="text-2xl font-bold">CASANDRA</a>
            <Categories />
          </div>
          <ul className="flex space-x-4 text-md">

            <li>
              {/*<ConnectButton/>*/}
              <ConnectWallet className="custom-connect-wallet-btn" btnTitle='Conectarme' dropdownPosition = {{
                side: "bottom",
                align: "center"
              }}
                  
              />
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-0 bg-dark">{children}</main>
    </div>
  );
};

export default Layout;
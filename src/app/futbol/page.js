"use client";
import Head from 'next/head';
import Layout from '@/components/Layout';
import Banner from '@/components/Banner';
import { News } from '@/components/News';
import { Features } from '@/components/Features';
import { Supported } from '@/components/Supported';
import { HowWorks } from '@/components/HowWorks';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { ThirdwebProvider, coreWallet, embeddedWallet, metamaskWallet, smartWallet } from '@thirdweb-dev/react';
import { ACCOUNT_FACTORY_ADDRESS } from '@/constants/addresses';

const activeChain = "sepolia";

export default function Home() {
  const smartWalletConfig = {
    factoryAddress: ACCOUNT_FACTORY_ADDRESS,
    gasless: true,
  } 

  return (
    <ThirdwebProvider activeChain={activeChain} clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID} supportedWallets={[smartWallet(embeddedWallet(), smartWalletConfig), metamaskWallet(), coreWallet()]}>
      <Layout>
        <Head>
          <title>CASANDRA</title>
          <meta name="description" content="Predicciones inteligentes en Web3" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Banner/>
        <News/>
        <Features/>
        <HowWorks/>
        <Supported/>
        <FAQ/>
        <Footer/>
      </Layout>
    </ThirdwebProvider>
  );
}

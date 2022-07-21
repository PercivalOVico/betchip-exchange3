import '../styles/globals.css'
import React, {Fragment, useState, useEffect } from 'react';
import { MoralisProvider } from 'react-moralis'
import { GunProvider } from '../context/gunContext'
import { CoinMarketProvider } from '../context/context'
import 'tailwindcss/tailwind.css';





function MyApp({ Component, pageProps }) {

  useEffect(()=>{
        import("/node_modules/tw-elements/dist/js/index.min.js");
},[])
  return (
    <MoralisProvider
       serverUrl={process.env.NEXT_PUBLIC_SERVER}
       appId={process.env.NEXT_PUBLIC_APP_ID}
    >
      <GunProvider>
        <CoinMarketProvider>
          <Component {...pageProps} />
        </CoinMarketProvider>
      </GunProvider>
    </MoralisProvider>
  )
}

export default MyApp

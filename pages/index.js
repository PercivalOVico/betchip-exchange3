import React from 'react';
import SwapCryptoModal from '../components/swapCryptoModal'
import { useMoralis } from "react-moralis";
import "tailwindcss/tailwind.css";
import Landingpage from '../components/guests/landingpage';



export default function Home() {

  const { isAuthenticated } = useMoralis();

  

  return (
    <div>
     <Landingpage />
    </div>
    
  )
}

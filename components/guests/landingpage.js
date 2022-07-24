import React from 'react'
import CMCtable from '../cmc-table/cmcTable'
import Header from '../header2'
import Trending from '../trending'
import SwapCryptoModal from '../swapCryptoModal'
import { useMoralis } from "react-moralis";
import styles from "../../styles/Home.module.css";
import SignIn from "../SignIn";
import { SignOut } from "../SignOut";
import "tailwindcss/tailwind.css";
import Footer from '../footer';
import Newsfeeds from '../newsfeeds';
import AboutBetchipLandingCard from '../aboutBetchipLandingCard';
import NavBar from '../navBar';



function Landingpage() {
  return (
   
       <meta name="viewport" content="width=device-width, initial-scale=1.0"  />,
    
    <div className='h-screen w-screen'>
     
      
      <NavBar />
      <SwapCryptoModal />
      <div className='mt-10' />
      <Trending />
      <div className='mt-20' />
      <CMCtable />
      <div className='mt-20' />
      <AboutBetchipLandingCard />
      <div className='mt-20' />
      <Newsfeeds />
      <div className='mt-20' />
      <Footer />

    
    </div>
  
  )
}

export default Landingpage
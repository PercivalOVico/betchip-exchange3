import CMCtable from '../components/cmc-table/cmcTable'
import Header from '../components/header'
import Trending from '../components/trending'
import SwapCryptoModal from '../components/swapCryptoModal'
import { useMoralis } from "react-moralis";
import styles from "../styles/Home.module.css";
import SignIn from "../components/SignIn";
import { SignOut } from "../components/SignOut";
import "tailwindcss/tailwind.css";
import Footer from '../components/footer';
import Newsfeeds from '../components/newsfeeds';
import AboutBetchipLandingCard from '../components/aboutBetchipLandingCard';
import NavBar from '../components/navBar';
import Client from './client';



export default function Home() {

  const { isAuthenticated } = useMoralis();

  

  return (
    <meta name="viewport" content="width=device-width, initial-scale=1.0"  />,
    
    <div className='min-h-screen'>
     
      
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
      <Client />
    
    </div>
    
  )
}

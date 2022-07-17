import CMCtable from '../components/cmc-table/cmcTable'
import Header from '../components/header'
import Trending from '../components/trending'
import SwapCryptoModal from '../components/swapCryptoModal'
import { useMoralis } from "react-moralis";
import styles from "../styles/Home.module.css";
import SignIn from "../components/SignIn";
import { SignOut } from "../components/SignOut";


export default function Home() {

  const { isAuthenticated } = useMoralis();

  return (
    <div className='min-h-screen'>
      <Header />
      <SwapCryptoModal />
      <div className='mt-10' />
      <Trending />
      <div className='mt-20' />
      <CMCtable />
    
    </div>
  )
}

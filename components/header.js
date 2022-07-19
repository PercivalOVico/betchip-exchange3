import Image from 'next/image'
import Search from '../assets/svg/search'
//import { ConnectButton } from 'web3uikit'
import { useContext } from 'react'
import { CoinMarketContext } from '../context/context'
import { useMoralis } from "react-moralis"
import Logo from "../images/Web3Auth.svg";



const styles = {
  navLink: `text-white flex mx-[10px]`,
  badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
  navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
  nav: `flex justify-center items-center gap-[20px]`,
  header: `bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]`,
  headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4`,
  inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
  input: `bg-transparent outline-none text-white w-70 ml-3`,
  cursorPointer: `mr-5 cursor-pointer`,
  loginButtonCoinytainer: `bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-5 rounded-full`,
}

const Header = () => {
  const { getQuote } = useContext(CoinMarketContext)

    const { authenticate, authError, isAuthenticating, Moralis } = useMoralis();

  const handleCustomLogin = async () => {
    await authenticate({
      provider: "web3Auth",
      clientId: "BIMd_YCwLWuxx8Wyga6Q5Dvn7-by3A7Aayar7kuSu79JGvaRm40zYgOesuHVRnIjI88PcPmOVBM_DOWZVJ5RLik",
      chainId: Moralis.Chains.ETH_RINKBEY,
      appLogo: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4705.svg',
      theme: "dark",
      loginMethodsOrder: ["google", "facebook", "twitter", "reddit", "discord", "twitch", "apple", "line", "github", "kakao", "linkedin", "weibo", "wechat", "email_passwordless"],
    });
  };
  return (
    <div className={styles.header}>
      <Image
        alt='BETCHIP EXCHANGE'
        src='https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4705.svg'
        width={220}
        height={220}
      />

      <div className={styles.headerWrapper}>
        <nav className={styles.nav}>
        

          <div className={styles.navItem}>
            <div className={styles.navLink}>P2P</div>
            <div className={styles.badge} />
          </div>

        
         

          

          <div className={styles.navItem}>
            <div className={styles.navLink}>Learn Crypto</div>
            <div className={styles.badge} />
          </div>

      
        </nav>
         <div className='flex items-center'>
                 <button className={styles.loginButtonCoinytainer} onClick={handleCustomLogin}>
                    LOGIN
                 </button>
      
        
          <div className={styles.inputContainer}>
            <Search />
            <input className={styles.input} placeholder='Search' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

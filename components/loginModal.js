import { useContext } from 'react'
import { useMoralis } from "react-moralis"
import Image from "next/image"
import styles from "../styles/Home.module.css"

const styles = {
  modal: `w-screen h-screen bg-gray-900/90 z-10 fixed top-0 left-0 flex items-center justify-center`,
  modalContent: `bg-white rounded-lg p-3 w-max w-1/3`,
  input: `w-full p-2 border rounded-lg mb-5 border-gray-600/50 outline-none`,
  button: `bg-[#6188FF] p-2 px-5 rounded-lg text-white hover:opacity-50`,
  label: `font-bold text-3xl`,
  closeModalButton: `hover:text-red-300 text-gray-600 cursor-pointer`,
}

const loginModal = () => {

    const { authenticate, authError, isAuthenticating, Moralis } = useMoralis();

  const handleCustomLogin = async () => {
    await authenticate({
      provider: "web3Auth",
      clientId: "BIMd_YCwLWuxx8Wyga6Q5Dvn7-by3A7Aayar7kuSu79JGvaRm40zYgOesuHVRnIjI88PcPmOVBM_DOWZVJ5RLik",
      chainId: Moralis.Chains.ETH_RINKBEY,
      appLogo: "",
      theme: "dark",
      loginMethodsOrder: ["google", "facebook", "twitter", "reddit", "discord", "twitch", "apple", "line", "github", "kakao", "linkedin", "weibo", "wechat", "email_passwordless"],
    });
  };

 
 


    return (
       <div className={styles.card}>
      <Image className={styles.img} src={Logo} width={80} height={80} />
      {isAuthenticating && <p className={styles.green}>Authenticating</p>}
      {authError && (
        <p className={styles.error}>{JSON.stringify(authError.message)}</p>
      )}
      <div className={styles.buttonCard}>
        <button className={styles.loginButton} onClick={handleCustomLogin}>
          Login with Web3Auth
        </button>
      </div>
    </div>
    )

  
}

export default loginModal

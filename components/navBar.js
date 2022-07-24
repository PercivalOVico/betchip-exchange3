import React from 'react'
import { useContext } from 'react'
import { CoinMarketContext } from '../context/context'
import { useMoralis } from "react-moralis"
import LoginModal from './loginModal'

function NavBar() {
    const styles = {
  avatarsize: `h-10 w-10`,
 
}

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
    <div>
         <nav
  class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light"
>
  <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
    <button
      class="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent1"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="bars"
        class="w-6"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512">
        <path
          fill="currentColor"
          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
      </svg>
    </button>
    <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent1">
      <a class="text-xl text-white pr-2 font-semibold" href="#">BETCHIP EXCHANGE</a>
   
      <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
        <li class="nav-item p-2">
          <a class="nav-link text-white" href="#">P2P</a>
        </li>
        <li class="nav-item p-2">
          <a
            class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
            href="#"
            >Buy Crpto</a>
        </li>
        <li class="nav-item p-2">
          <a
            class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
            href="#"
            >Learn Crypto</a>
        </li>
      </ul>
     
    </div>
  

   
    <div class="flex items-center relative">
    <button type="button" class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out transition duration-150 ease-in-out"
  data-bs-toggle="modal" data-bs-target="#loginModal">LOGIN</button>
   <LoginModal />
      <a class="text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4" href="#">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="shopping-cart"
          class="w-4"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512">
          <path
            fill="currentColor"
            d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
          ></path>
        </svg>
      </a>
      <div class="dropdown relative">
        <a
          class="text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4 dropdown-toggle hidden-arrow flex items-center"
          href="#"
          id="dropdownMenuButton1"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bell"
            class="w-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
            ></path>
          </svg>
          <span
            class="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">1</span>
        </a>
        <ul
          class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
          aria-labelledby="dropdownMenuButton1">
          <li>
            <a
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              href="#"
              >Action</a>
          </li>
          <li>
            <a
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              href="#"
              >Another action</a>
          </li>
          <li>
            <a
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              href="#">Something else here</a>
          </li>
        </ul>
      </div>
      <div class="dropdown relative">
        <a
          class="dropdown-toggle flex items-center hidden-arrow"
          href="#"
          id="dropdownMenuButton2"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false" >
          <img
            src=""
            class="rounded-full"
            
            className={styles.avatarsize}
            alt=""
            loading="lazy"/>
        </a>
        <ul
          class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
          aria-labelledby="dropdownMenuButton2">
          <li>
            <a
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              href="#"
              >Action</a>
          </li>
          <li>
            <a
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              href="#"
              >Another action</a>
          </li>
          <li>
            <a
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              href="#" >Something else here</a>
          </li>
        </ul>
      </div>
    </div>
   
  </div>
</nav>
    </div>
  )
}

export default NavBar
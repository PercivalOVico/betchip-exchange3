import { useState } from "react"
import Rate from "./cmc-table/rate"
import fire from "../assets/fire.png"
import btc from "../assets/btc.png"
import usdt from "../assets/usdt.png"
import pundix from "../assets/pundix.png"
import xem from "../assets/xem.png"
import fx from "../assets/fx.png"
import gainers from "../assets/gainers.png"
import recent from "../assets/recent.png"
import TrendingCard from "./trendingCard"
import TrendingBanner from "./trendingBanner"
import ReactSwitch from "react-switch"

const styles = {
    trendingWrapper: `mx-auto max-w-screen-2xl`,
    h1: `text-3xl text-white`,
    flexCenter: `flex items-center,`
}

const Trending = () => {
    const [checked, setChecked] = useState(false)

    const trendingData = [
        {
            number: 1,
            symbol: "PUNDIX",
            name: "Punidix",
            icon: pundix,
            isIncrement: true,
            rate: "1.34%"
        }, {
            number: 2,
            symbol: "XEM",
            name: "NEM",
            icon: xem,
            isIncrement: true,
            rate: "0.92%"
        }, {
            number: 3,
            symbol: "fx",
            name: "Function X",
            icon: fx,
            isIncrement: true,
            rate: "1.45%"
        },
    ]


    const trendingBanner = [
        
        
    ]

    return <div className="text-white">
        <div className={styles.trendingWrapper}>
            <div className="flex justify-between">
                <h1 className={styles.h1}>Betchip P2P Exchange Platform</h1>

                <div className="flex">
                    <p className="text-gray-400 ">Highlights &nbsp;</p>
                    <ReactSwitch checked={checked} onChange={() => { setChecked(!checked) }} />
                </div>
            </div>
            <br />
            <div className="flex">
                <p>BETCHIP makes it EASY for you to BUY or SELL CryptoCurrency in Exchange for Fiat or Other Cryptos  &nbsp; </p>
                
                 &nbsp; <span className="underline">JOIN THE CRYPTO MOVE</span>
            </div>
            <br />

            <div className={styles.flexCenter}>
                <TrendingCard title='Recommended Cryptos' icon={fire} trendingData={trendingData} />
                <TrendingBanner title='Betchip Notifications' icon={recent} trendingData={trendingBanner} />
               
            </div>
        </div>
    </div>
}

export default Trending
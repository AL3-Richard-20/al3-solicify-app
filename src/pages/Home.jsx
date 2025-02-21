import ReactDOM from 'react-dom'

import { useState } from "react" 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCartShopping, faCartPlus, faGift, faUsersRectangle, faPowerOff } from '@fortawesome/free-solid-svg-icons'

import Banner from '../components/Banner.jsx'

export default function Home(){

    const [bannertype, setBannerType] = useState("Home")

    return (

        <div>

            {/* =================== BANNER =================== */}
                <Banner bannertype={bannertype} />
            {/* =================== BANNER END =============== */}



            <div className="min-h-[590px]">

                {/* =================== WISHLIST ================= */}
                    <div className="flex items-center justify-between m-1 p-4 border border-gray-300">
                        <div>
                            <FontAwesomeIcon className="text-3xl mt-4 mb-4" icon={faCartShopping} />
                            <h4 className="font-bold uppercase text-1xl">My Wishlist</h4>
                        </div>
                        <h3 className="text-3xl font-bold">0</h3>
                    </div>
                {/* =================== WISHLIST END ============= */}

                {/* =================== GRANDTED ================= */}
                    <div className="flex items-center justify-between m-1 p-4 border border-gray-300">
                        <div>
                            <FontAwesomeIcon className="text-3xl mt-4 mb-4" icon={faGift} />
                            <h4 className="font-bold uppercase text-1xl">Granted</h4>
                        </div>
                        <h3 className="text-3xl font-bold">0</h3>
                    </div>
                {/* =================== GRANDTED END ============= */}

                {/* =================== CONNECTIONS ================= */}
                    <div className="flex items-center justify-between m-1 p-4 border border-gray-300">
                        <div>
                            <FontAwesomeIcon className="text-3xl mt-4 mb-4" icon={faUsersRectangle} />
                            <h4 className="font-bold uppercase text-1xl">Connections</h4>
                        </div>
                        <h3 className="text-3xl font-bold">0</h3>
                    </div>
                {/* =================== CONNECTIONS END ============= */}

            </div>

            

            {/* =================== MOBILE NAVIGATION =============== */}
                <div className="flex items-center justify-between m-1 p-4 bg-white sticky bottom-[0px]">
                    <div className="text-center">
                        <FontAwesomeIcon className="text-2xl" icon={faHouse} />
                        {/* <small className="font-bold uppercase">Home</small> */}
                    </div>
                    <div className="text-center">
                        {/* <FontAwesomeIcon className="text-2xl" icon={faGift} /> */}
                        <FontAwesomeIcon className="text-2xl" icon={faGift} />
                        {/* <small className="font-bold uppercase">Granted</small> */}
                    </div>
                    <div className="text-center">
                        <FontAwesomeIcon className="text-2xl" icon={faCartPlus} />
                        {/* <small className="font-bold uppercase">Wishlist</small> */}
                    </div>
                    <div className="text-center">
                        <FontAwesomeIcon className="text-2xl" icon={faUsersRectangle} />
                        {/* <small className="font-bold uppercase">Connections</small> */}
                    </div>
                    <div className="text-center">
                        <FontAwesomeIcon className="text-2xl" icon={faPowerOff} />
                        {/* <small className="font-bold uppercase">Log Out</small> */}
                    </div>
                </div>
            {/* =================== MOBILE NAVIGATION END =========== */}

        </div>
    )
}
import ReactDOM from 'react-dom'

// React Router
import { NavLink } from "react-router";

import { useState } from "react" 

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCartShopping, faCartPlus, faGift, faUsersRectangle, faPowerOff } from '@fortawesome/free-solid-svg-icons'

// Components
import Banner from '../components/Banner.jsx'
import MobileNav from '../components/MobileNav.jsx'

export default function Home(){

    const [bannertype, setBannerType] = useState("Home")

    return (

        <div>

            {/* =================== BANNER =================== */}
                <Banner bannertype={bannertype} />
            {/* =================== BANNER END =============== */}



            <div className="min-h-[590px]">

                {/* =================== WISHLIST ================= */}
                    <NavLink to="/wishlist" className="flex items-center justify-between m-1 p-4 border border-gray-300">
                        <div>
                            <FontAwesomeIcon className="text-3xl mt-4 mb-4" icon={faCartShopping} />
                            <h4 className="font-bold uppercase text-1xl">My Wishlist</h4>
                        </div>
                        <h3 className="text-3xl font-bold">0</h3>
                    </NavLink>
                {/* =================== WISHLIST END ============= */}

                {/* =================== GRANDTED ================= */}
                    <NavLink to="/granted" className="flex items-center justify-between m-1 p-4 border border-gray-300">
                        <div>
                            <FontAwesomeIcon className="text-3xl mt-4 mb-4" icon={faGift} />
                            <h4 className="font-bold uppercase text-1xl">Granted</h4>
                        </div>
                        <h3 className="text-3xl font-bold">0</h3>
                    </NavLink>
                {/* =================== GRANDTED END ============= */}

                {/* =================== CONNECTIONS ================= */}
                    <NavLink to="/connections" className="flex items-center justify-between m-1 p-4 border border-gray-300">
                        <div>
                            <FontAwesomeIcon className="text-3xl mt-4 mb-4" icon={faUsersRectangle} />
                            <h4 className="font-bold uppercase text-1xl">Connections</h4>
                        </div>
                        <h3 className="text-3xl font-bold">0</h3>
                    </NavLink>
                {/* =================== CONNECTIONS END ============= */}

            </div>

            

            {/* =================== MOBILE NAVIGATION =============== */}
                <MobileNav />
            {/* =================== MOBILE NAVIGATION END =========== */}

        </div>
    )
}
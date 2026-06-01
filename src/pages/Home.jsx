import ReactDOM from 'react-dom'

// React Router
import { NavLink } from "react-router";

import { useState } from "react" 

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCartShopping, faCartPlus, faGift, faUsersRectangle, faPowerOff } from '@fortawesome/free-solid-svg-icons'

// Components
import Banner from '../components/Banner.jsx'
import TopNav from '../components/TopNav.jsx'
import MobileNav from '../components/MobileNav.jsx'

export default function Home(){

    const body_class    = 'min-h-[100vh]'
    const content_class = 'mb-[150px]'

    const anim_css_slideInLeft = 'animate__animated animate__slideInLeft animate__bounce animate__faster'
    const icon_size = 'text-3xl mt-4 mb-4'

    const [bannertype, setBannerType] = useState("Home")

    return (

        <div className={ body_class }>

            {/* =================== TOP NAVIGATION ================= */}
                <TopNav />
            {/* =================== TOP NAVIGATION END ============= */}

            {/* =================== BANNER =================== */}
                <Banner bannertype={bannertype} />
            {/* =================== BANNER END =============== */}


            <div className={ content_class }>

                {/* =================== WISHLIST ================= */}
                    <NavLink to="/wishlist" className="flex items-center justify-between m-1 p-4 border border-gray-300">
                        <div>
                            {/* <FontAwesomeIcon className="text-3xl mt-4 mb-4" icon={faCartShopping} /> */}
                            <ion-icon class={ icon_size } name="cart-outline"></ion-icon>
                            <h4 className="font-bold uppercase text-1xl">My Wishlist</h4>
                        </div>  
                        <h3 className="text-3xl font-bold">0</h3>
                    </NavLink>
                {/* =================== WISHLIST END ============= */}

                {/* =================== TO BUY ================= */}
                    <NavLink to="/connections" className="flex items-center justify-between m-1 p-4 border border-gray-300">
                        <div>
                            {/* <FontAwesomeIcon className="text-3xl mt-4 mb-4 text-yellow-300" icon={faCartShopping} /> */}
                            <ion-icon class={ `${icon_size} text-yellow-300` } name="cart-outline"></ion-icon>
                            <h4 className="font-bold uppercase text-1xl">To Buy</h4>
                        </div>
                        <h3 className="text-3xl font-bold">0</h3>
                    </NavLink>
                {/* =================== TO BUY END ============= */}

                {/* =================== GRANDTED ================= */}
                    <NavLink to="/granted" className="flex items-center justify-between m-1 p-4 border border-gray-300">
                        <div>
                            {/* <FontAwesomeIcon className="text-3xl mt-4 mb-4" icon={faGift} /> */}
                            <ion-icon class={ icon_size } name="gift-outline"></ion-icon>
                            <h4 className="font-bold uppercase text-1xl">Granted</h4>
                        </div>
                        <h3 className="text-3xl font-bold">0</h3>
                    </NavLink>
                {/* =================== GRANDTED END ============= */}

                {/* =================== CONNECTIONS ================= */}
                    <NavLink to="/connections" className="flex items-center justify-between m-1 p-4 border border-gray-300">
                        <div>
                            <ion-icon class={ icon_size } name="people-outline"></ion-icon>
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
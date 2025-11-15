import { useState } from "react" 

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faSearch } from '@fortawesome/free-solid-svg-icons'

// Components
import Banner from '../components/Banner.jsx'
import TopNav from '../components/TopNav.jsx'
import MobileNav from '../components/MobileNav.jsx'

export default function Connections(){

    // =========== States =============
        const [bannertype, setBannerType] = useState("Connections")
    // =========== States END =========

    // =========== Tailwind Classes ==============

        // =========== Connection Item Classes ==============
            const connection_img = "w-20 h-20 rounded border border-gray-400"
        // =========== Connection Item Classes END ==========

    // =========== Tailwind Classes END ==========

    // =========== Data Source =============
        const connection_items_arr = [
            {
                ConImg:"https://pfpmaker.com/images/tools/ai-avatars-3.webp",
                UserFullname:"User Fullname 1",
                TotalWishlists:0,
                TotalGranted:3
            },
            {
                ConImg:"https://promptstock.photos/wp-content/uploads/2024/02/2D-Flat-Avatars-5-min.png",
                UserFullname:"User Fullname 2",
                TotalWishlists:11,
                TotalGranted:8
            },
            {
                ConImg:"https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/66d7a0be536f15748542ec27_66b553340eca1041dc6f9116_image_8a3c2416_1721686782006_1024.jpeg",
                UserFullname:"User Fullname 3",
                TotalWishlists:8,
                TotalGranted:14
            },
        ]
    // =========== Data Source END =========


    return (
        <div>

            {/* =================== TOP NAVIGATION ================= */}
                <TopNav />
            {/* =================== TOP NAVIGATION END ============= */}

            {/* =================== BANNER =================== */}
                {/* <Banner bannertype={bannertype} /> */}
            {/* =================== BANNER END =============== */}

            <div className="min-h-[700px]">


                {/* ============== SEARCH BAR =============== */}
                    <form className="m-4">   
                        <label for="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                            <input 
                                type="search" 
                                id="search" 
                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
                                placeholder="Search" 
                                autoComplete="off" 
                                required />
                            {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                        </div>
                    </form>
                {/* ============== SEARCH BAR END =========== */}


                {/* =============== MY CONNECTIONS ==================== */}
                    <div id="my_connections_div">
                        <div className="m-4 mt-10">
                            <h4 className="font-bold">My Connections</h4>
                        </div>
                        <div className="flow-root m-4 p-2">

                            <ul role="list" className="divide-y divide-gray-200">

                                {/* ========== CONNECTION ITEM ============ */}
                                    { 
                                        connection_items_arr.map((conn_items, index) => (

                                            <li className="py-4" key={ index }>
                                                <div className="flex flex-start">
                                                    <div className="shrink-0">
                                                        <img 
                                                            className={ connection_img } 
                                                            src={ conn_items.ConImg } 
                                                            alt="User image" />
                                                    </div>
                                                    <div className="flex-1 items-center min-w-0 ms-4">
                                                        <h4 className="text-lg font-medium text-gray-900 truncate">
                                                            { conn_items.UserFullname }
                                                        </h4>
                                                        <p className="text-sm text-gray-500 truncate">
                                                            Wishlists: { conn_items.TotalWishlists }
                                                        </p>
                                                        <p className="text-sm text-gray-500 truncate">
                                                            Wish Granted: { conn_items.TotalGranted }
                                                        </p>
                                                        <button type="button" className="mt-3 text-white uppercase bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2">
                                                            View Profile
                                                        </button>
                                                    </div>
                                                    <div className="text-base font-semibold text-gray-900">
                                                        <FontAwesomeIcon icon={faEllipsisV} />
                                                    </div>
                                                </div>
                                            </li>

                                        ))
                                    }
                                {/* ========== CONNECTION ITEM END ======== */}

                            </ul>

                        </div>
                    </div>
                {/* =============== MY CONNECTIONS END ================ */}


                {/* =============== SEARCH SUGGESTIONS ================ */}
                    <ul className="hidden m-4 space-y-3" id="search_results_div">
                        <li>
                            <a href="#" className="flex items-center p-3 text-base text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                <span className="flex-1 ms-3 whitespace-nowrap">MetaMask</span>
                                {/* <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded-sm dark:bg-gray-700 dark:text-gray-400">Popular</span> */}
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-3 text-base text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                <span className="flex-1 ms-3 whitespace-nowrap">MetaMask</span>
                                {/* <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded-sm dark:bg-gray-700 dark:text-gray-400">Popular</span> */}
                            </a>
                        </li>
                    </ul>
                {/* =============== SEARCH SUGGESTIONS END ============ */}

            </div>

            {/* =================== MOBILE NAVIGATION =============== */}
                <MobileNav />
            {/* =================== MOBILE NAVIGATION END =========== */}

        </div>
    )
}
import { useState } from "react" 

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons'


// Flowbite
import { Button, createTheme, ThemeProvider } from 'flowbite-react'
import customTheme from '../styles/tailwind-theme.jsx'


// Components
import Banner from '../components/Banner.jsx'
import TopNav from '../components/TopNav.jsx'
import MobileNav from '../components/MobileNav.jsx'
import { NavLink } from "react-router"

export default function WishList(){

    // ========== Tailwind Classes ============
        const flex_class = "flex items-center justify-between mb-1 pl-2 pt-2 pb-4 fixed left-[270px] bottom-[55px] w-[100%] bg-transparent"
    // ========== Tailwind Classes END ========

    const [bannertype, setBannerType] = useState("Wishlist")

    const wishlists_arr = [ 
        {
            "CollectionName":"2025 Birthday",
            "TotalItems":3,
            "DateAdded":"Nov 15, 2025"
        },
        {
            "CollectionName":"Christmas Party",
            "TotalItems":7,
            "DateAdded":"Oct 11, 2025"
        },
        {
            "CollectionName":"Company Party",
            "TotalItems":2,
            "DateAdded":"July 10, 2025"
        },
        {
            "CollectionName":"2024 Birthday",
            "TotalItems":3,
            "DateAdded":"Dec 11, 2024"
        },
        {
            "CollectionName":"Year Ender Party",
            "TotalItems":7,
            "DateAdded":"Dec 9, 2024"
        },
    ]

    return (
        <div>

            {/* =================== TOP NAVIGATION ================= */}
                <TopNav />
            {/* =================== TOP NAVIGATION END ============= */}

            {/* =================== CONTENT ================ */}
            <div className="min-h-[700px]" id="my_wishlist_div">

                <div className="m-4 mt-10">
                    <h4 className="font-bold">My Wishlist</h4>
                </div>

                {/* ============== FILTER TAB ============= */}
                    <div className="m-4 border-b border-default">
                        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
                            <li className="me-2 text-purple-700 hover:text-purple border-b-[5px] border-b-purple-700" 
                                role="presentation">
                                <button 
                                    className="inline-block p-4 border-b-2 rounded-t-base" 
                                    id="profile-styled-tab" 
                                    type="button" 
                                    role="tab" 
                                    aria-controls="profile" 
                                    aria-selected="false"> 
                                    All 
                                </button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button 
                                    className="inline-block p-4 border-b-2 rounded-t-base hover:text-fg-brand hover:border-brand" 
                                    type="button" 
                                    role="tab" 
                                    aria-controls="dashboard" 
                                    aria-selected="false">
                                        Collections
                                </button>
                            </li>
                        </ul>
                    </div>
                {/* ============== FILTER TAB END ========= */}

                <div id="wishlist_items" className="flex items-center flex-wrap justify-between">
                    { 
                        wishlists_arr.map((wishlist, index) => (

                            <div className="m-2 p-2 border border-gray-300 w-[170px] rounded" key={index}>

                                <div className="text-right">
                                    <FontAwesomeIcon className="mr-2 ml-2" icon={faEllipsisV} />
                                </div>

                                <div className="mb-3 flex items-center justify-center flex-wrap">
                                    <div className="h-[50px] w-[50px] bg-slate-300 m-1"></div>
                                    <div className="h-[50px] w-[50px] bg-slate-300 m-1"></div>
                                    <div className="h-[50px] w-[50px] bg-slate-300 m-1"></div>
                                    <div className="h-[50px] w-[50px] bg-slate-300 m-1"></div>
                                </div>

                                <div className="text-center">
                                    <h4 className="font-bold">{ wishlist.CollectionName }</h4>
                                    <p className="text-gray-500">Total items: <span>{ wishlist.TotalItems }</span></p>
                                    <p>{ wishlist.DateAdded }</p>
                                </div>

                            </div>
                        ))
                    }
                </div>

            </div>

            {/* =================== CONTENT END ============ */}

            {/* =================== ADD NEW (COLLECTION OR WISHLIST) ============= */}
                <NavLink to="/newwishlist" className={ flex_class }>
                    <ThemeProvider theme={customTheme}>
                        <Button type="button" color="primary" className="h-[50px] rounded">
                            <FontAwesomeIcon className="text-3xl" icon={faPlus}/>
                        </Button>
                    </ThemeProvider>
                </NavLink>
            {/* =================== ADD NEW (COLLECTION OR WISHLIST) END ========= */}

            {/* =================== MOBILE NAVIGATION =============== */}
                <MobileNav />
            {/* =================== MOBILE NAVIGATION END =========== */}

        </div>
    )
}
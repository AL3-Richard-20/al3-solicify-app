import { useState } from "react" 

// React Router
import { NavLink, useLocation, useNavigate } from "react-router";

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


// Flowbite
import { Button, createTheme, ThemeProvider } from 'flowbite-react'
import customTheme from '../styles/tailwind-theme.jsx'


// Components
import Banner from '../components/Banner.jsx'
import TopNav from '../components/TopNav.jsx'
import MobileNav from '../components/MobileNav.jsx'
import CollectionItem from "../components/Collection/CollectionItem.jsx";

export default function UserProfile(){

    const body_class = 'min-h-[700px]'
    const anim_css_slideInLeft = 'animate__animated animate__slideInLeft animate__bounce animate__faster'

    const navigate = useNavigate()
    const location = useLocation()

    const user_Id = location.state?.user_id

    // ================ Wishlist Area ==================
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
    // ================ Wishlist Area END ==============

    const collectionInfo = (event, collection_name) => {

        event.preventDefault()

        navigate('/collectionitems', { state: { coltnname:collection_name }} )
    }

    return (
        <div>

            {/* =================== TOP NAVIGATION ================= */}
                <TopNav />
            {/* =================== TOP NAVIGATION END ============= */}

            {/* =================== BANNER =================== */}
                {/* <Banner bannertype={bannertype} /> */}
            {/* =================== BANNER END =============== */}

            <div className={`${body_class} ${anim_css_slideInLeft}`}>

                <div className="m-4 mt-10">
                    <h4 className="font-bold">
                        <NavLink to="/connections">
                            <FontAwesomeIcon className="mr-4" icon={faArrowLeft} />
                        </NavLink>
                    </h4>
                </div>

                <div className="flex items-center justify-between w-full max-w-md rounded-lg border border-gray-200 bg-white p-4 shadow-sm mt-4">

                    {/* Left: Avatar */}
                    <div className="flex items-center gap-4">

                        <div className="h-14 w-14 rounded bg-gray-300" />

                        {/* User Info */}
                        <div className="text-sm">
                            <p className="font-semibold text-gray-800">Username { user_Id }</p>
                            <p className="text-gray-500">Wishlist: 0</p>
                            <p className="text-gray-500">Wishes Fulfilled: 0</p>
                            <p className="text-gray-500">Wish Granted: 0</p>
                        </div>

                    </div>

                    {/* Right: Button */}
                    <ThemeProvider theme={ customTheme }>
                        <Button 
                            className="rounded-md" 
                            color="primary">
                            CONNECT
                        </Button>
                    </ThemeProvider>
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
                                    Wishlist 
                                </button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button 
                                    className="inline-block p-4 border-b-2 rounded-t-base hover:text-fg-brand hover:border-brand" 
                                    type="button" 
                                    role="tab" 
                                    aria-controls="dashboard" 
                                    aria-selected="false">
                                     Fulfilled
                                </button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button 
                                    className="inline-block p-4 border-b-2 rounded-t-base hover:text-fg-brand hover:border-brand" 
                                    type="button" 
                                    role="tab" 
                                    aria-controls="dashboard" 
                                    aria-selected="false">
                                        Granted
                                </button>
                            </li>
                        </ul>
                    </div>
                {/* ============== FILTER TAB END ========= */}

                {/* ================ Wishlist ================ */}
                    <div id="wishlist_items" className="flex items-center flex-wrap justify-between">
                        { 
                            wishlists_arr.map((wishlist, index) => (
                                
                                <CollectionItem 
                                    key={index} 
                                    collctn_name={ wishlist.CollectionName } 
                                    total_items={ wishlist.TotalItems } 
                                    date_added={ wishlist.DateAdded } 
                                    collectionInfo={ collectionInfo } />
                            ))
                        }
                    </div>
                {/* ================ Wishlist END ============ */}

            </div>

            {/* =================== MOBILE NAVIGATION =============== */}
                <MobileNav />
            {/* =================== MOBILE NAVIGATION END =========== */}

        </div>
    )
}
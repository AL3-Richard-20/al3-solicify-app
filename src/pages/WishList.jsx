import { useState } from "react" 

import { NavLink } from "react-router"
import { useNavigate } from "react-router-dom"

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
import CollectionItem from "../components/Collection/CollectionItem.jsx"

export default function WishList(){

    const navigate = useNavigate()

    // ========== Tailwind Classes ============
        const body_class = 'min-h-[700px]'
        const flex_class = "flex items-center justify-between mb-1 pl-2 pt-2 pb-8 fixed left-[270px] bottom-[55px] w-[100%] bg-transparent"
    // ========== Tailwind Classes END ========

    const anim_css_slideInLeft = 'animate__animated animate__slideInLeft animate__bounce animate__faster'

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

    const collectionInfo = (event, collection_name) => {

        event.preventDefault()

        navigate('/collectionitems', { state: { coltnname:collection_name }} )
    }

    return (
        <div>

            {/* =================== TOP NAVIGATION ================= */}
                <TopNav />
            {/* =================== TOP NAVIGATION END ============= */}

            {/* =================== CONTENT ================ */}
            <div className={ `${body_class} ${anim_css_slideInLeft}` } id="my_wishlist_div">

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

                            <CollectionItem 
                                key={index} 
                                collctn_name={ wishlist.CollectionName } 
                                total_items={ wishlist.TotalItems } 
                                date_added={ wishlist.DateAdded } 
                                collectionInfo={ collectionInfo } />
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
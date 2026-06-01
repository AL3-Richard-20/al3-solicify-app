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
        const body_class    = 'min-h-[100vh]'
        const content_class = 'mb-[150px]'

        const anim_css_slideInLeft = 'animate__animated animate__slideInLeft animate__bounce animate__faster'

        const flex_class = "flex items-center justify-end sticky bottom-[85px] w-[100%] bg-transparent"
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

    const collectionInfo = (event, collection_name) => {

        event.preventDefault()

        navigate('/collectionitems', { state: { coltnname:collection_name }} )
    }

    return (
        <div className={ body_class }>

            {/* =================== TOP NAVIGATION ================= */}
                <TopNav />
            {/* =================== TOP NAVIGATION END ============= */}

            {/* =================== CONTENT ================ */}
            <div className={ `${anim_css_slideInLeft} ${ content_class }` } id="my_wishlist_div">

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

                <div id="wishlist_items" className="flex items-center flex-wrap justify-between gap-4 m-2">
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
                        <Button type="button" color="primary" className="h-[50px] rounded m-1">
                            {/* <FontAwesomeIcon className="text-3xl" icon={faPlus}/> */}
                            <ion-icon class="text-3xl" name="add-outline"></ion-icon>
                            {/* Add New */}
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
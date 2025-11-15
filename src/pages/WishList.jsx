import { useState } from "react" 

// Components
import Banner from '../components/Banner.jsx'
import TopNav from '../components/TopNav.jsx'
import MobileNav from '../components/MobileNav.jsx'

export default function WishList(){

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

                <div id="wishlist_items" className="flex items-center flex-wrap justify-between">
                    { 
                        wishlists_arr.map((wishlist, index) => (

                            <div className="m-2 p-2 border border-gray-300 w-[170px] rounded" key={index}>

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

            {/* =================== MOBILE NAVIGATION =============== */}
                <MobileNav />
            {/* =================== MOBILE NAVIGATION END =========== */}

        </div>
    )
}
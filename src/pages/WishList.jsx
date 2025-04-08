import { useState } from "react" 

// Components
import Banner from '../components/Banner.jsx'
import MobileNav from '../components/MobileNav.jsx'

export default function WishList(){

    const [bannertype, setBannerType] = useState("Wishlist")

    return (
        <div>

            {/* =================== BANNER =================== */}
                <Banner bannertype={bannertype} />
            {/* =================== BANNER END =============== */}

            <div className="min-h-[590px]">

                <h4>Wishlist</h4>
            </div>

            {/* =================== MOBILE NAVIGATION =============== */}
                <MobileNav />
            {/* =================== MOBILE NAVIGATION END =========== */}

        </div>
    )
}
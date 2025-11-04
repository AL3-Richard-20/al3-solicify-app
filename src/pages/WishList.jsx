import { useState } from "react" 

// Components
import Banner from '../components/Banner.jsx'
import TopNav from '../components/TopNav.jsx'
import MobileNav from '../components/MobileNav.jsx'

export default function WishList(){

    const [bannertype, setBannerType] = useState("Wishlist")

    return (
        <div>

            {/* =================== TOP NAVIGATION ================= */}
                <TopNav />
            {/* =================== TOP NAVIGATION END ============= */}

            {/* =================== BANNER =================== */}
                {/* <Banner bannertype={bannertype} /> */}
            {/* =================== BANNER END =============== */}

            <div className="min-h-[700px]">

                <h4>Wishlist</h4>
            </div>

            {/* =================== MOBILE NAVIGATION =============== */}
                <MobileNav />
            {/* =================== MOBILE NAVIGATION END =========== */}

        </div>
    )
}
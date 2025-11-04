import { useState } from "react" 

// Components
import Banner from '../components/Banner.jsx'
import TopNav from '../components/TopNav.jsx'
import MobileNav from '../components/MobileNav.jsx'

export default function Granted(){

    const [bannertype, setBannerType] = useState("Granted")

    return (
        <div>

            {/* =================== TOP NAVIGATION ================= */}
                <TopNav />
            {/* =================== TOP NAVIGATION END ============= */}

            {/* =================== BANNER =================== */}
                <Banner bannertype={bannertype} />
            {/* =================== BANNER END =============== */}

            <div className="min-h-[590px]">
                <h4>Granted</h4>
            </div>

            {/* =================== MOBILE NAVIGATION =============== */}
                <MobileNav />
            {/* =================== MOBILE NAVIGATION END =========== */}

        </div>
    )
}
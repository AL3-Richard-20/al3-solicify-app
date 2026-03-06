import { useNavigate, useLocation } from 'react-router'

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

// Flowbite
import { Button, createTheme, ThemeProvider } from 'flowbite-react'
import customTheme from '../styles/tailwind-theme.jsx'

// Components
// import Banner from '../components/Banner.jsx'
import TopNav from '../components/TopNav.jsx'
import MobileNav from '../components/MobileNav.jsx'
import ItemCard from '../components/Item/ItemCard.jsx'

export default function CollectionItems(){

    const body_class = 'min-h-[700px]'
    const anim_css_slideInLeft = 'animate__animated animate__slideInLeft animate__bounce animate__faster'

    const navigate = useNavigate()
    const location = useLocation()

    const collection_name = location.state?.coltnname

    const collection_items = [
        {
            "collItemId":1,
            "itemName":"Item Number 1",
            "itemImage":"Sample.png",
            "itemPrice":"30.00",
            "DateAdded":"July 13, 2026"
        },
        {
            "collItemId":2,
            "itemName":"Item Number 2",
            "itemImage":"Sample.png",
            "itemPrice":"130.50",
            "DateAdded":"July 30, 2026"
        },
        {
            "collItemId":3,
            "itemName":"Item Number 3",
            "itemImage":"Sample.png",
            "itemPrice":"1,750.00",
            "DateAdded":"Aug 03, 2026"
        },
        {
            "collItemId":4,
            "itemName":"Item Number 4",
            "itemImage":"Sample.png",
            "itemPrice":"5,200.00",
            "DateAdded":"Aug 31, 2026"
        }
    ]

    return (
        <div>
            <div>

                {/* =================== TOP NAVIGATION ================= */}
                    <TopNav />
                {/* =================== TOP NAVIGATION END ============= */}

                {/* Modal */}
                <div className={ `${ body_class } ${ anim_css_slideInLeft }` }>

                    {/* Header */}
                    <div className="flex justify-between py-4 text-center font-semibold text-lg border-b">
                        <FontAwesomeIcon className="ml-4" icon={ faArrowLeft } onClick={ (e) => navigate(-1) } />
                        <p>{ collection_name }</p> 
                        <FontAwesomeIcon className="mr-4" icon={ faEllipsisVertical } />
                    </div>

                    {
                        collection_items.map((item) => (

                            <ItemCard 
                                key = { item.collItemId } 
                                item_Id = { item.collItemId }
                                item_name = { item.itemName } 
                                item_price = { item.itemPrice } 
                                date_added = { item.DateAdded } />
                        ))
                    }
                    <div>

                </div>

            </div>

            {/* =================== MOBILE NAVIGATION =============== */}
                <MobileNav />
            {/* =================== MOBILE NAVIGATION END =========== */}

            </div>
        </div>
    )
}
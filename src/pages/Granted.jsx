import { useNavigate } from 'react-router'

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

export default function CollectionItems(){

    const body_class = 'min-h-[700px]'
    const anim_css_slideInLeft = 'animate__animated animate__slideInLeft animate__bounce animate__faster'

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
        }
    ]

    return (
        <div>
            <div>

                {/* =================== TOP NAVIGATION ================= */}
                    <TopNav />
                {/* =================== TOP NAVIGATION END ============= */}

                {/* Modal */}
                <div className={`${body_class} ${anim_css_slideInLeft}`}>

                    {/* Header */}
                    <div className="flex justify-center py-4 text-center font-semibold text-lg border-b">
                        {/* <FontAwesomeIcon className="ml-4" icon={ faArrowLeft } /> */}
                        <p>Granted</p> 
                        {/* <FontAwesomeIcon className="mr-4" icon={ faEllipsisVertical } /> */}
                    </div>

                    {
                        collection_items.map((item) => (

                            <div className="m-4 p-4 rounded-sm border">

                                <div className="flex justify-between items-start" key={ item.collItemId }>

                                    {/* Left Section */}
                                    <div className="flex gap-4">

                                        {/* Image Placeholder */}
                                        <div className="w-20 h-16 bg-gray-400 border border-gray-500"></div>

                                        {/* Text Content */}
                                        <div>
                                            <h2 className="font-semibold text-gray-800 text-sm">
                                                { item.itemName }
                                            </h2>
                                            <p className="text-xs text-gray-600 mt-1">Price: { item.itemPrice }</p>
                                            <p className="text-xs text-gray-600">
                                            Date Added: { item.DateAdded }
                                            </p>

                                            {/* Button */}
                                                {/* <ThemeProvider theme={ customTheme }>
                                                    <Button 
                                                        color="primary" 
                                                        size="sm" 
                                                        className="font-bold my-3">
                                                        Mark as Granted
                                                    </Button>
                                                </ThemeProvider> */}

                                        </div>
                                    </div>

                                    {/* 3-dot Menu */}
                                    <FontAwesomeIcon className="text-gray-600 hover:text-gray-800" icon={ faEllipsisVertical } />
                                    
                                </div>

                            </div>          
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
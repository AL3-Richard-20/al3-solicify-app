import { useNavigate, useLocation } from 'react-router-dom'

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

// Flowbite
import { Button, createTheme, ThemeProvider } from 'flowbite-react'
import customTheme from '../../styles/tailwind-theme.jsx'

export default function ItemCard({item_Id, item_name, item_price, date_added}){

    const location = useLocation()
    const navigate = useNavigate()

    const viewItemInfo = (event, Item_Id) => {

        event.preventDefault()

        navigate('/iteminfo', { state:{ itemid:Item_Id } })
    }

    return (
        <div className="m-4 p-4 rounded-sm border" onClick={ (e) => { viewItemInfo(e, item_Id) }}>

            <div className="flex justify-between items-start" key={ item_Id }>

                {/* Left Section */}
                <div className="flex gap-4">

                    {/* Image Placeholder */}
                    <div className="w-20 h-16 bg-gray-400 border border-gray-500"></div>

                    {/* Text Content */}
                    <div>
                        <h2 className="font-semibold text-gray-800 text-sm">
                            { item_name }
                        </h2>
                        <p className="text-xs text-gray-600 mt-1">Price: { item_price }</p>
                        <p className="text-xs text-gray-600">
                        Date Added: { date_added }
                        </p>

                        {/* Button */}
                        <ThemeProvider theme={ customTheme }>
                            <Button 
                                color="primary" 
                                size="sm" 
                                className="font-bold my-3">
                                Mark as Granted
                            </Button>
                        </ThemeProvider>

                    </div>
                </div>

                {/* 3-dot Menu */}
                <FontAwesomeIcon className="text-gray-600 hover:text-gray-800" icon={ faEllipsisVertical } />
                
            </div>

        </div> 
    )
}
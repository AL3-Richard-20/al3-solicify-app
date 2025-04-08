import ReactDOM from 'react-dom'

// React Router
import { NavLink } from "react-router";

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCartShopping, faCartPlus, faGift, faUsersRectangle, faPowerOff } from '@fortawesome/free-solid-svg-icons'

export default function MobileNav(){

    return (
        <div className="flex items-center justify-between m-1 p-4 bg-white sticky bottom-[0px]">

            <NavLink to="/home" className="text-center">
                <FontAwesomeIcon className="text-2xl" icon={faHouse} />
                {/* <small className="font-bold uppercase">Home</small> */}
            </NavLink>

            <NavLink to="/granted" className="text-center">
                {/* <FontAwesomeIcon className="text-2xl" icon={faGift} /> */}
                <FontAwesomeIcon className="text-2xl" icon={faGift} />
                {/* <small className="font-bold uppercase">Granted</small> */}
            </NavLink>

            <NavLink to="/wishlist" className="text-center">
                <FontAwesomeIcon className="text-2xl" icon={faCartPlus} />
                {/* <small className="font-bold uppercase">Wishlist</small> */}
            </NavLink>

            <NavLink to="/connections" className="text-center">
                <FontAwesomeIcon className="text-2xl" icon={faUsersRectangle} />
                {/* <small className="font-bold uppercase">Connections</small> */}
            </NavLink>

            <NavLink to="/login" className="text-center">
                <FontAwesomeIcon className="text-2xl" icon={faPowerOff} />
                {/* <small className="font-bold uppercase">Log Out</small> */}
            </NavLink>

        </div>
    )
}
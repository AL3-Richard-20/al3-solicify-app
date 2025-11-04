import ReactDOM from 'react-dom'

// React Router
import { NavLink } from "react-router";

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHouse, faCartShopping, faCartPlus, 
    faGift, faUsersRectangle, faPowerOff
} from '@fortawesome/free-solid-svg-icons'

export default function MobileNav(){

    const flex_class = "flex items-center justify-between m-1 p-4 bg-white sticky bottom-[0px]"

    const navlink_icon      = "text-center"
    const navlink_icon_size = "text-2xl"

    return (
        <div className={ flex_class }>

            <NavLink to="/home" className={ navlink_icon }>
                <FontAwesomeIcon className={ navlink_icon_size } icon={faHouse} />
                {/* <small className="font-bold uppercase">Home</small> */}
            </NavLink>

            <NavLink to="/granted" className={ navlink_icon }>
                {/* <FontAwesomeIcon className="text-2xl" icon={faGift} /> */}
                <FontAwesomeIcon className={ navlink_icon_size } icon={faGift} />
                {/* <small className="font-bold uppercase">Granted</small> */}
            </NavLink>

            <NavLink to="/wishlist" className={ navlink_icon }>
                <FontAwesomeIcon className={ navlink_icon_size } icon={faCartPlus} />
                {/* <small className="font-bold uppercase">Wishlist</small> */}
            </NavLink>

            <NavLink to="/connections" className={ navlink_icon }>
                <FontAwesomeIcon className={ navlink_icon_size } icon={faUsersRectangle} />
                {/* <small className="font-bold uppercase">Connections</small> */}
            </NavLink>

            <NavLink to="/login" className={ navlink_icon }>
                <FontAwesomeIcon className={ navlink_icon_size } icon={faPowerOff} />
                {/* <small className="font-bold uppercase">Log Out</small> */}
            </NavLink>

        </div>
    )
}